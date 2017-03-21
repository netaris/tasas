<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$idarea=$_POST["numarea"];

$sql="SELECT DISTINCT DEPARTAMENTOS.iddep, DEPARTAMENTOS.nomdep, DATOS_AREA.CACA, AREAS.idarea, AREAS.numarea, AREAS.nomarea, ([DATOS_AREA.CACA] & ' - ' & [DATOS_AREA.CACA]+1) AS CA, DATOS_AREA.N, Round([DATOS_AREA].[TE],2) AS TE, Round([DATOS_AREA].[TR],2) AS TR, Round([DATOS_AREA].[TP],2) AS TP FROM (AREAS INNER JOIN DATOS_AREA ON AREAS.idarea = DATOS_AREA.IDAREA) INNER JOIN (DEPARTAMENTOS INNER JOIN DEP_AREA ON DEPARTAMENTOS.iddep = DEP_AREA.iddep) ON AREAS.idarea = DEP_AREA.idarea WHERE (((AREAS.numarea)= $idarea ))";


// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de áreas en la aplicación");
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