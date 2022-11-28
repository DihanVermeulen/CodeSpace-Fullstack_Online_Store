<?php

class Product {

    private $id;
    private $product_name;

    public function __construct($id, $product_name) {
        $this->id = $id;
        $this->product_name = $product_name;
    }
}