<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>radiobuttons.php</title>
</head>

<body>
    <form action="radiobuttons.php" method="post">
        <fieldset>
            <legend>Radio Buttons</legend>
            <input type="radio" name="credit_card" value="VISA"> VISA <br>
            <input type="radio" name="credit_card" value="Master Card"> Master Card <br>
            <input type="radio" name="credit_card" value="American Express"> American Express <br>
            <input type="submit" name="confirm" value="confirm">
        </fieldset>
    </form>
</body>

</html>

<?php

if (isset($_POST["confirm"])) {

    if (isset($_POST["credit_card"])) {
        $credit_card = $_POST["credit_card"];
        echo "" . $credit_card . "";
    } else {
        echo "No option ?";
    }
}
