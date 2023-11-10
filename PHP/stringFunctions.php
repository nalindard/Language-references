<?php

$the_name = "     I'm the Falcon            ";
$contact = "123-456-7890";

$the_name = strtolower($the_name);
$the_name = strtoupper($the_name);
$the_name = trim($the_name);
$the_name = str_pad($the_name, 20, "-");

$the_name = "Falcon";

$contact = str_replace("-", "", $contact);
$contact = strrev($contact);
$contact = str_shuffle($contact);

$contact = "123-456-7890";

echo $the_name;
echo "</br>";
echo $contact;


echo "</br>";
$eql = strcmp($the_name, "Falcon");
echo $eql;


echo "</br>";
echo "</br>";

echo strlen($contact);
echo "</br>";

echo strpos($contact, "-");
echo "</br>";
echo "</br>";

echo substr($the_name, 0, 2);
echo "</br>";
echo substr($contact, 4);

echo "</br>";
echo "</br>";

$the_name = "I'm the Falcon";

$str_arr = explode(" ", $the_name);

foreach ($str_arr as $str) {
    echo $str;
    echo "</br>";
}

echo "</br>";

echo implode(" - ", $str_arr);