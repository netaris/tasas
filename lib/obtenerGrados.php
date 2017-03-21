<?php
include '../conexion2.php';
include '../lib/convert_utf8.php';

$login=$_SERVER['HTTP_LOGIN'];


$sql1 = "SELECT * FROM USUARIOS where USUARIOS.login='$login'";
$rs1 = odbc_exec( $conn, $sql1);

$perfil=odbc_result($rs1, "idperfil");


switch ($perfil){
	case "DEC":
		//echo ($perfil);
		$sql2 = "SELECT USUARIOS_PERFILES.login, CENTROS.idcen, CENTROS.nomcencorto FROM USUARIOS_PERFILES INNER JOIN CENTROS ON USUARIOS_PERFILES.idunidad = CENTROS.idcen where USUARIOS_PERFILES.login='$login'";
		$rs2 = odbc_exec( $conn, $sql2 );
		$centro=odbc_result($rs2, "nomcencorto");
		//echo ($centro);

		//$sql3="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.tipotit='G'";
		$sql3 = "SELECT TITULOS.nomtit as GRADO, TITULOS.idtit as TIT, TITULOS.tipotit FROM CENTROS INNER JOIN (TIT_CEN INNER JOIN TITULOS ON TIT_CEN.idtit = TITULOS.idtit) ON CENTROS.idcen = TIT_CEN.idcen where CENTROS.nomcencorto='$centro' and TITULOS.tipotit='G' and TITULOS.activo=1";
		// Se ejecuta la consulta y se guardan los resultados en el recordset rs
		$rs3 = odbc_exec($conn, $sql3 );
		if ( !$rs3 ) { exit( "No hay datos de Grado en la aplicación");
		}

		$jsonG=array();

		//guardamos en un array multidimensional todos los datos de la consulta

		$i=0;

		
		while($row3 = odbc_fetch_array(($rs3)))
		{
    
   			$jsonG[$i]=$row3;
   			$i++;

		}

		
		utf8_encode_deep($jsonG);
		
		/*echo "<pre>";
		print_r($jsonG);
		echo "</pre>";
		*/
		echo json_encode($jsonG);
		break;
	
	case "AD":
		$sql4="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.tipotit='G' and TITULOS.activo=1";

		// Se ejecuta la consulta y se guardan los resultados en el recordset rs
		$rs4 = odbc_exec($conn, $sql4 );
		if ( !$rs4 ) { exit( "No hay datos de Grado en la aplicación");
		}

		$jsonG=array();

		//guardamos en un array multidimensional todos los datos de la consulta

		$i=0;

		while($row4= odbc_fetch_array(($rs4)))
		{
    
  			$jsonG[$i]=$row4;
   		 	$i++;

		}

		utf8_encode_deep($jsonG);

		echo json_encode($jsonG);
		
		break;
	case "VIC":
		//echo ($perfil);
		$sql3 = "SELECT CENTROS.nomcencorto, TIT_CEN.idtit as TIT, USUARIOS_PERFILES.idperfil, USUARIOS_PERFILES.login, TITULOS.tipotit, TITULOS.activo, TITULOS.nomtit as GRADO FROM (CENTROS INNER JOIN (USUARIOS_PERFILES INNER JOIN TIT_CEN ON USUARIOS_PERFILES.idunidad = TIT_CEN.idtit) ON CENTROS.idcen = TIT_CEN.idcen) INNER JOIN TITULOS ON TIT_CEN.idtit = TITULOS.idtit where USUARIOS_PERFILES.login='$login' and TITULOS.tipotit='G' and TITULOS.activo=1";
		
		// Se ejecuta la consulta y se guardan los resultados en el recordset rs
		$rs3 = odbc_exec($conn, $sql3 );
		if ( !$rs3 ) { exit( "No hay datos de Grado en la aplicación");
		}

		$jsonG=array();

		//guardamos en un array multidimensional todos los datos de la consulta

		$i=0;

		
		while($row3 = odbc_fetch_array(($rs3)))
		{
    
   			$jsonG[$i]=$row3;
   			$i++;

		}

		utf8_encode_deep($jsonG);
		
		/*echo "<pre>";
		print_r($jsonG);
		echo "</pre>";
		*/
		echo json_encode($jsonG);
		
		break;
	case "MS":
		$sql4="SELECT idtit AS TIT, nomtit as GRADO FROM TITULOS WHERE TITULOS.tipotit='G' and TITULOS.activo=1";

		// Se ejecuta la consulta y se guardan los resultados en el recordset rs
		$rs4 = odbc_exec($conn, $sql4 );
		if ( !$rs4 ) { exit( "No hay datos de Grado en la aplicación");
		}

		$jsonG=array();

		//guardamos en un array multidimensional todos los datos de la consulta

		$i=0;

		while($row4= odbc_fetch_array(($rs4)))
		{
    
  			$jsonG[$i]=$row4;
   		 	$i++;

		}

		utf8_encode_deep($jsonG);

		echo json_encode($jsonG);
		
		break;
}


// Se cierra la conexión
odbc_close( $conn );
?>