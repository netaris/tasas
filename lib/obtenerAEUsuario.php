<?php

include '../conexion2.php';

$dato=$_POST["idcen"];


$sql3 = "SELECT CENTROS.nomcencorto, CENTRO_AE.idAE FROM CENTRO_AE INNER JOIN CENTROS ON CENTRO_AE.idCen = CENTROS.idcen where CENTROS.nomcencorto='$dato'";
$rs3 = odbc_exec( $conn, $sql3 );

$aen=odbc_result($rs3, "idAE");
echo ($aen);
// Se cierra la conexión
odbc_close( $conn );





?>