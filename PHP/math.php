<?php
$num = 127;
$total = null;

$total = abs($num);               // To positive,
$total = round($num);             // To round,
$total = floor($num);             // To floor,
$total = ceil($num);              // To ceil,
$total = pow($num, 2);            // To power,
$total = sqrt($num);              // To sqrt,
$total = max($num, 200, 1024);    // Max number,
$total = min($num, 200, 1024);    // Min number,
$total = pi();                    // Pi,
$total = rand(1, 100);            // Random number,

echo"". $total ."". $total ."". $total;