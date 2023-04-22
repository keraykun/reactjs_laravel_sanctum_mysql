<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
class VagetableResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap = false;

    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'name' => $this->name,
            'image'=>'http://127.0.0.1:8000'.Storage::url('images/vagetables/'.$this->image,now()),
            'description'=>$this->description,
            'facts' => VagetablesFactsResource::collection($this->whenLoaded('facts')),
            'benefits' => VagetablesBenefitsResource::collection($this->whenLoaded('benefits')),
        ];
    }
}
