
document.getElementById("settingsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the city input value
    var city = document.getElementById("cityInput").value;
    
    // Save the city into local storage
    localStorage.setItem("city", city);
    
    // Redirect to the home page
    window.location.href = "index.html";
});
