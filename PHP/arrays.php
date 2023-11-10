<?php

$cars = array("Senna", "Skyline", "Jesko", "Veneno", "Avantador");

foreach ($cars as $car) {
    echo $car . "</br>";
}

echo"<hr>";


$cars[0] = "Maclaren Senna";
array_pop($cars);
array_push($cars,"Ford Mustang");
array_shift($cars);

$cars = array_reverse($cars);
$cars = array_reverse($cars);

foreach ($cars as $key => $value) {
    echo  $key . ". " . $value . "</br>";
}

echo "<hr>";

echo "<strong>Count of cars</strong>: " . count($cars);