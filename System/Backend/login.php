<?php
session_start();
include 'db_connect.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM Users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        $_SESSION['userID'] = $row['userID'];
        $_SESSION['name'] = $row['name'];
        echo "Login successful! Welcome, " . $row['name'];
        // redirect to user dashboard
        header("Location: userDashboard.php");
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found with this email.";
}
$conn->close();
?>
