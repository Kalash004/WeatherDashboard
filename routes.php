<?php

require_once __DIR__.'/router.php';

// ##################################################
// ##################################################
// ##################################################
get('/', 'views/index.php');
get('/home','views/home.php');
any('/login','views/login.php');
get('/forecast','views/forecast.php');
get('/settings','views/settings.php');
get('/signup','views/signup.php');
get('/signup-success','services/after-verificaiton/signup-success.php');
get('/logout',"services/logout.php");
post('/process-signup','services/process-signup.php');
// For GET or POST
// The 404.php which is inside the views folder will be called
// The 404.php has access to $_GET and $_POST
any('/404','views/404.php');
