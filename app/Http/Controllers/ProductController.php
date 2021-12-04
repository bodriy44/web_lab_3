<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class ProductController extends Controller
{
    public function list()
    {
        return [
            [
                'id' => 1,
                'name' => 'Товар 1',
                'price' => 100
            ],
            [
                'id' => 2,
                'name' => 'Товар 2',
                'price' => 200
            ]

        ];
    }

    public function info($id)
    {
        return [
                    'id' => 1,
                    'name' => 'Товар 1',
                    'price' => 100
              ];

    }
}
