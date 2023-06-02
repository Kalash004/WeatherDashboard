<?php
if (!isset($_SESSION["user_name"])) {
    session_start();
}
?>

<!DOCTYPE html>
<html lang="en">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/"><img src="../images/logo.png" id="logo" alt="WeatherDashboard"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <?php if (isset($_SESSION["user_name"])): ?>
            <h5 class="text-white">
                <?php echo $_SESSION["user_name"] ?>
            </h5>
        <?php else: ?>
            <h5 class="text-white">Not logged in</h5>
        <?php endif; ?>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/forecast">Forecast</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/settings">Settings</a>
                </li>
                <li class="nav-item">
                    <?php if (isset($_SESSION["user_name"])): ?>
                        <a class="nav-link" href="/logout">Log Out</a>
                    <?php else: ?>
                        <a class="nav-link" href="/login">Log In</a>
                    <?php endif; ?>
                </li>
            </ul>
        </div>
    </div>
</nav>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
<script src="/scripts/navbarLocator.js"></script>

</html>