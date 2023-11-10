<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="checkboxes.php" method="post">
        <fieldset>
            <legend>Check boxes</legend>
            <input type="checkbox" name="cars[]" value="Senna"> Senna <br>
            <input type="checkbox" name="cars[]" value="Skyline"> Skyline <br>
            <input type="checkbox" name="cars[]" value="Veneno"> Veneno <br>
            <input type="checkbox" name="cars[]" value="Jesko"> Jesko <br>
            <input type="submit" name="submit" value="submit">
        </fieldset>
    </form>
</body>

</html>


<?php

if (isset($_POST["submit"])) {
    $cars = $_POST["cars"];

    foreach ($cars as $car => $v) {
        echo $car . " - " . $v . "</br>";
    }
}
