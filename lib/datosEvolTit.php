<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$idtit=$_POST["idtit"];

$sql="SELECT DISTINCT TITULOS.idtit, TITULOS.nomtit, DATOS_TIT.CACA, ([DATOS_TIT.CACA] & ' - ' & [DATOS_TIT.CACA]+1) AS CA, DATOS_TIT.N, Round([DATOS_TIT].[TE],2) AS TE, Round([DATOS_TIT].[TR],2) AS TR, Round([DATOS_TIT].[TP],2) AS TP, DATOS_TIT.IDTIT, TITULOS.activo FROM TITULOS INNER JOIN DATOS_TIT ON TITULOS.idtit = DATOS_TIT.IDTIT WHERE (((DATOS_TIT.IDTIT)= $idtit AND ((TITULOS.activo)=1)))";


// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec($conn, $sql );
if ( !$rs ) { exit( "No hay datos de títulos en la aplicación");
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