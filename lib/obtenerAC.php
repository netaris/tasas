<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$login=$_SERVER['HTTP_LOGIN'];


$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

switch ($perfil){
	case "DEP":
		$sql1="SELECT USUARIOS_PERFILES.login, USUARIOS_PERFILES.idperfil, DEPARTAMENTOS.nomdep AS DEPARTAMENTO, DEPARTAMENTOS.iddep AS DEP, AREAS.idarea, AREAS.numarea,AREAS.nomarea FROM AREAS INNER JOIN ((USUARIOS_PERFILES INNER JOIN DEPARTAMENTOS ON USUARIOS_PERFILES.idunidad = DEPARTAMENTOS.iddep) INNER JOIN DEP_AREA ON DEPARTAMENTOS.iddep = DEP_AREA.iddep) ON AREAS.idarea = DEP_AREA.idarea WHERE (((USUARIOS_PERFILES.login)='$login'))";
		

		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Áreas de Conocimiento en la aplicación");
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
		$sql="SELECT AREAS.idarea, AREAS.numarea,AREAS.nomarea FROM AREAS order by AREAS.nomarea";
		

		$rs = odbc_exec($conn, $sql );
		if ( !$rs ) { exit( "No hay datos de Áreas de Conocimiento en la aplicación");
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