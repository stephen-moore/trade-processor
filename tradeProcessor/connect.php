<?php
// database credentials
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'trade_processor');

function connect() {
    $connect = mysqli_connect(
        DB_HOSTNAME,
        DB_USERNAME,
        DB_PASSWORD,
        DB_NAME
    );

    if (mysqli_connect_errno($connect)) {
        die('Failed to connect. Error: ' . mysqli_connect_error());
    }

    mysqli_set_charset($connect, 'utf8');

    return $connect;
}

$con = connect();