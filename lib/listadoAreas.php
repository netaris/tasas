<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$iddep=$_POST["iddep"];
// Se define la consulta que va a ejecutarse

//$sql="SELECT AREAS.idarea AS AREA, AREAS.nomarea as 'AREA DE CONOCIMIENTO' FROM AREAS";
$sql="SELECT AREAS.idarea AS AREA, AREAS.nomarea AS AREA_DE_CONOCIMIENTO FROM AREAS INNER JOIN DEP_AREA ON AREAS.idarea = DEP_AREA.idarea WHERE (((DEP_AREA.iddep)=$iddep))";


// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de Áreas de Conocimiento en la aplicación");
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