<?php 

$host = "localhost";
$dbName = "wazaverecny";
$userName = "root";
$password = "";

$mysqli = new mysqli($host,$userName,$password,$dbName);

if ($mysqli->connect_errno) {
    die("Connection to the database failed" . $mysqli->connect_error);
}  

return $mysqli;