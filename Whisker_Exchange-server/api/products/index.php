<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '../vendor/autoload.php';
include '../src/includes/headers.php';

$app = AppFactory::create();

$app->get('/products', function (Request $request, Response $response, $args) {
    include_once('../src/conn/DbConn.php');

    $query = "SELECT * FROM products";

    $result = $db_connection->query($query);
    
    $response->getBody()->write($result);
    return $response;
});

$app->run();