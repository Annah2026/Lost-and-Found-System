CREATE DATABASE IF NOT EXISTS lost_and_found_system;

USE lost_and_found_system;

CREATE TABLE reports (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    report_type VARCHAR(20) NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    other_category VARCHAR(100) NULL,
    location VARCHAR(100) NOT NULL,
    item_date DATE NOT NULL,
    description TEXT NOT NULL
);