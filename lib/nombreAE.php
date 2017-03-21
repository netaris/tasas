<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$idae=$_GET["idae"];

$sql="SELECT A_ENS.idae AS AE, A_ENS.nomae AS NOMAE FROM A_ENS WHERE (((A_ENS.idae)='$idae'))";

$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No existe el Área de Enseñanza en la aplicación");
}


while($row = odbc_fetch_array(($rs)))
{
   
   $jsonT=$row;
   
}

utf8_encode_deep($jsonT);
//echo "<pre>";
//print_r($jsonT);
//echo "</pre>";

$nombre=$jsonT['NOMAE'];
echo $nombre;

?>