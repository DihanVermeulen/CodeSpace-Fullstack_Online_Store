<?php
class DbConfig
{
    private $config = array(
        "user" => "root",
        "password" => "",
        "db" => "online_store_db",
        "host" => "localhost"
    );

    public function connect()
    {
        $mysqli = new mysqli(
            $this->config['user'],
            $this->config['password'],
            $this->config['db'],
            $this->config['host'],
        );

        // Check connection
        if ($mysqli->connect_error) {
            die("Connection failed: " . $mysqli->connect_error);
        } else {
            echo "connected successfully";
            return $mysqli;
        }
    }
}
