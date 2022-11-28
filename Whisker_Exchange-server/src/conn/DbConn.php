<?php

require __DIR__ . './DbConfig.php';

$db = new DbConfig();

$db_connection = $db->connect();