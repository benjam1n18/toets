<?php

include_once 'connection.inc.php';

if ($_SERVER["REQUEST_METHOD"] != "POST") return;

$u_name = $_POST["user_name"]; 
$u_email = $_POST["user_email"];

if (empty($u_name)){
    die("Please enter your name");
}
if (empty($u_email) || !filter_var($u_email, FILTER_VALIDATE_EMAIL)){
    die("Please enter a valid email address");
}


function emailExists($pdo, $email) {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email=?");
    $stmt->execute([$email]); 
    return $stmt->fetchColumn();
}

if (emailExists($connection, $u_email)) {
    echo"found";
}
 
$sql = "INSERT INTO users (`email`,`name`) VALUES(?,?)";
$stmt = $connection->prepare($sql);
$stmt->execute([$u_name, $u_email]);
 