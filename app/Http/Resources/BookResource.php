<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return array_merge(
            parent::toArray($request),
            [
                'book_cover_photo' => asset("/assets/bookcover/". ($this->book_cover_photo ?? "book-default") .".jpg"),
                'author_name' => $this->author->author_name,
                'category_name' => $this->category->category_name,
                'final_price' => $this->final_price
            ]
        );
    }
}
