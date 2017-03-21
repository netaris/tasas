<?php
header('Content-Type: text/html; charset=UTF-8');
//Datos para conexión local
$login="ai.roman";
//echo $login;
//Datos para conexión en servidor
session_start();
//$login=$_SERVER['HTTP_LOGIN'];


// Se especifica la ubicación de la base de datos Access (directorio actual)
//Conexión local
$db = "C:\\inetpub\\wwwroot\\App_Data\\" . 'SIS.mdb';
//Conexión remota
//$db = "F:\\ALOJADAS\\tasas\\App_Data\\" . 'SIS.mdb';
// Se define la cadena de conexión
//echo $db;
$dsn = "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=$db";
//echo $dsn;

// Se realiza la conexón con los datos especificados anteriormente
$conn = odbc_connect( $dsn, '', '' );

//echo $conn;
if (!$conn) { exit( "Error al conectar: " . $conn);
}


//odbc_close( $conn );

?>