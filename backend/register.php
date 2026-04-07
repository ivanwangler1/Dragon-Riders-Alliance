<?php
/**
 * register.php - Processamento de Cadastro de Usuário
 */
header('Content-Type: application/json');
require_once 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $email = trim($_POST['email'] ?? '');
    $age = intval($_POST['age'] ?? 0);

    if (empty($username) || empty($password) || empty($email)) {
        echo json_encode(["status" => "error", "message" => "Todos os campos são obrigatórios."]);
        exit;
    }

    // 1. Verificar se o usuário já existe na AccountInfo
    $sql_check = "SELECT Username FROM AccountInfo WHERE Username = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->execute([$username]);

    if ($stmt_check->fetch()) {
        echo json_encode(["status" => "error", "message" => "Este nome de cavaleiro já está em uso."]);
        exit;
    }

    // 2. Inserir novo usuário na AccountInfo
    // Gerar UUID aleatório no formato esperado
    $uuid = sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),
        mt_rand(0, 0xffff),
        mt_rand(0, 0x0fff) | 0x4000,
        mt_rand(0, 0x3fff) | 0x8000,
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
    $md5_pass = md5($password);

    $sql_insert = "INSERT INTO AccountInfo (Username, Password, Real_CERPass, Email, UserAge, UUID, Permission, RegisterTime, RegisterIP) VALUES (?, ?, ?, ?, ?, ?, 0, GETDATE(), '127.0.0.1')";
    $stmt_insert = $conn->prepare($sql_insert);
    
    if ($stmt_insert->execute([$username, $md5_pass, $password, $email, $age, $uuid])) {
        echo json_encode(["status" => "success", "message" => "Conta criada com sucesso! Bem-vindo a Midellas."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Falha ao criar conta.", "details" => $stmt_insert->errorInfo()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
}
?>
