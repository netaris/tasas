<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$idtit=$_GET["idtit"];

$sql="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.idtit=$idtit";

$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No existe el Grado en la aplicación");
}


$i=0;

while($row = odbc_fetch_array(($rs)))
{
   
   $jsonT=$row;
   
}

utf8_encode_deep($jsonT);

$nombre=$jsonT['GRADO'];
echo $nombre;

?>