<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gst_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data
$sql = "SELECT * FROM lullu";
$result = $conn->query($sql);

// Array to hold data
$data = array();

if ($result->num_rows > 0) {
    // Fetch rows and push to $data array
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo json_encode(array('error' => 'No data found'));
    exit();
}

// Close connection
$conn->close();

// Set headers to allow cross-origin resource sharing (CORS)
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Output JSON data
echo json_encode($data);
?>
