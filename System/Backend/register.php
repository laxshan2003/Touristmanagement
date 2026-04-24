<?php
include 'db_connect.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // secure hashing

$sql = "INSERT INTO Users (name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful! <a href='login.php'>Login here</a>";
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>
