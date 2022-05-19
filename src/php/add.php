<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    /*header("Content-type: text/json");
    header("Content-type: application/json; charset=utf-8"); */

    require_once "connection.php";
    require_once "classes.php";

    $sQuery="INSERT INTO artikli VALUES (".$_POST['id'].",'".$_POST['naziv']."','".$_POST['proizvodac']."','".$_POST['model']."',".$_POST['cijena'].",".$_POST['kolicina'].")";

    $oStatement=$oConnection->query($sQuery);

    echo $sQuery;


?>