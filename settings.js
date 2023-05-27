
document.getElementById("settingsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the city input value
    var city = document.getElementById("cityInput").value;
    var units = document.getElementById("unitsInput").value;
    // Save the city into local storage
    localStorage.setItem("city", city);
    localStorage.setItem("units", units);
    // Redirect to the home page
    window.location.href = "index.html";
});
