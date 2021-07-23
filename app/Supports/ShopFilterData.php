<?php

namespace App\Supports;

class ShopFilterData
{
    public function __construct($name, $value)
    {
        $this->name = $name;
        $this->value = $value;
    }
}
