<?php

// Database connection
$conn = new mysqli("localhost", "root", "", "lost_and_found_system");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $report_type = $_POST["report_type"];
    $item_name = $_POST["item_name"];
    $category = $_POST["category"];
    $other_category = $_POST["other_category"] ?? "";
    $location = $_POST["location"];
    $item_date = $_POST["item_date"];
    $description = $_POST["description"];

    // Prepare SQL statement
    $stmt = $conn->prepare(
        "INSERT INTO reports
        (full_name, email, report_type, item_name, category, other_category, location, item_date, description)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );

    $stmt->bind_param(
        "sssssssss",
        $full_name,
        $email,
        $report_type,
        $item_name,
        $category,
        $other_category,
        $location,
        $item_date,
        $description
    );

    // Save the report
    if ($stmt->execute()) {
        echo "Report submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();

?>