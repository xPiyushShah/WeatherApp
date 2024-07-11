<?php
session_start();

// Check if admin is logged in
if (isset($_SESSION["admin_authenticated"]) && $_SESSION["admin_authenticated"] === true) {
    // Unset all session variables
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Redirect to login page after logout
    header("Location: admin_login.html");
    exit;
} else {
    // If admin session is not set, redirect to login page
    header("Location: admin_login.html");
    exit;
}
?>
