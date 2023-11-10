<?php

// isset() => returns true if variable is declared & not null.
// empty() => returns true if variable is not declared false, null || "".

$username = "UND3FINED";
// $username = null;

if (isset($username)) {
    echo "Username Available";
} else {
    echo "Username Not Available";
}

echo "<hr>";

$speed = "Falcon";
$speed = "";
$speed = false;
$speed = null;

if (empty($speed)) {
    echo "Not Present";
} else {
    echo "Present";
}
