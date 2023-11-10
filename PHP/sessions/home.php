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
    <h2>Home Page</h2>

    <form action="../sessions/home.php" method="post">
        <input type="submit" value="logout" name="logout">
    </form>

    <hr>
    <br>
</body>

</html>

<?php


echo $_SESSION["un"] . "<br>";
echo $_SESSION["ps"] . "";


if (isset($_POST["logout"])){
    session_destroy();
    header("Location: index.php");
}