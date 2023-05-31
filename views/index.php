<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <?php include("SideLayouts/navbarLayout.php") ?>
    <div class="content">
        <div class="container">
            <h1>Welcome to the Weather Dashboard!</h1>
            <h5>Yearly project for Web Aplication made by Anton Kalashnikov</h5>
            <p>
                This project uses API calls to obtain data from openweather.com
                and display it on your screen.
                I also use bootstrap.com css framework and jquery.
                Settings are saved to the local storage.
            </p>
        </div>
    </div>
    <?php include("SideLayouts/footer.php")?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script src="scripts/script.js"></script>
</body>

</html>