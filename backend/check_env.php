<?php
/**
 * check_env.php - Script de diagnóstico para o ambiente PHP/SQL Server
 */
header('Content-Type: text/plain; charset=utf-8');

echo "--- Diagnóstico do Sistema ---\n";
echo "Versão do PHP: " . phpversion() . "\n";
echo "Sistema Operacional: " . PHP_OS . "\n";

echo "\n--- Verificando Extensões SQLSRV ---\n";
$extensions = ['sqlsrv', 'pdo_sqlsrv'];
foreach ($extensions as $ext) {
    if (extension_loaded($ext)) {
        echo "[OK] Extensão '$ext' está carregada.\n";
    } else {
        echo "[ERRO] Extensão '$ext' NÃO está carregada.\n";
    }
}

echo "\n--- Testando Conexão ---\n";
$serverName = "WANGLER\\ICARUS"; 
$connectionOptions = array(
    "Database" => "RidersOfIcarus",
    "Uid" => "sa",       
    "PWD" => "123456", 
    "CharacterSet" => "UTF-8"
);

if (function_exists('sqlsrv_connect')) {
    echo "Tentando conectar a $serverName...\n";
    $conn = @sqlsrv_connect($serverName, $connectionOptions);
    
    if ($conn === false) {
        echo "[FALHA] Não foi possível conectar ao SQL Server.\n";
        echo "Erros:\n";
        print_r(sqlsrv_errors());
        
        echo "\nTentando via IP do Hamachi (25.49.15.11)...\n";
        $conn_ip = @sqlsrv_connect("25.49.15.11", $connectionOptions);
        if ($conn_ip === false) {
            echo "[FALHA] Também falhou via IP.\n";
            print_r(sqlsrv_errors());
        } else {
            echo "[SUCESSO] Conectado via IP do Hamachi!\n";
        }
    } else {
        echo "[SUCESSO] Conexão estabelecida com '$serverName'!\n";
    }
} else {
    echo "[CRÍTICO] A função sqlsrv_connect não existe. A extensão não está instalada corretamente.\n";
}
?>
