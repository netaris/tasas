<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$login=$_SERVER['HTTP_LOGIN'];


$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

switch ($perfil){
	case "DEP":
		$sql1="SELECT USUARIOS_PERFILES.login, USUARIOS_PERFILES.idperfil, DEPARTAMENTOS.nomdep AS DEPARTAMENTO, DEPARTAMENTOS.iddep AS DEP, ASIGNATURAS.asi, ASIGNATURAS.nomasi, TIT_ASI.idtit, TITULOS.nomtit, TITULOS.activo FROM TITULOS INNER JOIN ((ASIGNATURAS INNER JOIN ((USUARIOS_PERFILES INNER JOIN DEPARTAMENTOS ON USUARIOS_PERFILES.idunidad = DEPARTAMENTOS.iddep) INNER JOIN DEP_ASI ON DEPARTAMENTOS.iddep = DEP_ASI.iddep) ON ASIGNATURAS.asi = DEP_ASI.asi) INNER JOIN TIT_ASI ON ASIGNATURAS.asi = TIT_ASI.asi) ON TITULOS.idtit = TIT_ASI.idtit WHERE (((USUARIOS_PERFILES.login)='$login') AND ((TITULOS.activo)=1))"; 
		

		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Asignaturas en la aplicación");
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

	case "DEC":
		$sql1="SELECT USUARIOS_PERFILES.login, USUARIOS_PERFILES.idperfil, ASIGNATURAS.asi, ASIGNATURAS.nomasi, TIT_ASI.idtit, TITULOS.nomtit, TITULOS.activo FROM USUARIOS_PERFILES INNER JOIN (CENTROS INNER JOIN (TIT_CEN INNER JOIN (ASIGNATURAS INNER JOIN (TITULOS INNER JOIN TIT_ASI ON TITULOS.idtit = TIT_ASI.idtit) ON ASIGNATURAS.asi = TIT_ASI.asi) ON TIT_CEN.idtit = TITULOS.idtit) ON CENTROS.idcen = TIT_CEN.idcen) ON USUARIOS_PERFILES.idunidad = CENTROS.idcen WHERE (((USUARIOS_PERFILES.login)='$login') AND ((TITULOS.activo)=1))"; 
		

		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Asignaturas en la aplicación");
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

	case "VIC":
		$sql1="SELECT USUARIOS_PERFILES.login, USUARIOS_PERFILES.idperfil, ASIGNATURAS.asi, ASIGNATURAS.nomasi, TIT_ASI.idtit, TITULOS.nomtit, TITULOS.activo FROM USUARIOS_PERFILES INNER JOIN (ASIGNATURAS INNER JOIN (TITULOS INNER JOIN TIT_ASI ON TITULOS.idtit = TIT_ASI.idtit) ON ASIGNATURAS.asi = TIT_ASI.asi) ON USUARIOS_PERFILES.idunidad = TITULOS.idtit WHERE (((USUARIOS_PERFILES.login)='$login') AND ((TITULOS.activo)=1))"; 
	

		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Asignaturas en la aplicación");
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
		$sql="SELECT ASIGNATURAS.asi, ASIGNATURAS.nomasi, TIT_ASI.idtit, TITULOS.nomtit, TITULOS.activo FROM ASIGNATURAS INNER JOIN (TITULOS INNER JOIN TIT_ASI ON TITULOS.idtit = TIT_ASI.idtit) ON ASIGNATURAS.asi = TIT_ASI.asi WHERE (((TITULOS.activo)=1))"; 

		
		$rs = odbc_exec($conn, $sql );
		if ( !$rs ) { exit( "No hay datos de Asignaturas en la aplicación");
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