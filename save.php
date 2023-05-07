<?php
// Retrieve the code from the request body
$code = $_POST['code'];

// Save the code to a file
$file = fopen('code.php', 'w');
if ($file) {
  fwrite($file, $code);
  fclose($file);
  echo 'Code saved successfully.';
} else {
  echo 'Error saving code.';
}

// Create a log file with errors
$logFile = fopen('error.log', 'a');
if ($logFile) {
  fwrite($logFile, 'Error occurred: ' . error_get_last()['message'] . PHP_EOL);
  fclose($logFile);
}
?>