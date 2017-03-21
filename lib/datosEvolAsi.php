<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$asi=$_POST["asi"];

$sql="SELECT DISTINCT TIT_ASI.idtit, ASIGNATURAS.nomasi, DATOS_ASI.CACA, ([DATOS_ASI.CACA] & ' - ' & [DATOS_ASI.CACA]+1) AS CA, DATOS_ASI.N, Round(DATOS_ASI.TE,2) AS TE, Round(DATOS_ASI.TR,2) AS TR, Round(DATOS_ASI.TP,2) AS TP, DATOS_ASI.ASI FROM ASIGNATURAS INNER JOIN (TIT_ASI INNER JOIN DATOS_ASI ON TIT_ASI.idtit = DATOS_ASI.TIT) ON (ASIGNATURAS.asi = TIT_ASI.asi) AND (ASIGNATURAS.asi = DATOS_ASI.ASI) WHERE (((DATOS_ASI.ASI)= $asi ))";

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