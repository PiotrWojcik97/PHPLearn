<?php

header('Access-Control-Allow-Origin: *');
header('Consent-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Users.php';

$database = new Database();
$db = $database->connect();

$result = $users->read();
// debug in home what's the result

$num_of_rows = $result->rowCount();

if($num > 0)
{
    $users_arr = array();
    $users_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC))
    {
        extract($row);

        $user_item = array(
            'id' => $id,
            'username' => $username,
            'password' => $password
        );

        array_push($users_arr['data'], $user_item);
    }
    echo json_encode($users_arr);
}
else
{
    //no users
    echo json_encode(
        array('message' => "No Users Found")
    );
}