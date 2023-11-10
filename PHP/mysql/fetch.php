<?php
include("database.php");

// $sql = "SELECT * FROM users WHERE user = 'Aerith'";
$sql = "SELECT * FROM users";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // $row = mysqli_fetch_assoc($result);
    // echo $row["id"] . "<br>";
    // echo $row["user"] . "<br>";
    // echo $row["reg_date"] . "<br>";
    
    while ($row = mysqli_fetch_assoc($result)) {
        echo $row["id"] . "<br>";
        echo $row["user"] . "<br>";
        echo $row["reg_date"] . "<br>";
    }

} else {
    echo "No user fonud !";
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