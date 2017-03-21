<?php
include '/lib/debugConsole.php';
header('Content-Type: text/html; charset=ISO-8859-1');

//Datos para conexión local
$login="ai.roman";
//Datos para conexión en servidor
session_start();
//$login=$_SERVER['HTTP_LOGIN'];
//debug_to_console($login);

// Se especifica la ubicación de la base de datos Access (directorio actual)
$db = getcwd() . "\\App_Data\\" . 'SIS.mdb';
// Se define la cadena de conexión
$dsn = "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=$db";

// Se realiza la conexión con los datos especificados anteriormente
$conn = odbc_connect( $dsn, '', '' );
if (!$conn) { exit( "Error al conectar: " . $conn);
}
// Se define la consulta que va a ejecutarse
$sql="SELECT Count (*) AS counter FROM USUARIOS WHERE USUARIOS.login='$login'";

// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec( $conn, $sql );

$numFilas=odbc_fetch_array($rs);

$countFilas=$numFilas['counter'];
//debug_to_console($countFilas);

if($countFilas==0) { 
	
	exit( "El usuario no est&aacute dado de alta en la aplicaci&oacuten");
}

$sql1="SELECT USUARIOS.nombre FROM USUARIOS WHERE USUARIOS.login='$login'";
$rs1 = odbc_exec( $conn, $sql1 );
$nombre=odbc_result($rs1, "nombre");

odbc_close( $conn );
?>