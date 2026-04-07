<?php
/**
 * convert_passwords.php - Utilitário para converter senhas de texto puro para Hash (BCRYPT)
 * 
 * ATENÇÃO: Execute este script apenas uma vez para migrar suas contas antigas.
 * Ele detecta se a senha já é um hash e só converte as que não são.
 */
header('Content-Type: text/plain; charset=utf-8');
require_once 'db_config.php';

echo "Iniciando migração de senhas...\n";

// 1. Buscar todas as contas
$sql = "SELECT id, username, password FROM Accounts";
$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die("Erro ao buscar contas: " . print_r(sqlsrv_errors(), true));
}

$convertedCount = 0;
$skippedCount = 0;

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $id = $row['id'];
    $username = $row['username'];
    $currentPassword = $row['password'];

    // 2. Verificar se já é um hash BCRYPT (geralmente começa com $2y$)
    if (strpos($currentPassword, '$2y$') === 0) {
        $skippedCount++;
        continue;
    }

    // 3. Gerar novo hash e atualizar
    $newHash = password_hash($currentPassword, PASSWORD_BCRYPT);
    
    $updateSql = "UPDATE Accounts SET password = ? WHERE id = ?";
    $updateParams = array($newHash, $id);
    $updateStmt = sqlsrv_query($conn, $updateSql, $updateParams);

    if ($updateStmt) {
        echo "[OK] Usuário '$username' (ID $id) migrado com sucesso.\n";
        $convertedCount++;
    } else {
        echo "[ERRO] Falha ao migrar '$username': " . print_r(sqlsrv_errors(), true) . "\n";
    }
}

echo "\n--- Resumo ---\n";
echo "Convertidas: $convertedCount\n";
echo "Puladas (já eram hash): $skippedCount\n";
echo "Concluído.\n";

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>
