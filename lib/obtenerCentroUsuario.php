<?php

include '../conexion2.php';

$login=$_SERVER['HTTP_LOGIN'];

$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

switch ($perfil){
	case "DEC":
		$sql3 = "SELECT USUARIOS_PERFILES.login, CENTROS.idcen, CENTROS.nomcencorto FROM USUARIOS_PERFILES INNER JOIN CENTROS ON USUARIOS_PERFILES.idunidad = CENTROS.idcen where USUARIOS_PERFILES.login='$login'";
		$rs3 = odbc_exec( $conn, $sql3 );

		$centro=odbc_result($rs3, "nomcencorto");
		echo ($centro);
		break;
	case "VIC":
		$sql3 = "SELECT distinct CENTROS.nomcencorto FROM CENTROS INNER JOIN ((USUARIOS_PERFILES INNER JOIN TIT_CEN ON USUARIOS_PERFILES.idunidad = TIT_CEN.idtit) INNER JOIN TITULOS ON TIT_CEN.idtit = TITULOS.idtit) ON CENTROS.idcen = TIT_CEN.idcen where USUARIOS_PERFILES.login='$login'";
		
		$rs3 = odbc_exec( $conn, $sql3 );

		$centro=odbc_result($rs3, "nomcencorto");
		echo ($centro);
		break;
}

odbc_close( $conn );

?>