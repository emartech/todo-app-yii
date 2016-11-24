<?php

echo 'Hello world, I have MySQL ';

$db = new mysqli('172.18.0.1', 'root', 'root', 'mysql');
echo $db->connect_error;


$result = $db->query('select version()');
print_r($result->fetch_row()[0]);
