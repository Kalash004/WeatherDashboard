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
if (!filter_var($_POST["email"],FILTER_VALIDATE_EMAIL)) {
    die("Valid email is required");
}
if (strlen($_POST["password"]) < 8) {
    die("Password must be longer than 8 characters");
} 
if (!preg_match("/[a-z]/i",$_POST["password"])) {
    die("Password must contain at least one letter");
}
if (!preg_match("/[0-9]/",$_POST["password"])) {
    die("Password must contain at least one number");
}


print_r($_POST);