<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$idarea=$_GET["idarea"];

$sql="SELECT AREAS.idarea , AREAS.nomarea FROM AREAS WHERE AREAS.numarea=$idarea";

$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No existe el Departamento en la aplicación");
}


$i=0;

while($row = odbc_fetch_array(($rs)))
{
   
   $jsonT=$row;
   
}

utf8_encode_deep($jsonT);

$nombre=$jsonT['nomarea'];

echo $nombre;

?>