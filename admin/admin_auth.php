<?php
session_start();

// Validate form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $valid_username = "admin";
    $valid_password = "admin123";

   
    $username = $_POST["username"];
    $password = $_POST["password"];

   
    if ($username === $valid_username && $password === $valid_password) {
        
        $_SESSION["admin_authenticated"] = true;
        header("Location:  nxt_admin.html");
        exit;
    } else {
  
        header("Location: admin.html?error=invalid_credentials");
        exit;
    }
} else {

    header("Location: admin.html");
    exit;
}
?>
