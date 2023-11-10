<?php

$cars = array(
    "Senna"     => "Maclaren",
    "Veneno"    => "Lambogini",
    "Skyline"   => "Nissan",
    "Jesco"     => "Koenigsegg",
);

echo $cars["Senna"];

echo "<hr>";

foreach ($cars as $key => $value) {
    echo $key . " - Engineered by- " . $value . "</br>";
}


echo "<hr>";

$cars["Veneno"] = "Lamborghini";
$cars["Mustang"] = "Ford";


foreach ($cars as $key => $value) {
    echo $key . " - Engineered by- " . $value . "</br>";
}



echo "<hr>";

array_pop($cars);
array_shift($cars);


foreach ($cars as $key => $value) {
    echo $key . " - Engineered by- " . $value . "</br>";
}


echo "<hr>";

$keys = array_keys($cars);

foreach ($keys as $key) {
    echo $key . "</br>";
}


echo "<hr>";

$values = array_values($cars);

foreach ($values as $value) {
    echo $value . "</br>";
}


echo "<hr>";

$cars = array_flip($cars);

foreach ($cars as $key => $value) {
    echo $key . " - by Engineered - " . $value . "</br>";
}


echo "<hr>";

$cars = array_reverse($cars);

foreach ($cars as $key => $value) {
    echo $key . " - by Engineered - " . $value . "</br>";
}

echo "<h2>Car count is: 0" . count($cars) . ".</h2>";