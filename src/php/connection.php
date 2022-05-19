
<?php
    require_once "server.php";

    $oServer= new Server();
    $oConnection;
    try
    {
        $oConnection=new PDO("mysql:host=".$oServer->host.";dbname=".$oServer->dbName,$oServer->username,$oServer->password);
        //echo "Connected to ".$oServer->dbName." at ".$oServer->host." successfully.";
    }
    catch (PDOException $pe)
    {
        die("Could not connect to the database:" . $pe->getMessage());
    }
?>
