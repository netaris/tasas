<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$login=$_SERVER['HTTP_LOGIN'];
$caca=$_POST["caca"];

$sql2 = "SELECT * FROM USUARIOS_PERFILES where USUARIOS_PERFILES.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

switch ($perfil){
	case "DEP":
		$dep=odbc_result($rs2, "idunidad");
		console.log ($dep);
		$sql1="SELECT DISTINCT DEP_ASI.iddep, ASIGNATURAS.nomasi, TITULOS.nomtit, DATOS_ASI.CACA, ([DATOS_ASI.CACA] & ' - ' & [DATOS_ASI.CACA]+1) AS CA, DATOS_ASI.N, Round(DATOS_ASI.TE,2) AS TE, Round(DATOS_ASI.TR,2) AS TR, Round(DATOS_ASI.TP,2) AS TP, DATOS_ASI.ASI FROM ((ASIGNATURAS INNER JOIN DATOS_ASI ON ASIGNATURAS.asi = DATOS_ASI.ASI) INNER JOIN DEP_ASI ON ASIGNATURAS.asi = DEP_ASI.asi) INNER JOIN (TITULOS INNER JOIN TIT_ASI ON TITULOS.idtit = TIT_ASI.idtit) ON ASIGNATURAS.asi = TIT_ASI.asi WHERE (((DEP_ASI.iddep)= $dep ) and DATOS_ASI.CACA=$caca and DATOS_ASI.TE<55)";
				

		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Asignaturas con TE<55% en la aplicación");
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
		$cen=odbc_result($rs2, "idunidad");
		$sql1="SELECT DISTINCT TIT_CEN.idcen, ASIGNATURAS.nomasi, TITULOS.nomtit, DATOS_ASI.ASI, DATOS_ASI.CACA, ([DATOS_ASI.CACA] & ' - ' & [DATOS_ASI.CACA]+1) AS CA, DATOS_ASI.N AS N, Round(DATOS_ASI.TE,2) AS TE, Round(DATOS_ASI.TR,2) AS TR, Round(DATOS_ASI.TP,2) AS TP FROM ((USUARIOS_PERFILES INNER JOIN CENTROS ON USUARIOS_PERFILES.idunidad = CENTROS.idcen) INNER JOIN (TIT_CEN INNER JOIN (ASIGNATURAS INNER JOIN (TITULOS INNER JOIN TIT_ASI ON TITULOS.idtit = TIT_ASI.idtit) ON ASIGNATURAS.asi = TIT_ASI.asi) ON TIT_CEN.idtit = TITULOS.idtit) ON CENTROS.idcen = TIT_CEN.idcen) INNER JOIN DATOS_ASI ON ASIGNATURAS.asi = DATOS_ASI.ASI WHERE (((TIT_CEN.idcen)=$cen) AND (([DATOS_ASI].[CACA])=$caca) AND (([DATOS_ASI].[TE])<55))";

		

		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Asignaturas con TE<55% en la aplicación");
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
		$tit=odbc_result($rs2, "idunidad");
		$sql1="SELECT DISTINCT TITULOS.idtit, ASIGNATURAS.nomasi, TITULOS.nomtit, DATOS_ASI.ASI, DATOS_ASI.CACA, ([DATOS_ASI.CACA] & ' - ' & [DATOS_ASI.CACA]+1) AS CA, DATOS_ASI.N AS N, Round(DATOS_ASI.TE,2) AS TE, Round(DATOS_ASI.TR,2) AS TR, Round(DATOS_ASI.TP,2) AS TP FROM USUARIOS_PERFILES, (ASIGNATURAS INNER JOIN (TITULOS INNER JOIN TIT_ASI ON TITULOS.idtit = TIT_ASI.idtit) ON ASIGNATURAS.asi = TIT_ASI.asi) INNER JOIN DATOS_ASI ON ASIGNATURAS.asi = DATOS_ASI.ASI WHERE (((TITULOS.idtit)=$tit) AND (([DATOS_ASI].[CACA])=$caca) AND (([DATOS_ASI].[TE])<55))";


		$rs1 = odbc_exec($conn, $sql1 );
		if ( !$rs1 ) { exit( "No hay datos de Asignaturas con TE<55% en la aplicación");
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
		$sql="SELECT DISTINCT ASIGNATURAS.nomasi, DATOS_ASI.CACA, TITULOS.nomtit, ([DATOS_ASI.CACA] & ' - ' & [DATOS_ASI.CACA]+1) AS CA, DATOS_ASI.N, Round(DATOS_ASI.TE,2) AS TE, Round(DATOS_ASI.TR,2) AS TR, Round(DATOS_ASI.TP,2) AS TP, DATOS_ASI.ASI FROM TITULOS INNER JOIN ((ASIGNATURAS INNER JOIN DATOS_ASI ON ASIGNATURAS.asi = DATOS_ASI.ASI) INNER JOIN TIT_ASI ON ASIGNATURAS.asi = TIT_ASI.asi) ON TITULOS.idtit = TIT_ASI.idtit WHERE (DATOS_ASI.CACA=$caca and DATOS_ASI.TE<55)";


		
		$rs = odbc_exec($conn, $sql );
		if ( !$rs ) { exit( "No hay datos de Asignaturas con TE<55% en la aplicación");
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