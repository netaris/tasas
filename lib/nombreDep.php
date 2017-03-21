<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$iddep=$_GET["iddep"];

$sql="SELECT iddep AS DEP, nomdep as DEPARTAMENTO FROM DEPARTAMENTOS WHERE DEPARTAMENTOS.iddep=$iddep";

$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No existe el Departamento en la aplicación");
}


$i=0;

while($row = odbc_fetch_array(($rs)))
{
   
   $jsonT=$row;
   
}

utf8_encode_deep($jsonT);

$nombre=$jsonT['DEPARTAMENTO'];
echo $nombre;

?>