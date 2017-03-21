<?php


include '../conexion2.php';

$login=$_SERVER['HTTP_LOGIN'];


$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

echo ($perfil);

odbc_close( $conn );

?>