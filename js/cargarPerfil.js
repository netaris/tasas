$(document).ready(function() {

function obtenerCentro(){
   
    $.ajax({
            url: '/lib/obtenerCentroUsuario.php',
            type: 'GET',
                 
            success: function(jsonRespA) {
                                            
                $("#EPSE").hide();
                $("#EPSO").hide();
                $("#FBA").hide();
                $("#FCE").hide();
                $("#FCSJE").hide();
                $("#FCSJO").hide();
                $("#FCSS").hide();
                $("#FF").hide();
                $("#FM").hide();
                
                obtenerAE(jsonRespA);

                switch (jsonRespA){
                  case "EPSE":
                    $("#EPSE").show();
                    break;
                  case "EPSO":
                    $("#EPSO").show();  
                    break;
                  case "FBA":
                    $("#FBA").show();
                    break;
                  case "FCE":
                    $("#FCE").show();  
                    break;
                  case "FCSJE":
                    $("#FCSJE").show();
                    break;
                  case "FCSJO":
                    $("#FCSJO").show();  
                    break;
                  case "FCSS":
                    $("#FCSS").show();
                    break;
                  case "FF":
                    $("#FF").show();  
                    break;
                  case "FM":
                    $("#FM").show();
                    break;
                  
                }
                                
               
            }

    });
 }

 function obtenerAE(id){
   
    $.ajax({
            url: '/lib/obtenerAEUsuario.php',
            data: {idcen:id},
            type: 'POST',
                 
            success: function(jsonRespA) {
                console.log (jsonRespA);
                            
                $("#CE").hide();
                $("#CS").hide();
                $("#CSJ").hide();
                $("#HU").hide();
                $("#TEC").hide();
                
                
                switch (jsonRespA){
                  case "CE":
                    $("#CE").show();
                    break;
                  case "CS":
                    $("#CS").show();  
                    break;
                  case "CSJ":
                    $("#CSJ").show();  
                    break;
                  case "HU":
                    $("#HU").show();  
                    break;
                  case "TEC":
                    $("#TEC").show();  
                    break;
                }
                                
               
            }

    });
 }
  
function obtenerPerfil(){
   
    $.ajax({
            url: '/lib/obtenerPerfilUsuario.php',
            type: 'GET',
                 
            success: function(jsonRespA) {

                $perfil=jsonRespA;
                               

                switch ($perfil){
                  case "DEC":
                    $("#listadoDepartamentos").hide();
                    $("#gestionUsuarios").hide();
                    $("#cargaDatos").hide();
                    $("#listadoGrados").show();
                    $("#listadoMaster").show();
                    $("#lidatosCentros").show();
                    $("#lidatosAE").show();
                    $("#listadoAC").hide();
                    $("#listadoAsi").show();
                    $("#listadoAsi55").show();
                    $("#lidatosUMH").show();
                    obtenerCentro();
                    break;

                  case "DEP":
                    $("#listadoGrados").hide();
                    $("#listadoMaster").hide();
                    $("#lidatosCentros").hide();
                    $("#gestionUsuarios").hide();
                    $("#cargaDatos").hide();
                    $("#lidatosAE").hide();
                    $("#listadoDepartamentos").show();
                    $("#listadoAC").show();
                    $("#listadoAsi").show();
                    $("#listadoAsi55").show();
                    $("#lidatosUMH").show();
                    break;

                  case "VIC":
                    $("#listadoDepartamentos").hide();
                    $("#listadoAC").hide();
                    $("#gestionUsuarios").hide();
                    $("#cargaDatos").hide();
                    $("#listadoGrados").show();
                    $("#listadoMaster").show();
                    $("#lidatosCentros").show();
                    $("#lidatosAE").show();
                    $("#listadoAsi").show();
                    $("#listadoAsi55").show();
                    $("#lidatosUMH").show();
                    obtenerCentro();
                    break;

                  case "AD":
                    $("#listadoGrados").show();
                    $("#listadoMaster").show();
                    $("#lidatosCentros").show();
                    $("#gestionUsuarios").show();
                    $("#cargaDatos").hide();
                    $("#listadoDepartamentos").show();
                    $("#listadoAC").show();
                    $("#lidatosAE").show();
                    $("#listadoAsi").show();
                    $("#listadoAsi55").show();
                    $("#lidatosUMH").show();
                    break;

                  case "MS":
                    $("#listadoGrados").show();
                    $("#listadoMaster").show();
                    $("#lidatosCentros").show();
                    $("#gestionUsuarios").show();
                    $("#cargaDatos").show();
                    $("#lidatosAE").show();
                    $("#listadoAC").show();
                    $("#listadoDepartamentos").show();
                    $("#listadoAsi").show();
                    $("#listadoAsi55").show();
                    $("#lidatosUMH").show();
                    break;

                }
               
                
               
                 
              

                
              
               
            }

    });
    
 }
obtenerPerfil();

      
});
 
