<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        label {
            display: block;
            width: 270px;
            display: flex;
            justify-content: space-between;
        }
    </style>
</head>

<body>

</body>
<main>
    <form action="get_post.php" method="get">
        <label>user name<input type="text" name="username"></label>
        <label>password<input type="password" name="password"></label>
        <button type="submit">log in</button>
    </form>

    <hr>

    <form action="get_post.php" method="post">
        <label>user name<input type="text" name="username"></label>
        <label>password<input type="password" name="password"></label>
        <button type="submit">log in</button>
    </form>
</main>

</html>

<?php
// echo $_GET["username"] . "</br>";
// echo "{$_GET["password"]} </br>";

echo $_POST["username"] . "</br>";
echo "{$_POST["password"]} </br>";
?>