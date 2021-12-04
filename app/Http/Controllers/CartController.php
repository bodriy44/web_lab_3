<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
/**
* Контроллер для управления корзиной
*/
class CartController extends Controller
{

    /**
    * Добавляет товар в корзину
    * @param Request request
    * @return array
    */

    public function addToCart(Request $request)
    {
        $id = $request->get('id');
        $count = $request->get('count', 1);

        // добавили товар в бд

        return [
            'inCart'=> true
        ];
    }
}
