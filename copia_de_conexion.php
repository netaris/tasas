<?php
include '/lib/debugConsole.php';
header('Content-Type: text/html; charset=ISO-8859-1');

//Datos para conexión local
//$login="ai.roman";
//Datos para conexión en servidor
session_start();
$login=$_SERVER['HTTP_LOGIN'];
//debug_to_console($login);

// Se especifica la ubicación de la base de datos Access (directorio actual)
$db = getcwd() . "\\App_Data\\" . 'SIS.mdb';
// Se define la cadena de conexión
$dsn = "DRIVER={Microsoft Access Driver (*.mdb)};DBQ=$db";

// Se realiza la conexión con los datos especificados anteriormente
$conn = odbc_connect( $dsn, '', '' );
if (!$conn) { exit( "Error al conectar: " . $conn);
}
// Se define la consulta que va a ejecutarse
$sql="SELECT Count (*) AS counter FROM USUARIOS WHERE USUARIOS.login='$login'";

// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs = odbc_exec( $conn, $sql );

$numFilas=odbc_fetch_array($rs);

$countFilas=$numFilas['counter'];
//debug_to_console($countFilas);


if($countFilas==0) { 
	
	exit( "El usuario no est&aacute dado de alta en la aplicaci&oacuten");
}

$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

//debug_to_console($perfil);

switch ($perfil){
	case "AD": //debug_to_console ("AD");
				break;
	case "DEC": //debug_to_console ("DEC");
				$sql3 = "SELECT USUARIOS_PERFILES.login, CENTROS.idcen, CENTROS.nomcencorto FROM USUARIOS_PERFILES INNER JOIN CENTROS ON USUARIOS_PERFILES.idunidad = CENTROS.idcen where USUARIOS_PERFILES.login='$login'";
				$rs3 = odbc_exec( $conn, $sql3 );

				//$centro=odbc_result($rs3, "nomcencorto");
				$centro=odbc_result($rs3, "idcen");

				//debug_to_console ($centro);

				

				break;
	case "DEP": //debug_to_console ("DEP");
				break;
	case "VIC": //debug_to_console ("VIC");
				break;
	case "MS": //debug_to_console ("MS");
				break;

}



//debug_to_console($unidad);

$_SESSION['perfil']=$perfil;
$_SESSION['login']=$login;
$_SESSION['unidad']=$unidad;
//debug_to_console($_SESSION['perfil']);

// Se cierra la conexión
odbc_close( $conn );




?>