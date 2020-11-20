<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

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
    'country'    => 'required|max:100',
    'email'      => 'required|email|max:100',
    'phone'      => 'required|max:200',
    'company'    => 'required|max:200',
    'message'    => 'required',
    'job_title'  => 'required|max:100',
]);

// then validate
$validation->validate();

if ($validation->fails()) {
    // handling errors
    $errors = $validation->errors();

    header('Content-type: application/json', true, 422);
    echo json_encode($errors->firstOfAll());
} else {

    $gsheet = new GSheet();
    $gsheet->appendValues(SPREADSHEET_ID, SHEET_HIRE_US, 'USER_ENTERED', [
        [
            $params["full_name"],
            $params["email"],
            $params["country"],
            $params["phone"],
            $params["company"],
            $params["job_title"],
            $params["message"],
        ]
    ]);
    echo "Success!";
}
