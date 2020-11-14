<?php
require 'connect.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

$trades = [];
$sql = "SELECT * FROM trades";

if ( $result = mysqli_query($con, $sql)) {
    $index = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $trades[$index]['id'] = $row['id'];
        $trades[$index]['userId'] = $row['user_id'];
        $trades[$index]['currencyFrom'] = $row['currency_from'];
        $trades[$index]['currencyTo'] = $row['currency_to'];
        $trades[$index]['amountSell'] = $row['amount_sell'];
        $trades[$index]['amountBuy'] = $row['amount_buy'];
        $trades[$index]['rate'] = $row['rate'];
        $trades[$index]['timePlaced'] = $row['time_placed'];
        $trades[$index]['originCountry'] = $row['originating_country'];
        $index++;
    }
    echo json_encode($trades);

} else {
    http_response_code(404);
}
