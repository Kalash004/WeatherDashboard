<?php 
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
       logUserIn();
    }

    function logUserIn() {
        $mysqli = require 'services/DBC.php';
        $selectSQL = "SELECT * FROM users WHERE email = ?";
        try {
            $user = $mysqli->prepare("select * from `User` where Username = ?");
        } catch (Exception $e) {
            die("SQL error: " . $mysqli->error);
        }
        
        if (!checkCredentials($user)) {
            die("User login or password is not right");
        } 
        // after login logic
        echo ("Logged in");
    }

    function checkCredentials($user) {
        if (!$user) {
            die ("User doesnt exist");
        }
        return password_verify($_POST["password"],$user["hashedPassword"]) ;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Weather Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="../styles/loginsignupstyle.css">
</head>

<body>
    <?php include("SideLayouts/animation.php") ?>
    <?php include("SideLayouts/navbarLayout.php") ?>
    <div class="animation">
        <div class="content">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    <form action="login" method="POST">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                    <p class="mt-3">Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>
    <?php include("SideLayouts/footer.php") ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>
</html>