<?php
    $t=$_POST['type'];
    $i=$_POST['input'];
    $myObj="haha";
    $file="atributi.json";
    $json = json_decode(file_get_contents($file),TRUE);

    $json[] = array("type" => $t, "input" => $i);

    file_put_contents($file, json_encode($json,JSON_PRETTY_PRINT));

?>