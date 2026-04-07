<?php
/**
 * login.php - Processamento de Login e Sessão
 */
header('Content-Type: application/json');
require_once 'db_config.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(["status" => "error", "message" => "Preencha todos os campos."]);
        exit;
    }

    // 1. Buscar usuário na tabela real do jogo (AccountInfo)
    $sql = "SELECT Username, Real_CERPass, Permission FROM AccountInfo WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Comparação direta de senha (texto plano para o jogo)
    if ($user && $password === $user['Real_CERPass']) {
        // 2. Sucesso: Iniciar Sessão
        $_SESSION['user_id'] = $user['Username'];
        $_SESSION['username'] = $user['Username'];
        $_SESSION['permission'] = $user['Permission'];

        // Gerar um token simples
        $token = bin2hex(random_bytes(16));

        echo json_encode([
            "status" => "success",
            "message" => "Login realizado com sucesso!",
            "user" => [
                "id" => $user['Username'],
                "username" => $user['Username'],
                "permission" => $user['Permission'],
                "token" => $token,
                "cerpass" => $user['Real_CERPass']
            ],
            "Code" => 0,
            "Token" => $token,
            "CERPass" => $user['Real_CERPass']
        ]);
    } else {
        // 3. Falha
        echo json_encode([
            "status" => "error", 
            "message" => "Usuário ou senha inválidos.",
            "Code" => 1
        ]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
}
?>
