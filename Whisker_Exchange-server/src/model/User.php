<?php 

class User {

    private $id;
    private $user_name;
    private $user_surname;
    private $user_email;
    private $user_password;

    public function __construct($id, $user_name, $user_surname, $user_email, $user_password)
    {
        $this->id = $id;
        $this->user_name = $user_name;
        $this->user_surname = $user_surname;
        $this->user_email = $user_email;
        $this->user_password = $user_password;
    }
}