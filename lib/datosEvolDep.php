<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$dep=$_POST["dep"];

$sql="SELECT DISTINCT DEPARTAMENTOS.iddep, DEPARTAMENTOS.nomdep, DATOS_DEP.CACA, ([DATOS_DEP.CACA] & ' - ' & [DATOS_DEP.CACA]+1) AS CA, DATOS_DEP.N, Round([DATOS_DEP].[TE],2) AS TE, Round([DATOS_DEP].[TR],2) AS TR, Round([DATOS_DEP].[TP],2) AS TP, DATOS_DEP.IDDEP FROM DEPARTAMENTOS INNER JOIN DATOS_DEP ON DEPARTAMENTOS.iddep = DATOS_DEP.IDDEP WHERE (((DATOS_DEP.IDDEP)= $dep ))";


// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de departamentos en la aplicación");
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