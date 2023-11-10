<?php

for ($i = 0; $i < 100; $i += 2) {
    echo $i + 2 . "</br>";
    if ($i == 50) break;
}

echo "<hr>";

$z = 10;

while ($z <= 100) {
    echo $z . "</br>";
    if ($z == 50) break;
    $z++;
}
