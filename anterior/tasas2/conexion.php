<?php
header('Content-Type: text/html; charset=ISO-8859-1');

$login="ai.roman";
$db = getcwd() . "\\App_Data\\" . 'SIS.mdb';
$dsn = "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=$db";
$conn = odbc_connect( $dsn, '', '' );
if (!$conn) { exit( "Error al conectar: " . $conn);
}

$sql = "SELECT * FROM usuarios where login='".$login."'";
// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec( $conn, $sql );
if ( !$rs ) { exit( "El usuario no está dado de alta en la aplicación");
}

$tipo=odbc_result($rs, "tipo");
$nombre=odbc_result($rs, "nombre");

?>