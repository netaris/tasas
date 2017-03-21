<?php
include '../conexion2.php';

// Se define la consulta que va a ejecutarse
$sql = "SELECT ([CACA] & ' - ' & [CACA]+1) AS CA, Round(DATOS_UMH.TE,2) AS TE, Round(DATOS_UMH.TR,2) AS TR, Round(DATOS_UMH.TP,2) AS TP FROM DATOS_UMH";
// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos UMH en la aplicación");
}

$json=array();

//guardamos en un array multidimensional todos los datos de la consulta

$i=0;

while($row = odbc_fetch_array($rs))
{
    $json[$i] = $row;
    $i++;
}

echo json_encode($json);

?>
