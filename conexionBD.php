<?php
header('Content-Type: text/html; charset=ISO-8859-1');
//Datos para conexión local
$login="ai.roman";
//Datos para conexión en servidor
session_start();
//$login=$_SERVER['HTTP_LOGIN'];
echo $login;


// Se especifica la ubicación de la base de datos Access (directorio actual)
$db = getcwd() . "\\App_Data\\" . 'SIS.mdb';
// Se define la cadena de conexión
$dsn = "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=$db";

// Se realiza la conexón con los datos especificados anteriormente
$con = odbc_connect( $dsn, '', '' );
if (!$con) { exit( "Error al conectar: " . $con);
}

$sql = "SELECT * FROM DATOS_UMH";
// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec( $con, $sql );
if ( !$rs ) { exit( "SIN DATOS");
}


?>