<?php
require 'connect.php';
date_default_timezone_set('Europe/Dublin');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

// Retrieve posted data
$postData = file_get_contents("php://input");

if (isset($postData) && !empty($postData)) {
    $request = json_decode($postData);

    // Sanitize data
    $userId = $request->userId;
    $currencyFrom = $request->currencyFrom;
    $currencyTo = $request->currencyTo;
    $amountSell = $request->amountSell;
    $amountBuy = $request->amountBuy;
    $rate = $request->rate;
    $timePlaced = date('Y-m-d H:i:s');
    if (isset($request->timePlaced)){
        $timePlaced = $request->timePlaced;
        $timePlaced = DateTime::createFromFormat("d-M-y H:i:s", $timePlaced)->format("Y-m-d H:i:s");
    }
    $originCountry = $request->originatingCountry;

    // Insert data into the database.
    $sql = "INSERT INTO `trades`(`user_id`, `currency_from`, `currency_to`, 
`amount_sell`, `amount_buy`, `rate`, `time_placed`, `originating_country`) VALUES (
'{$userId}',
'{$currencyFrom}',
'{$currencyTo}',
'{$amountSell}',
'{$amountBuy}',
'{$rate}',
'{$timePlaced}',
'{$originCountry}'
)";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
