<?php namespace ProcessWire;

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-PINGOTHER, Authorization, Post, Origin, X-Requested-With, Content-Type, Accept');

require "{$config->paths->templates}api/Router.php";
