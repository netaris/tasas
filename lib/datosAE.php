<?php
include '../conexion2.php';

// Se define la consulta que va a ejecutarse
$dato=$_POST["idae"];



//$sql="SELECT ([CACA] & ' - ' & [CACA]+1) AS CA, DATOS_AE.N AS N, Round(DATOS_AE.TE,2) AS TE, Round(DATOS_AE.TR,2) AS TR, Round(DATOS_AE.TP,2) AS TP FROM AENSEÑANZA INNER JOIN DATOS_AE ON AENSEÑANZA.idae = DATOS_AE.IDAE WHERE (((AENSEÑANZA.idae)= '$dato' ))";
$sql="SELECT ([CACA] & ' - ' & [CACA]+1) AS CA, DATOS_AE.N AS N, Round(DATOS_AE.TE,2) AS TE, Round(DATOS_AE.TR,2) AS TR, Round(DATOS_AE.TP,2) AS TP FROM DATOS_AE WHERE (DATOS_AE.IDAE= '$dato')";
//$sql="SELECT * FROM DATOS_AE";
// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de Áreas de Enseñanza en la aplicación");
}

$jsonAE=array();

//guardamos en un array multidimensional todos los datos de la consulta

$i=0;

while($row = odbc_fetch_array($rs))
{
    $jsonAE[$i] = $row;
    $i++;
}

echo json_encode($jsonAE);

?>