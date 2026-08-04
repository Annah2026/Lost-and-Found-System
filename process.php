<?php

require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $item_name = trim($_POST["item_name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $category = trim($_POST["category"] ?? "");
    $item_date = trim($_POST["item_date"] ?? "");
    $description = trim($_POST["description"] ?? "");

if (
        empty($item_name) ||
        empty($email) ||
        empty($category) ||
        empty($item_date) ||
        empty($description)
    ) {
        die("Please fill in all required fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Please enter a valid email address.");
    }

}
?>