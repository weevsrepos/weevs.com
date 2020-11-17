<?php

use Rakit\Validation\Validator;
ini_set('display_errors', 1);

require __DIR__ . '/vendor/autoload.php';
require "gsheet.php";
require "ghseet-config.php";

$params = $_POST;

$validator = new Validator;

// make it
$validation = $validator->make($params, [
    'full_name'  => 'required|max:100',
    'email'      => 'required|email|max:100',
    'country'    => 'required|max:100',
    'linkedin'   => 'required|max:200|url',
    'message'    => 'required',
    'area_of_expertise'    => 'required|max:100',
]);

// then validate
$validation->validate();

if ($validation->fails()) {
    // handling errors
    $errors = $validation->errors();

    header('Content-type: application/json');
    echo json_encode($errors->firstOfAll());
} else {

    $gsheet = new GSheet();
    $gsheet->appendValues(SPREADSHEET_ID, SHEET_JOIN_US, 'USER_ENTERED', [
        [
            $params["full_name"],
            $params["email"],
            $params["country"],
            $params["linkedin"],
            $params["message"],
            $params["area_of_expertise"],
        ]
    ]);
    echo "Success!";
}
