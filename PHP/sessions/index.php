<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>This is Login Page !</h2>

    <!-- <form action="../sessions/home.php" method="post"> -->
    <form action="../sessions/index.php" method="post">
        <fieldset>
            <legend>login</legend>

            Name:<input type="text" name="user"> <br>
            Pswd:<input type="password" name="password"> <br>

            <input type="submit" value="submit" name="submit">

        </fieldset>
    </form>

    <hr>

    <a href="../sessions/home.php">Home page</a>
    <br>
</body>

</html>

<?php

if (isset($_POST["submit"])) {
    if (!empty($_POST["user"]) && !empty($_POST["password"])) {
        $_SESSION["un"] = $_POST["user"];
        $_SESSION["ps"] = $_POST["password"];

        header("Location: home.php");

        // echo $_SESSION["un"] . "<br>";
        // echo $_SESSION["ps"] . "<br>";
    }
} else {
    echo"Missing fields !";
}

// $_SESSION["un"] = "null";
// $_SESSION["ps"] = "null";

// echo $_SESSION["un"] . "<br>";
// echo $_SESSION["ps"] . "";

?>