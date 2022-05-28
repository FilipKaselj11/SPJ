<?php
    header("Content-type: text/json");
    header("Content-type: application/json; charset=utf-8");
    header("Access-Control-Allow-Origin: *");

    require_once "connection.php";
    require_once "classes.php";

    $oQuery="SELECT * FROM `artikli` WHERE id=".$_GET['id'];
    $oStatement=$oConnection->query($oQuery);
    $oData=array();
    //var_dump($oStatement);

    while($oRow= $oStatement->fetch(PDO::FETCH_BOTH))
    {
        array_push($oData,new Artikl($oRow['Id'],$oRow['Naziv'],$oRow['Proizvodac'],$oRow['Model'],$oRow['Cijena'],$oRow['Kolicina']));
    }

    echo json_encode($oData);

?>