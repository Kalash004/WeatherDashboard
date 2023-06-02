<?php
// validation of data
if (empty($_POST["name"])) {
    die("Name is required");
}
if (empty($_POST["email"])) {
    die("Email is required");
}
if (empty($_POST["password"])) {
    die("Password is required");
}
if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}
if (strlen($_POST["password"]) < 8) {
    die("Password must be longer than 8 characters");
}
if (!preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least one letter");
}
if (!preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain at least one number");
}
$passHash = password_hash($_POST["password"], PASSWORD_DEFAULT);
$mysqli = require __DIR__ . "/DBC.php";

$insertSQL = "INSERT INTO users (userName, email, hashedPassword) values ( ?, ?, ?)";
$statement = $mysqli->stmt_init();
try {
    $statement->prepare($insertSQL);
} catch (Exception $e) {
    die("SQL error: " . $mysqli->error);
}
$statement->bind_param("sss", $_POST["name"], $_POST["email"], $passHash);
try {
    $statement->execute();
    header("Location: signup-success");
    exit;
} catch (Exception $e) {
    if ($mysqli->errno === 1062) {
        die("User name or Email is already registered");
    } else {
        die("An error occured : " . $mysqli->error . " : " . $mysqli->errno);
    }
}