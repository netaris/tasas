<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$idarea=$_POST["numarea"];
$caca=$_POST["caca"];


$sql="SELECT DISTINCT DEP_ASI.iddep, AREAS.numarea, AREAS.idarea, ASIGNATURAS.nomasi, DATOS_ASI.CACA, ([DATOS_ASI.CACA] & ' - ' & [DATOS_ASI.CACA]+1) AS CA, DATOS_ASI.N, Round(DATOS_ASI.TE,2) AS TE, Round(DATOS_ASI.TR,2) AS TR, Round(DATOS_ASI.TP,2) AS TP, DATOS_ASI.ASI FROM (AREAS INNER JOIN DEP_AREA ON AREAS.idarea = DEP_AREA.idarea) INNER JOIN ((ASIGNATURAS INNER JOIN DATOS_ASI ON ASIGNATURAS.asi = DATOS_ASI.ASI) INNER JOIN DEP_ASI ON ASIGNATURAS.asi = DEP_ASI.asi) ON DEP_AREA.iddep = DEP_ASI.iddep WHERE (((AREAS.numarea)= $idarea ) and DATOS_ASI.CACA=$caca)";


// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de asignaturas en la aplicación");
}

$jsonA=array();

//guardamos en un array multidimensional todos los datos de la consulta

$i=0;

while($row = odbc_fetch_array(($rs)))
{
    
   $jsonA[$i]=$row;
   $i++;

}

utf8_encode_deep($jsonA);


echo json_encode($jsonA);

?>