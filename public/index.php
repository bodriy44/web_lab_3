<?php

require_once('LoginForm.php');

// для изображений
var_dump($_FILES);

$form = new LoginForm($_POST);

if (!$form->validate()) {
    var_dump($form->getErrors());
}

if (!$form->login()) {
    var_dump($form->getErrors());
} else {
    $authUser = $form->getAuthUser();
    echo $authUser['login'] . ', Вы авторизовались!';
}