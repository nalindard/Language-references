<?php

// Arithmetic,
// + - * / ** %

$x = 227;
$y = 25;
$z = null;

$z = $x + $y;
$z = $x - $y;
$z = $x * $y;
$z = $x / $y;
$z = $x ** $y;
$z = $x % $y;

echo $z;
echo"</br>";

// Increment / Decrement,

$count = 10;

$count = $count + 1;
$count++;
$count--;
$count += 2;
$count -= 2;

echo $count;
echo"</br>";


// Operator Precedence

// ()
// **
// * / %
// + -

$val = 1 + 2 - 3 * 4 / 5 ** 6;
echo $val;
echo"</br>";