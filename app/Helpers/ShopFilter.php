<?php


namespace App\Helpers;


class ShopFilter
{
    public function __construct($title, $query_key, $data)
    {
        $this->title = $title;
        $this->query_key = $query_key;
        $this->data = $data;
    }
}