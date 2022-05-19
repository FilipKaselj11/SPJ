<?php
    class Server
    {
        public $host;
        public $dbName;
        public $username;
        public $password;

        public function __construct()
        {
            $this->host = 'localhost:3306';
            $this->dbName = 'pc_shop';
            $this->username = 'root';
            $this->password ='';
        }
    }
?>