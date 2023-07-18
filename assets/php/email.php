<?php
if (isset($_POST['submit'])) {
    $to = "YOUR_EMAIL_ADDRESS_HERE";



    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = "Contact Form";
    $body = $_POST['message'];
    $headers = 'From: ' . $email . "\r\n";


    $body = "name : " . $name . "\r\n" .
        "Phone : " . $phone . "\r\n" .
        "Message : " . $body;
    if (mail($to, $subject, $body, $headers)) {
        echo "Mail Sent!";
    } else {
    }
}
?>