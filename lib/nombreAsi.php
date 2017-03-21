<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$asi=$_GET["asi"];

//$sql="SELECT asi, nomasi FROM ASIGNATURAS WHERE ASIGNATURAS.asi=$asi";
$sql="SELECT ASIGNATURAS.asi as ASI, ASIGNATURAS.nomasi as NOMASI FROM ASIGNATURAS WHERE (((ASIGNATURAS.asi)=$asi))";


$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No existe la Asignatura en la aplicación");
}


$i=0;

while($row = odbc_fetch_array(($rs)))
{
   
   $jsonT=$row;
   
}

utf8_encode_deep($jsonT);

$nombre=$jsonT['NOMASI'];
echo $nombre;

?>