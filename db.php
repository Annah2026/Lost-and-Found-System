<?php
// Database configuration for your lost_and_found_system
$host     = "localhost";
$username = "root";               // Default MySQL user for XAMPP / WAMP / MAMP
$password = "";                   // Default MySQL password (leave empty for local dev)
$dbname   = "lost_and_found_system";

// Create MySQLi connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check if the connection succeeded
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>
