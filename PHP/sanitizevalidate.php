<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="sanitizevalidate.php" method="post">
        <label for="username">User Name:</label>
        <input type="text" name="username" id="username">

        <br>

        <label for="num">Number:</label>
        <input type="text" name="num" id="num">

        <br>

        <label for="mail">Email:</label>
        <input type="email" name="mail" id="mail">

        <input type="submit" name="submit" value="SUBMIT">

        <hr>
    </form>
</body>

</html>

<?php

if (isset($_POST["submit"])) {

    // Filter ----------------------------------
    
    // // $username = $_POST["username"];
    
    // $username =  filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    // echo $username;
    
    // // $num = $_POST["num"];
    // $num = filter_input(INPUT_POST, "num", FILTER_SANITIZE_NUMBER_INT);
    
    // echo "</br>";
    
    // echo $num;
    
    // $mail = filter_input(INPUT_POST, "mail", FILTER_SANITIZE_EMAIL);
    
    // echo "</br>";
    
    // echo $mail;
    
    
    // Validate ----------------------------------
    
    $num = filter_input(INPUT_POST, "num", FILTER_VALIDATE_INT);
    echo$num;
    
    echo "</br>";

    $mail = filter_input(INPUT_POST, "mail", FILTER_VALIDATE_EMAIL);
    echo $mail;   
    
}
