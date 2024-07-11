<?php
$servername = "localhost";  // Change this if your database is hosted elsewhere
$username = "root";     // Replace with your MySQL username
$password = "";     // Replace with your MySQL password
$dbname = "rail_db";  // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

// Close connection
$conn->close();
?>
