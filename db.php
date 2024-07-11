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
}

// SQL query to fetch data
$sql = "SELECT * FROM trains";
$result = mysqli_query($conn, $sql);  // Use mysqli_query instead of $conn->query

// Check if there are results
if (mysqli_num_rows($result) > 0) {
    // Fetch data and store in array
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    // Encode array to JSON and output the results
    echo json_encode($data);
} else {
    echo "No results found";
}

// Close result set
mysqli_free_result($result);

// Close connection
$conn->close();
?>
