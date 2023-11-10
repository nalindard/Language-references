<?php
include("database.php");

$name = "Ada Wong";
$pswd = "ResidentEvil";
$hash = password_hash($pswd, PASSWORD_DEFAULT);


$sql = "INSERT INTO users (user, password)
        VALUES ('$name', '$hash')";


try {
    mysqli_query($conn, $sql);
    echo "Success !";
} catch (mysqli_sql_exception) {
    echo "Error: mysqli_sql_exception";
}



mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>Say hi ...!</h2> <br>
</body>

</html>