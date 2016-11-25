<?php

echo 'Hello world, I have MySQL ';

$db = new mysqli('db', 'root', 'root', 'mysql');
echo $db->connect_error;


$result = $db->query('select version()');
print_r($result->fetch_row()[0]);
