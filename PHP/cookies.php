<?php

echo"<h2>cookie page</h2>";

// set
setcookie("fac_car","senna", time() + (86400 * 2) ,"/");
setcookie("fac_car_2","jesko", time() + (86400 * 2) ,"/");

// delete,
// setcookie("fac_car","senna", time() -0,"/");

foreach ($_COOKIE as $key => $value) {
    echo "{$key} {$value} <br>";
}