<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

// Se define la consulta que va a ejecutarse


$sql="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.tipotit='M'";

// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de Grado en la aplicación");
}

$jsonG=array();

//guardamos en un array multidimensional todos los datos de la consulta

$i=0;

while($row = odbc_fetch_array(($rs)))
{
    
   $jsonG[$i]=$row;
   $i++;

}

utf8_encode_deep($jsonG);

//echo "<pre>";
//print_r($jsonG);
//echo "</pre>";

echo json_encode($jsonG);

?>