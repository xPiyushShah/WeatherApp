<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize input data
    $fullName = filter_var($_POST["fullName"], FILTER_SANITIZE_STRING);
    $phoneNumber = filter_var($_POST["phoneNumber"], FILTER_SANITIZE_STRING);
    $address = filter_var($_POST["address"], FILTER_SANITIZE_STRING);
    $age = filter_var($_POST["age"], FILTER_SANITIZE_NUMBER_INT);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $adharCard = filter_var($_POST["adharCard"], FILTER_SANITIZE_STRING);
    $trainSelect = filter_var($_POST["trainSelect"], FILTER_SANITIZE_STRING);
    $trid = filter_var($_POST["trid"], FILTER_SANITIZE_STRING);

    // Validate input (you can add more validation as per your requirements)
    if (empty($fullName) || empty($phoneNumber) || empty($address) || empty($age) || empty($email) || empty($adharCard) || empty($trainSelect) || empty($trid)) {
        die("All fields are required.");
    }

    // Database connection parameters
    $servername = "localhost"; // Replace with your server name
    $username = "root"; // Replace with your database username
    $password = ""; // Replace with your database password
    $dbname = "gst_db"; // Replace with your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement to insert data into database using prepared statements
    $sql = "INSERT INTO lullu (fullName, phoneNumber, address, age, email, adharCard, trainSelect, trid) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssissss", $fullName, $phoneNumber, $address, $age, $email, $adharCard, $trainSelect, $trid);

    // Execute the query
    if ($stmt->execute()) {
        echo '<script>alert("Booked")</script>'; 
    } else {
        echo "Error: " . $sql . "<br>" . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    // Redirect or handle if accessed directly without form submission
    echo "Form submission error.";
}
?>
