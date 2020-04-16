<?php

$host = 'localhost';
$dbName = 'toets';
$username = 'root';
$password = '';

$connection = new PDO("mysql:host=".$host.";dbname=".$dbName, $username, $password);
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);