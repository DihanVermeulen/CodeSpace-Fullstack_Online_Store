<?php

class Product {

    // ===================Fields=============================
    private $id;
    private $product_name;
    private $product_price;

    // ==================Constructor=========================
    public function __construct($id, $product_name, $product_price) {
        $this->id = $id;
        $this->product_name = $product_name;
        $this->product_price = $product_price;
    }

    // ==================Get and set=========================

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of product_name
     */ 
    public function getProduct_name()
    {
        return $this->product_name;
    }

    /**
     * Set the value of product_name
     *
     * @return  self
     */ 
    public function setProduct_name($product_name)
    {
        $this->product_name = $product_name;

        return $this;
    }

    /**
     * Get the value of product_price
     */ 
    public function getProduct_price()
    {
        return $this->product_price;
    }

    /**
     * Set the value of product_price
     *
     * @return  self
     */ 
    public function setProduct_price($product_price)
    {
        $this->product_price = $product_price;

        return $this;
    }
}