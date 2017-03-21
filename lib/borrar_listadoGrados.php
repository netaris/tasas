<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

// Se define la consulta que va a ejecutarse



//$sql="SELECT idtit AS TIT FROM TITULOS ";
$sql="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.tipotit='G'";
//$sql="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.tipotit='G'";
//$sql="SELECT TITULOS.idtit, TITULOS.tipotit, TITULOS.nomtit FROM TITULOS WHERE (((TITULOS.tipotit)="G"))";
//$sql="SELECT TITULOS.idtit, TITULOS.nomtit, TITULOS.tipotit FROM TITULOS";
//$sql = "SELECT ([CACA] & ' - ' & [CACA]+1) AS CA, Round(DATOS_UMH.TE,2) AS TE, Round(DATOS_UMH.TR,2) AS TR, Round(DATOS_UMH.TP,2) AS TP FROM DATOS_UMH";

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