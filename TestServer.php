<?php
header('Content-Type: application/json');

// Przykładowe dane
$data = array(
    "test" => "nic"
);

// Zwróć dane jako JSON
echo json_encode($data);
