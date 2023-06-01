<?php
require_once __DIR__.'/router.php';
// ##################################################
// ##################################################
// ##################################################
get('/', 'views/index.php');
get('/home','views/home.php');
get('/login','views/login.php');
get('/forecast','views/forecast.php');
get('/settings','views/settings.php');
get('/signup','views/signup.php');
post('/process-singup.php',"services/process-singup.php");
// For GET or POST
// The 404.php which is inside the views folder will be called
// The 404.php has access to $_GET and $_POST
any('/404','views/404.php');