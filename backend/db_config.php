<?php
/**
 * db_config.php - Configuração de Conexão via PDO (SQL Server)
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

$serverName = "WANGLER\\ICARUS"; 
$database = "ICARUS_Login_Database";
$uid = "sa";
$pwd = "123456";

// Tenta conectar primeiro pelo nome do servidor, depois pelo IP do Hamachi como fallback
try {
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database;LoginTimeout=5", $uid, $pwd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Fallback para o IP do Hamachi se não conseguir conectar pelo nome
    try {
        $hamachiIp = "25.49.15.11";
        $conn = new PDO("sqlsrv:server=$hamachiIp;Database=$database;LoginTimeout=5", $uid, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e2) {
        die(json_encode([
            "status" => "error",
            "message" => "Erro de conexão com o banco de dados.",
            "details" => "Falha ao conectar em $serverName e no IP $hamachiIp. Verifique se o SQL Server e o Hamachi estão ligados.",
            "error_info" => $e2->getMessage()
        ]));
    }
}
?>
