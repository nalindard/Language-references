<?php

$password = "NOT_D3FIN3D_YET";

$hash = password_hash($password, PASSWORD_DEFAULT);

echo $password;
echo "<br>";
echo $hash;

if (password_verify($password, $hash)) {
// if (password_verify($password, $hash . "_")) {
    echo "<br>";
    echo "password matches !";
} else {
    echo "<br>";
    echo "password don't match !";
}
