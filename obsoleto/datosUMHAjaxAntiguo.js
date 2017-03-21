function crearObjetoUMH(){
	
	if(window.XMLHttpRequest){
		oXMLHttpReqUMH=new XMLHttpRequest();
	}else{
		try{
			oXMLHttpReqUMH=new ActiveXObject("Microsoft.XMLHTTP");
		}catch (e){
			alert('El navegador utilizado no está soportado');
		}
	
	}
	return oXMLHttpReqUMH;
}



function fFuntionUMH(){
	
	if(oXMLHttpReqUMH.readyState==4 && oXMLHttpReqUMH.status==200){
		var respuesta;
		
		respuesta=oXMLHttpReqUMH.responseText;
		//respuesta = $('#tUMH').DataTable({oXMLHttpReqUMH.responseText});
		$('#tUMH').DataTable(respuesta);
		console.log(respuesta);
		document.getElementById("principal").innerHTML=respuesta;
		//document.getElementById("enc").innerHTML="Gesti&oacuten de clientes";
		
	}
	else{
		document.getElementById("principal").innerHTML='Cargando...';
	}
} 




function datosUMH() {

    var oXMLHttpReqUMH=crearObjetoUMH();
	
	if(oXMLHttpReqUMH){
		oXMLHttpReqUMH.onreadystatechange=fFuntionUMH;
		oXMLHttpReqUMH.open ('POST','./lib/datosUMH.php');
		oXMLHttpReqUMH.setRequestHeader("Content-Type","application/json");
		oXMLHttpReqUMH.send('');
    	
	}
    
}
