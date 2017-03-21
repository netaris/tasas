<?php
session_start();
$_SESSION['tipo']=NULL;
unset($_SESSION['tipo']);
$_SESSION['login']=NULL;
unset($_SESSION['login']);
$_SESSION['nombre']=NULL;
unset($_SESSION['nombre']);
session_destroy();
header("location:http://www.umh.es");
odbc_close( $conn );
?>

