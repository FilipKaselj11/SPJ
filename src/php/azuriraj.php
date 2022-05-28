<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    /*header("Content-type: text/json");
    header("Content-type: application/json; charset=utf-8"); */

    require_once "connection.php";
    require_once "classes.php";

    $sQuery="UPDATE artikli SET Id=".$_POST['id'].", Naziv='".$_POST['naziv']."', Proizvodac='".$_POST['proizvodac']."', Model='".$_POST['model']."', Cijena=".$_POST['cijena'].", Kolicina=".$_POST['kolicina']." WHERE Id=".$_POST['id'];

    $oStatement=$oConnection->query($sQuery);

    echo $sQuery;


?>