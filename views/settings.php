<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings - Weather Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="styles/settings.css">
</head>

<body>
    <?php include("SideLayouts/animation.php") ?>
    <?php include("SideLayouts/navbarLayout.php") ?>
    <div class="animation">
        <div class="content">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Settings</h5>
                    <form id="settingsForm">
                        <div class="form-group">
                            <label for="cityInput">
                                <h6>City:</h6>
                            </label>
                            <input type="text" class="form-control" id="cityInput" placeholder="Enter your city"
                                required>
                            <label for="unitsInput">
                                <h6>Units:</h6>
                            </label> <br>
                            <div class="d-flex justify-content-evenly">
                                <label for="unitsInput">Metric</label><br>
                                <input style="min-height: 40px; max-width:40px" type="radio" class="form-control flex-item" name="unitsInput" id="unitsInputMetric"
                                value="metric" required>
                                <label for="unitsInput">Imperial</label><br>
                                <input style="min-height: 40px; max-width:40px" type="radio" class="form-control flex-item" name="unitsInput" id="unitsInputImperial"
                                value="imperial" required>
                                <label for="unitsInput">Standard</label><br>
                                <input style="min-height: 40px; max-width:40px" type="radio" class="form-control flex-item"
                                name="unitsInput" id="unitsInputStandard" value="standard" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <?php include("SideLayouts/footer.php") ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script src="scripts/settings.js"></script>
</body>

</html>