<?php
include '../conexion2.php';

// Se define la consulta que va a ejecutarse
$dato=$_POST["nomcencorto"];
//$dato=EPSE;

//$sql = "SELECT ([CACA] & ' - ' & [CACA]+1) AS CA, Round(DATOS_CEN.TE,2) AS TE, Round(DATOS_CEN.TR,2) AS TR, Round(DATOS_CEN.TP,2) AS TP , IDCEN FROM CENTROS INNER JOIN DATOS_CEN ON CENTROS.idcen = DATOS_CEN.IDCEN WHERE (((CENTROS.nomcencorto)='EPSE'))";
$sql="SELECT ([CACA] & ' - ' & [CACA]+1) AS CA, DATOS_CEN.N AS N, Round(DATOS_CEN.TE,2) AS TE, Round(DATOS_CEN.TR,2) AS TR, Round(DATOS_CEN.TP,2) AS TP FROM CENTROS INNER JOIN DATOS_CEN ON CENTROS.idcen = DATOS_CEN.IDCEN WHERE (((CENTROS.nomcencorto)= '$dato' ))";
//$sql="SELECT CENTROS.nomcencorto, CENTROS.idcen, DATOS_CEN.CACA, DATOS_CEN.N, DATOS_CEN.TE, DATOS_CEN.TR, DATOS_CEN.TP FROM CENTROS INNER JOIN DATOS_CEN ON CENTROS.idcen = DATOS_CEN.IDCEN";

// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos UMH en la aplicación");
}

$jsonC=array();

//guardamos en un array multidimensional todos los datos de la consulta

$i=0;

while($row = odbc_fetch_array($rs))
{
    $jsonC[$i] = $row;
    $i++;
}

echo json_encode($jsonC);

?>