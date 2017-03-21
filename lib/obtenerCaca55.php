<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$login=$_SERVER['HTTP_LOGIN'];


$sql2 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs2 = odbc_exec( $conn, $sql2 );

$perfil=odbc_result($rs2, "idperfil");

switch ($perfil){
	case "DEP":
		$sql1="SELECT ([cns_asi_dep_55.CACA] & ' - ' & [cns_asi_dep_55.CACA]+1) AS CA, cns_asi_dep_55.CACA, USUARIOS_PERFILES.login, Count(cns_asi_dep_55.ASI) AS cuenta FROM USUARIOS_PERFILES INNER JOIN cns_asi_dep_55 ON USUARIOS_PERFILES.idunidad = cns_asi_dep_55.iddep GROUP BY cns_asi_dep_55.CACA, USUARIOS_PERFILES.login HAVING (((USUARIOS_PERFILES.login)='$login'))";  
		

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
		$sql1="SELECT ([cns_asi_cen_55.CACA] & ' - ' & [cns_asi_cen_55.CACA]+1) AS CA, cns_asi_cen_55.CACA, USUARIOS_PERFILES.login, Count(cns_asi_cen_55.ASI) AS cuenta FROM USUARIOS_PERFILES INNER JOIN cns_asi_cen_55 ON USUARIOS_PERFILES.idunidad = cns_asi_cen_55.idcen GROUP BY cns_asi_cen_55.CACA, USUARIOS_PERFILES.login HAVING (((USUARIOS_PERFILES.login)='$login'))"; 
		

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
		$sql1="SELECT ([cns_asi_tit_55.CACA] & ' - ' & [cns_asi_tit_55.CACA]+1) AS CA, cns_asi_tit_55.CACA, USUARIOS_PERFILES.login, Count(cns_asi_tit_55.ASI) AS cuenta FROM USUARIOS_PERFILES INNER JOIN cns_asi_tit_55 ON USUARIOS_PERFILES.idunidad = cns_asi_tit_55.idtit GROUP BY cns_asi_tit_55.CACA, USUARIOS_PERFILES.login HAVING (((USUARIOS_PERFILES.login)='$login'))"; 
	

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
		$sql="SELECT ([cns_asi_55.CACA] & ' - ' & [cns_asi_55.CACA]+1) AS CA, cns_asi_55.CACA, Count(cns_asi_55.ASI) AS cuenta FROM cns_asi_55 GROUP BY ([cns_asi_55.CACA] & ' - ' & [cns_asi_55.CACA]+1), cns_asi_55.CACA"; 
		
		
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