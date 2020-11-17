<?php

use Google\Client;
require __DIR__ . '/vendor/autoload.php';

class GSheet {
    protected $service;

    /**
     * GSheet constructor.
     * @throws \Google\Exception
     */
    public function __construct()
    {
        $client = new Client();
        $client->setApplicationName('Google Sheets Weevs');
        $client->setScopes(Google_Service_Sheets::SPREADSHEETS);
        $client->setAccessType('offline');
        $client->setAuthConfig('credentials.json');
        $service = new Google_Service_Sheets($client);
        $this->service = $service;
    }

    /**
     * @param $spreadsheetId
     * @param $range
     * @param $valueInputOption
     * @param $_values
     * @return Google_Service_Sheets_AppendValuesResponse
     */
    public function appendValues($spreadsheetId, $range, $valueInputOption, $_values)
    {
        $body = new Google_Service_Sheets_ValueRange();
        $body->setValues($_values);
        $params = [
            'valueInputOption' => $valueInputOption
        ];

        return $this->service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);
    }
}
