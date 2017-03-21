<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$login=$_SERVER['HTTP_LOGIN'];


$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

switch ($perfil){
	case "DEP":
		$sql1="SELECT USUARIOS_PERFILES.login, USUARIOS_PERFILES.idperfil, DEPARTAMENTOS.nomdep AS DEPARTAMENTO, DEPARTAMENTOS.iddep as DEP FROM USUARIOS_PERFILES INNER JOIN DEPARTAMENTOS ON USUARIOS_PERFILES.idunidad = DEPARTAMENTOS.iddep WHERE (((USUARIOS_PERFILES.login)='$login'))";
		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Departamentos en la aplicación");
		}

		$jsonG=array();

		//guardamos en un array multidimensional todos los datos de la consulta

		$i=0;

		while($row1 = odbc_fetch_array(($rs1)))
		{
    
   		$jsonG[$i]=$row1;
   		$i++;

		}

		utf8_encode_deep($jsonG);

		echo json_encode($jsonG);
		break;
	default:
		$sql="SELECT DEPARTAMENTOS.iddep AS DEP, DEPARTAMENTOS.nomdep as DEPARTAMENTO FROM DEPARTAMENTOS order by DEPARTAMENTOS.nomdep";
		$rs = odbc_exec($conn, $sql );
		if ( !$rs ) { exit( "No hay datos de Departamentos en la aplicación");
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

		echo json_encode($jsonG);
		break;
	}


odbc_close( $conn );


?>