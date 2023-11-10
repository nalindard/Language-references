<?php

function say_hi($name)
{
    echo "Say hi {$name}";
}
say_hi("UND3FIN3D");


echo "</br>";

function is_evan(int $num): bool
{
    return $num % 2;
}

echo is_evan(27);
echo "</br> -";
echo is_evan(26);
echo "</br> -";
