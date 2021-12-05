<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
     public $arr = array(
        [
        'id' => 1,
        'username' => 'admin',
        'password' => 'password'
         ],
        [
        'id' => 2,
        'username' => 'user',
        'password' => '1234'
        ],
        [
        'id' => 3,
        'username' => '1',
        'password' => '1'
        ]
        );

     /**
     * Список пользователей.
     * @return array[]
     */
     public function list()
     {
         return $this->arr;
     }

     /**
     * Информация о пользователе
     * @param $id
     * @return array
     */
     public function info($id)
     {
         return  $this->arr[$id-1];
     }

     public function authorization(Request $request)
     {
        foreach ($this->arr as $value) {
            if ($value['username'] == $request->get('username') && $value['password']== $request->get('password')){
                    return [
                        'userId'=> $value['id']
                    ];
            }
        }
                return [
                    'userId'=> -1
                ];
     }
}
