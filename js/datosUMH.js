$(document).ready(function() {
  

  // MENU DATOS UMH
    $("#lidatosUMH").click(function() {
      
        $("#boxUMH").show();
        $("#boxCentro").hide();
        $("#boxGrados").hide();
      
        $.ajax({
            url: '/lib/datosUMH.php',
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonResp) {
              // tabla uno
              //$('#tUMH').dataTable().fnDestroy();
              $('#tUMH').dataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "CURSO",data:"CA"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                ],

                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
              }); // fin d
             
                                            
            }
        });
    });
    $("#lidatosUMH").click();


// MENU DATOS GRADOS
    $("#listadoGrados").click(function() {
        var datoCen=$('#lidatosCentros').text;
        
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        if ($.fn.DataTable.isDataTable('#tGrados')){
              $("#tGrados").dataTable().fnDestroy();
              $('#tGrados').empty(); 
              $("#titGrado").text("");
        }  

        $.ajax({
            //url: '/lib/listadoGrados.php',
            url: '/lib/obtenerGrados.php',
            type: 'POST',
            dataType: 'JSON',
            
      
            success: function(jsonResp) {
              // tabla uno
              
              var dtGrados=$('#tGrados').DataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "TIT",data:"TIT", width:"5%", className:"centerRow"},
                  { title: "GRADO",data:"GRADO", width:"90%"},
                  { title: "VER RESULTADOS", data:"TIT" ,width:"5%"},
                ],
                columnDefs: [ {
                    "targets": 2,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolTit('+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
                    url:'/fonts/spanish.txt'
                }
              }); // fin d
            }
        });
    });


// MENU DATOS MASTER
    $("#listadoMaster").click(function() {
      
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        if ($.fn.DataTable.isDataTable('#tGrados')){
              $("#tGrados").dataTable().fnDestroy();
              $('#tGrados').empty(); 
              $("#titGrado").text("");
        }  

        $.ajax({
            //url: '/lib/listadoMaster.php',
            url: '/lib/obtenerMaster.php',
            type: 'POST',
            dataType: 'JSON',
            
      
            success: function(jsonResp) {
              // tabla uno
              
              var dtGrados=$('#tGrados').DataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "TIT",data:"TIT", width:"5%", className:"centerRow"},
                  { title: "MASTER",data:"MASTER", width:"90%"},
                  { title: "VER RESULTADOS", data:"TIT" ,width:"5%"},
                ],
                columnDefs: [ {
                    "targets": 2,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolTit('+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
                    url:'/fonts/spanish.txt'
                }
              }); // fin d
            }
        });
    });


// MENU DATOS DEPARTAMENTOS
    $("#listadoDepartamentos").click(function() {
      
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        if ($.fn.DataTable.isDataTable('#tGrados')){
              $("#tGrados").dataTable().fnDestroy();
              $('#tGrados').empty(); 
              $("#titGrado").text("");
        }  

        $.ajax({
            url: '/lib/obtenerDepartamentos.php',
            type: 'POST',
            dataType: 'JSON',
            
      
            success: function(jsonResp) {
              // tabla uno
              
              var dtGrados=$('#tGrados').DataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "DEP",data:"DEP", width:"5%", className:"centerRow"},
                  { title: "DEPARTAMENTO",data:"DEPARTAMENTO", width:"90%"},
                  { title: "VER RESULTADOS", data:"DEP" ,width:"5%"},
                ],
                columnDefs: [ {
                    "targets": 2,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolDep('+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
                    url:'/fonts/spanish.txt'
                }
              }); // fin d
            }
        });
    });


// MENU DATOS ÁREAS DE CONOCIMIENTO
    $("#listadoAC").click(function() {
      
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        if ($.fn.DataTable.isDataTable('#tGrados')){
              $("#tGrados").dataTable().fnDestroy();
              $('#tGrados').empty(); 
              $("#titGrado").text("");
        }  

        $.ajax({
            url: '/lib/obtenerAC.php',
            type: 'POST',
            dataType: 'JSON',
            
      
            success: function(jsonResp) {
              // tabla uno
              
              var dtGrados=$('#tGrados').DataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "IDAREA",data:"idarea", width:"5%", className:"centerRow"},
                  { title: "&AacuteREA DE CONOCIMIENTO",data:"nomarea", width:"90%"},
                  { title: "VER EVOLUCI&OacuteN", data:"numarea" ,width:"5%"},
                ],
                columnDefs: [ {
                    "targets": 2,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          
                          return '<a onClick=mostrarEvolArea('+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
                    url:'/fonts/spanish.txt'
                }
              }); // fin d
            }
        });
    });


// MENU DATOS ASIGNATURAS
    $("#listadoAsi").click(function() {
      
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        if ($.fn.DataTable.isDataTable('#tGrados')){
              $("#tGrados").dataTable().fnDestroy();
              $('#tGrados').empty(); 
              $("#titGrado").text("");
        }  

        $.ajax({
            url: '/lib/obtenerAsi.php',
            type: 'POST',
            dataType: 'JSON',
            
      
            success: function(jsonResp) {
              // tabla uno
              
              var dtGrados=$('#tGrados').DataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"asi", width:"5%", className:"centerRow"},
                  { title: "ASIGNATURA",data:"nomasi", width:"45%"},
                  { title: "TIT",data:"idtit", width:"5%",className:"centerRow"},
                  { title: "T&IacuteTULO",data:"nomtit", width:"40%"},
                  { title: "VER EVOLUCI&OacuteN", data:"asi" ,width:"5%"},
                ],
                columnDefs: [ {
                    "targets": 4,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          
                          return '<a onClick=mostrarEvolAsi('+data+') href=#>Ver</a>';
                          
                    }
                }],
                
                language:{
                    url:'/fonts/spanish.txt'
                }
              }); // fin d
            }
        });
    });

// MENU DATOS ASIGNATURAS <55%
    $("#listadoAsi55").click(function() {
      
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        if ($.fn.DataTable.isDataTable('#tGrados')){
              $("#tGrados").dataTable().fnDestroy();
              $('#tGrados').empty(); 
              $("#titGrado").text("");
        }  

        $.ajax({
            url: '/lib/obtenerCaca55.php',
            type: 'POST',
            dataType: 'JSON',
            
      
            success: function(jsonResp) {
              // tabla uno
              
              var dtGrados=$('#tGrados').DataTable( {
                data: jsonResp,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "CURSO",data:"CA", width:"33%", className:"centerRow"},
                  { title: "N&UacuteMERO DE ASIGNATURAS",data:"cuenta", width:"33%"},
                  { title: "VER RESULTADOS", data:"CACA", width:"33%"},
                ],
                columnDefs: [ {
                    "targets": 2,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          
                          return '<a onClick=mostrarAsi55('+data+') href=#>Ver</a>';
                          
                    }
                }],
                
                language:{
                    url:'/fonts/spanish.txt'
                }
              }); // fin d
            }
        });
    });




});



 function nombreTit(idtit){
   
    $.ajax({
            url: '/lib/nombreTit.php',
            data: {idtit:idtit},
            type: 'GET',
                 
            success: function(jsonRespA) {
                $("#titGrado").text(jsonRespA);
            }

    });
 }

function nombreAsi(asi){
   
    $.ajax({
            url: '/lib/nombreAsi.php',
            data: {asi:asi},
            type: 'GET',
                 
            success: function(jsonRespA) {
                $("#titGrado").text(jsonRespA);
            }

    });
 }

  function nombreAE(idae){
   
    $.ajax({
            url: '/lib/nombreAE.php',
            data: {idae:idae},
            type: 'GET',
                 
            success: function(jsonRespA) {
                $("#titCentro").text(jsonRespA);
            }

    });
 }

 function nombreDep(iddep){
   
    $.ajax({
            url: '/lib/nombreDep.php',
            data: {iddep:iddep},
            type: 'GET',
                 
            success: function(jsonRespA) {
                $("#titGrado").text(jsonRespA);
            }

    });
 }

 function nombreTit(idtit){
   
    $.ajax({
            url: '/lib/nombreTit.php',
            data: {idtit:idtit},
            type: 'GET',
                 
            success: function(jsonRespA) {
                $("#titGrado").text(jsonRespA);
            }

    });
 }

 function nombreArea(idarea){
   
    $.ajax({
            url: '/lib/nombreArea.php',
            data: {idarea:idarea},
            type: 'GET',
                 
            success: function(jsonRespA) {
                $("#titGrado").text(jsonRespA);
            }

    });
 }

 function mostrarEvolAsi(asi){
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreAsi(asi);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosEvolAsi.php',
            data: {asi:asi},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"ASI"},
                  { title: "ASIGNATURA",data:"nomasi"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  
                ],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
                
           
          }
        });

 }

 function mostrarEvolTit(idtit){
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreTit(idtit);
        //alert (dep);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosEvolTit.php',
            data: {idtit:idtit},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
             
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "TIT",data:"IDTIT"},
                  { title: "T&IacuteTULO",data:"nomtit"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER ASIGNATURAS",data:"CACA",width:"5%" },
                ],
                columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          
                          return '<a onClick=mostrarAsiTit('+idtit+','+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABzCAYAAAAc0geEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAClxSURBVHhe7Z0HeFVV9vYZZ3SsKEpvQijpjSIQEUSwoqLiWLA31L8ojDpjG2TsiFKsQ5WSAklIAgEiaaTQe6+hhB5qeiXwfvtd557k5HLTr5n/9337l2c99562T7n7zVq7nkbQaDQNihadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA2MFp2F7FWDkZt6B3KW90cubUV/pC0agKyUAchb3k+tU5Z6OzKX342inH24cAm4cOFCDa0UpRcvIXvLKGQnd1fn6CfnyVtxJ47EDMLZpLvUd56b5+iLrKQAFJxOgToFvv32WyQlJSEzMxNr165FaWmpccE2Ll68iEuXLjk4p3NN4xy06CzkJvVEXkJn5CZ2Vp9dkJfoirQwV2THu6rv5voOyFzmg+LsXTbRlVyWOR3bRSU6IGfDi8iLbYX8hE7KuqAoqSsOhLvh9O8eKEjsZDu/C7JiO6D4dJyIrn379oiKikJgYCDc3d3lWg8dOoQXXngB27ZtExHm5eXJef5I8WmcgxadhdzkPkpcXZC7TImMluSOtPmeyE5wR76sc0O+EkbOMn8luj219HQU3SXkbHwZufFtjPRVeoXJ7jgY4YkzS72RrwRorO+K7NhOKD2XjPPZRWjbri3S0tIwevRoPPTQQ3Kt06dPR6NGjeTzxx9/xNtvvy3rKUDznNbvzjCNc9Cis5CT0ltEl7fMXTJ/fpKHTXQeZaKjx8tSoivK3lkr0ZUoN3eBotvwCvLi2ilhuytzQ0GKVXS2c4joOqt4dzl27j6E5i1ayPU9+eSTGDFiRNn3Jk2a4PPPP8fAgQMxdepU8XJ33HEH1q9fL/sQR9dSV9M4By06CzkpvZQno7epRnRJfhVExzIVYaand6HZrxPRqe+m6AxxuVpE51VBdFlxnXAxMxnHT5zBTTfdhJEjR+L6669HTEwMcnNz0b17d1nXrVs3eHt7IycnBxEREbIvv+/YsQPvvfeenNvEXkS1NY1z0KKzUBvRFefskmNKSkqkguPEiRM4cuRIBTt27BjOnDmDwsJCKZtRhpeLzq1S0RVkxMo5FixciEGDBuGLL76Q5RkzZuDOO+9EbGyshJhmyBkQEIC///3v8n3cuHHo0aOHfOd+R48erXe4qXEOWnQWqhYdBadCQlaopHRDUdZOnMw4jYMHDuD48eM4f/488vPzUVRUhOLiYhQUFCArKwsZGRlS6ZGefgR5anvB5teU6Fimo7g8lOg8lOg8HIius4jO8Jfl0IPSi23atAm7d+8W7/fbb7+p9NNx9dVXY+/evbLf4MGDMXPmTMydO1fWb926VdYTpuFIVNWZxjlo0VmoTHQ5SnS56nuOEkRRcmccj/FH2rZlOHX6vMqMJXIsM7LVk9iHmFlZ2ThwKB0H4p5BQUJHFIi4XFGYTNF5VerpmIKZnn3m57qDBw+KwCdMmID7779f1rMms3fv3vjss89w8803IyUlRdZz3++//16+EzO9mprGOWjRWajK0+UmdUWhCgUPR3lgZ2hP5el2yDGOMqcju6iEx7/Dy17B7pBOyEnyREESK1LccCDCu1rRVWYm2dnZYiQ5ORl/+ctf0Lx5cyQmJso6hsEDBgwQr0cvSA9cW4+ncQ5adBYci85DRFeU7I7DC7yxP9wVucndUZKz26hIKSnPlJcuWYPBS7ho8U4l6nupyuSFm1/B8YUu2BXqo4TsKUI+UANPV53RmxIKic0LQ4YMwaJFi2Qdefrpp6X8t337drz00ktYvXq1bUvN/3FonIMWnYVy0RmhX26SF/Yr0bG97tQSL+wO81XhYFdks/YyZxdKpPaS4SUz/CXlaQpw5MhZ7D94CidOZEn4Ry5dKkVx6SVbk8GLKEpsh2OLmLYXLqS620Tno0TnJs0I9mU6RwKoyqxQhB988AHc3Nzw8ssvi5czoSg3b94s3x2lY28a56BFZ8FedBTbgXAPZMV7Yuc8b2QneihhdDJqL7N3q5DROO7Y8bNYsmQnpkxbg+8npGLMl/F496NF+PjzGEQs3qq8nJFhRXRsHI9rh6IUelFvnFYeLj2S4SXb6ayiq52nszezTMnvLOv5+vri9OnTWLdunVwLmxf+/Oc/o2vXrjh8+LB4Svs07E3jHLToLNiLLl+J7mCkJ9Ii/HAs2kdCQTYZZC/zQ4kSHVm//jBmTFuLuXO3Y9HifYiO3oM5Qdvx3fjVeGPUEtz+yFQMHTkbx8/kyP4561+SJgP2PslM8MTecD8civRxuuhMMytz2GXMbE5grSZDzSlTpkhTxOOPPy7rHR1vNY1z0KKzYBUdu4LlqzLXHhUC0sux/EUx5CV2Uh7PDyhKw/pNp/DrLysQt/QAdmw7hfSD57B71ymkJh1ASPB2fD12BV4duQit+/2EgJemIbfoAgq3vKo8XVsRNb3doQU+2BLkh/Ox3uJZnRFe2ptZ3mN74XfffYfGjRuLCF1cXNChQwcEBQXJduLoeNM0zkGLzoK96NiGtmmOtyp7+SiBUAyGpytI7YGThzZi4o/rED5/F7ZvzUB2VqGEdPl5xdi7+7QKN/fhx5/X4u//jMUdw0LQyPMLjP0tGdj3DnLjW0lahUmuOBPnhVXTvZEZ56tEx/TZz7OL0zydaabHY3ex5cuXi9fr27evNOKTffv2Sedp4uh4msY5aNFZqBheuoknWjXdC8cXeaEw2ahZzFeiK1nTC1GhC/DVt+uUuNKwP+2cypQcXsPMXYqjR7IQF3cAv07egPc/isddzwXjLwET4Dv0J2QsfwbFSbcqUdtqSJM9sGKarwovfVEgHZ7ZEO+88NLeyMmTJ6W7mNmQnpCQgGbNmklDu+n1KjtWU3+06CzkpfaWjM/2s/xkN5SkeGH9TG+cj/NGkRId1xclq/AyuSe++nw6vvpuAxYs2KM83UnkZNPTXVKerqjM0/3wyzrxdP2HBeHqfhPRqv84JM0aDKxxQW6qEjHPsdINa2f7IiPWC0VqXb7yqPkpXVUI64LCswlSL8o60NoaxWpaaelFlCjRlNKUN2Zj+s6dO6UXy9mzZ2X0AvtwhoSESKWL2V9Ui+6PQYvOQkZsL5xc4orTS9xwMsYNp35neKk83WIvnIpxVeaGs0u74EBUL7wzago+/mIVZs3ejGUJ+7Fz+0mkHzqPPbtOIzX5EIJZphuXgtdHRsP7sem4su8EtB8wAfPGP4OLqR6qXOelzAcFib7YN7c7Ti3qjny1nBtrWFaMOwoO/46SomIU5+WXWYn5PdeByfYC9VmAErVMK+JnUYESTSlKSwwhmU0Z7777Lh599FH88ssv4uVY5qMgTbTo/hi06CwcWtwL6ZFuSI9iBYcH0pWtmemDA5FeOBzlLuuPL3TFttA+eOq1H/Dme4kYN34lZs/ZhuiFexC7NA2LFu9BYPBWjP9hDf7xUSyGvByOZoN+xnX9v0O3IZPw9aDHEdvTHYt6eZVZVE8fLLrNG0uUcXlhb7X+Ni8s6DsIUf0exoI7HsKCfrU0HqNsnt9d2BUcLvdnFRC9GcNMPz8/3HDDDfjwww9lH8K+nStWrChrcjBN4xy06Czkrxqowkd29/JQZTg3FC93x8EoH+QsM3qOcBhOcWoXFYb6Y+gro3HfcxEY+cFSfP51Kib+sBo//7oek35aiy/HpuK9j+Lw1OuR6DpEebnbv0fHe8dj0NAJmOQ5GBHNvTGvVTfDWnZDaCt/ZfxUppbDW/SQ7/NaeCO0mSdCm5vmoZbdEXJ9R4Q2dStfV4XNuqottv08Xe6vpLTiKHfCTtm7dhkjJthxm4Nhr7nmGhkWRKxhpsY5aNFZyFo/DHnxHY0KjkTbqO5IT5z+3VPa7KQiRW3DGjd88MGLuKn/FNzzwly89NZCvP1+DN5VAhylPl97OxoPvRQGt4emSVjZfOD3uO3RSXjqodEI6hyAqLb+mH9rNzvrfvlye+uysvb+CGnji+j7nkB4l16Y385ROhUt6MbO2P6f2XJ/VsFZhcRREQw1OSiWNZrsr8kxeRyaZG001zgHLToLubtGIyeuvQiOwqPojkWr0DLa8HTsk8mmhAvLu2BH5ADc2H8Mru47Ga5DpqLXk3Nw59OBuF19eijvdtOgn/Dn28ejxcDxuO3hCbj7ie/w6e3DlOB8EX5r9WJxZEE3u2LlP75ASXE+5vd9CGEtPB3uZzWr6EpUuc4qOBpFRQ/HvpoLFiyQ/QjH4HGgLENMM8zUOActOgsFx0KRGdtORCeN48oy4z2wN9wL+cnKZD09Xlfl7bpi9oSncFXvb9Ao4AdcdccEJcAJ+Osd49X3cWh85zh0um88AoZMwKC/fY/X738bIS69ENHeWxlFZ+/ZqrF2fghq5YWTGzfJta799zgE3dTZ8b40OUf1oqOZbXiE4wFnzZoltZnstbJkyRJZz/00zkGLzkJJThoyE1UomdgFOdLjvyuKVDkuLdwbGSrELJAQ02hfy0vqAqzywuyJT8Lvvq/Rqv8PaDfwB7jcOwGeD05E7yET0f/xCXjgibF46943MYdhpRKOIYo6eDp1bHBrb5xYZfSdXDfmWyWoTpftF95BmQo7g5q5qTKhpwizOtHRCLuFtW3bVnqpcNwdK1e+/PJL2Wbuo6k/WnQWSksvIGvtE8iNZzcto4GcbXPnYr2wZ563NGTLCHIRHrdReG7YHn43PvtgOP729Gjc+8jnGPzYV3ji0TF49YF3MLbno5jXoTsWtvG+TCC1sQglujlKdBkbtsqQoZghz2NeU7ey7eG2zzCGr137IC0qGvFPD8esq9rXSHQMM+nhOBUEv5vQC5qVKRrnoEVngUFW/uFgnGeIaRFXYYqrdEpOj/JGYWr5eqlwUd7wworOwApPnFraGzvn34PZ9w3ElI79ENqhB6JUSBh6UxfMVQKJUOKzCqQ2xvJb1O2DUZSbg7MH0hHM9Upg9vvNa+aOqEFD5X52zgrBlEZNsaMGoqMRttNx6gl+mu15xNyuqT9adBY49Ka4OBPnlz+AvHhjmjyKi8JimW53mI+MgzMqVQzxcZ/8RIairiha7gKs9ETSIE+ENfVBZGs/zHPpjoRXRmLp315BUJMuiFDCCLMTSk1s7s1dEffsG3KdJ7fsQGAHJbi2ZriqPKGtpjPwpk5Y8+lY2W/7tEBMbdRMiW6WLNdEdKNGjZIR566urrjrrrtktDlnHbN6P0390KKzwK5S4u2ORSBr6a1KSJwD06g8KRCBeWFXqBeOLFQeT5X18pJd1ToKzqjVzEvmjM2+WDrIH/Oa+2F2Yxdsm2bL8Ll5iB78NEJEeLWsRFFG0S19arikdXzNegS28ZJynrmd3pMW1LgjNk/4RfbbFRiKaY2a19jT0bOdO3cOYWFhuPfeezFmzBipTGEtJrdrnIMWnQV2lbpQegkXL5UiZ/NI5C1tKXOjcLgNjZMJ5apy3f5IT+wN80NmvKd0ii6QShd2XnZFQbIPYu/2RfD17ojo/zCKc3NtqQO5J08hvOc9CGtZfVW/aaZXnKvESo9JTm7cjOB2l3s61orOUaLbYmsM36o+pyrR1aRMZxrZv3+/tNnRvv76a+keZg01NfVDi85CyYUS8Xac+6SkMAOZK+5FtlSqsPe/ElYiQ012enbHqRhP7FFeLy3SCyd+90R2ovKG7MWS6ouEgT6YcV1X7A1fKOkueeNdHFuxRr4vf/9fCLyxU63LdfSQsS8bU6cfSV0pzQcVPZ0/wtv7IfAWd+ydb8yNEvfcCMy4okWtPB155JFHcN9998kUfybcrnEOWnQWjMzHjFkiYWZx1g5kJfWVdw/kLvNQpkJKVX7jJ+dK4SDXkzFeOBjpjn3hntgX6Y1DUT5Ycoc3Zt3ihaz9h5GnvNvMpio0HGaUx3b8FoQ5TVjVX7MQM6K9sV/ITZ2RMuKfksbR5asR1NrbIjruo0TXxgfzXPsg59gJmX0s6s4hmHVVmxqLjkbhsbHcCruKaZyHFp0Fa+ZjBuX//eLMbchMvQs5sW2kQqVMfMrj0fsVMKSUihUPZKn12Ql+WBKgym19hypvWYSt0wIx68o2iOo/RM5xKHk55jR3Q0S7ywVmb4Y3VIJSoWPwjZ2R+t6nRhoxCZjTzL2sAdwwfwlbw3rdIyMOSgoKENZzEGZd065W4SUrTDg/5qefGud64403ZKwd59XUOActOgsVMyBDzRIRXkleOjLXvYzspW2Ql2D0zTREZ9RgMuxkCJqf3AXFKd5Y0L0tNk2YJmku/+enCLzuVoR59EVexikU5+chos/9CGuhwsMywTg2s3Jk/q0qbGzcCVt+nCppbp8ZLCEqa0LL9/fHvFvcsPDBYbLP6W07pH0w8PoOtS7TcZYwTuXAEeZ/+tOfMH78ePz1r3+VbZr6o0VnwZr5ZNBnifpUVqrKeBcuFiHvwGTlzW5DztLWIr6y9xvIpyr3JbmicJkSXX9XpC1KkjST3/4Hgm/oJO1qZ3bskXVLBj+DUCWQCuU6hpFS7d/dJjbDi0lTQHtfzLmlK9IW/C7Hxz73FkLUcrnguA9D0C5YpsqPZMP3v2D2DS5KnJ1rFV7S03Fgq7+/vwiN4+3YNez555+XNDT1R4vOgqNMSJNQUzkBtlQV5e1H9p6vVcjZF1mxtyKb7yWId0F+QmdVxnNB3pKOSBn5N9k/69hxRA54RIbjBLb2wfG1G+U8bLObe7OrhIdhHfylt0lwky6Yc6OL8oDeZR6srD2P29t4IWPdFjk+dthwhDRRx5vbKVAlOjZRbP5hsuyz7t/fS3qBNewGZjXCF6LEx8dXGNSqcQ5adBYcZUAa5z3hVAfFpSrcVMqj+EoKTiD/2Hzkbn0fWSsfRlbSbchO9MT56I7YGWL0V1w//lfMuvpWoyq/tSeOrTb6TcY+9yZCbu6qxOWH0HY+CGzqhtT3P8X6sT8g/LZBCFaCZFsejxNv2NYfQWq/kxuMiWEThv2POr6LRXTKM7bzR2BzDxyONzzshq8mYrYKQWvS4dmRmbAbGHuoaJyHFp0F6zAW1uKZvTBKlegkzCwxB4GWQq0qm4+kpCQPJbkHcSFzE05vj8T5w7tReC4Lkb3uQ5gSQnjbbko0vji5ebukFz/sdRHdfLUuqKU3tv0WLOtJXkYGljz6MkKUECPbMdTsgfA2ytN17IbTu/dJrSTH04U28ygXHD/b+CJEleHOqH0uFBdj0UPPykBXhpfbJtdedGafS76Gq2nTptJ2p3EOWnQW+LJFEw7sPHXqlGS2n3/+GYWqXMNMyAqWiqbWKeVdsI2O2RoVh8NrNuPs5h2Yw/6WHGja1g9BHZRodhizb8U8/CzmNXVHsAr/ljzygqzLVeWogizjBSDn9uxDsIsq4ymxSftbSy9E+A1AfmaWeNno/g8htLldRUxbX1Vu9Fei24vCrCyEuAdgfitvzKlDeEkzRcf34F155ZXYs8coj2rqjxadBc6QxfkgOazl22+/lWryzp07yxwifPcccZRBTSMrx06SMHLLT9Okr2W5IPxwautO2Sf28RcRfENHBCpRZWzdgfxz5xDa5wEkvPEP2Z6bcQqh7ncgXIkmvIOf8pbuiBowBBeUpz2hvCU9GgVZQXRtfBDS6Tac239Qjp/r1hthbbxrXZFimgnfBMTp2DXOQ4vOAidenThxotTecU7IBx98UOYL4azIfNWU4ekcZ1KGornHTiLQfwCOr1iNxQ8OkwoUqYlUod9clx7IOnoUxXm5mN9jEGZd1wE7g4wJgxY/+jxmX9kS4d0HSpMC00od9bGINrK98pJKOMv/MVr23R+1BLPVerODs2k818KBj8k+2ceOI9SDns6rThUpPH9oaKh4esI5VKxRgKZ+aNFZYIYjfLkGe9rzXd4bNmyQdZUJjs0K/CSnNm7BLOWZto7/D0LdAlRZTnmj9t0xt5kbYoY8pzyVClk3bsWMG1wQO+w1OWbt2B8w59oOxni55m7Yv2iprN85i21xylMqcbGNbp3aj+yaNQ9BajlS7c9jwmnKy81Vwvx9qBGqHk5ZiaBm7LGiyow3dlKebo6sly5utuutzHifhE0GvH82F/BNr+YIck390aKzg3NAsmf9wIED5Y2mVhxlUrFSo0C36pNvENLCE2G+AxDOblrS5tZdZXwXrLD1JklfugzTlFfbFxEty/N7DkJYMy/xiIHXd8S6bybK+oOLl6oyYVejPKjCy8MJxttUV48Ziyl/aqbWeSCwhTJ1nrlde2GGOseqz40hPRsm/KqE3BFRysMGN3bB9immpzPaHx3eg80IPT4bxNkHkxMVcdZn85+Ppv5o0VlgpmM/wy1btiA8PBw//fSTjKReuXKlhFeOvJ00oovm2NfxYYT73YXoQY8htCUrOowqf4oueeTHco6dM4Lxm0s3lBYV41B8IoKVcOa3VSGi8ogcCb5o8FO4oLadXLsJQW2UGFt6Kq/ZB1lHjsqI8YQPPsO2qb/hcOoapC9LwfHV63FuXxqOr9+EvDNG1X7qJ19gdnsfGYkw5YpW2DYlUNYTvpjS/h6sRtjR+ZNPPpH75YzPrEjJzMyUbZr6o0VngWWZjRs3Sk0dy3R82QYHcdLzPfzww7LP5cIz3jl+csMmzLylC1Z89AXinx2Bebe4i+gopqDGnbH5R6Nb2O8jPsAOVZbjq5Aj+j2ohMaqf3+jjKbCxCCXnsg+ehxFWTmY630Hwpq6ItSnH3IyTknNpa2S1CFMs8T20ry8M2eRsXkb0pbEY824H7Hms3HYE74AJQX5yjNXXbbjPbI8x+8c1sN+mGZFkqb+aNHZwV4YFNlVV10l7VM9e/aUN5i+/vrrUpNHYVbIpHRzKqPHvfA/mN64I85s3orYZ99C6C2u4uVYyxjasQey9u5T+17A9qjFcp713/4sZbZIS6dlKZu59kLWoXRpj4tje9417RFx+wMoUOc23luuwsTCIuxT6bDj8/bpwVj173E4mJCstl9U3vAijm/YjKzDR+U8ZM2n3+CnRlfgx0aNsTc6RtbxhSd8WWWFe1HGpgJHcJvGOWjR2cFmgy+++ELe220t0/E7u0SZjeemsdqhMPM8Qj1uR4hHHxScPYeYJ15Tno7dvIyayxCXHji7a68IhvAzcuCj5cI0TQmQvUqOLFsp+60d/TWmNboFa778XpZ5XHb6YcS9MhIzVfkvUB0f2KSTzIOydepM2Sc9bhmm3twZ87r0wuL7nkTciyNUOXECUkb9Cwmv/h2ntmwv+8dhX76jh2P75IgRI2TkON/QSsx71jgHLToLzFisrbP+t7d+Z2a1Fx1hjeOMq9pgxaiPZHnxIy9irim6Vt4I9e6H7JMZZaHhwaXxmMtJhcomFrJ5OyW64BaeOJpqvIQ//uV3MP2adkiPNypRMrZuQ2DnXghWQuPQoHC1fwQrS1Q6GRQTj3nhTYSocHZ+a18VmrpjRqPm2D7VqL0k3Md6/VYjCxculHeUP/vss/Kug+joaAk1ee8a56BFZ4EZj//t7TMYZz4+c+aM1OQxUxLzDThk7Udf49dGTSTkI0uGPI+5TbtKzeX8Vr6Y59ob2YcMr3F+/37MdQswuod1MDyctOUpY++V2a08yzpG/z70RYR0uQ15587J8pqvvjeaFyhmqaTxB991sODOISguKpbuX5F9B4PvODC9p/S9nGxrMlChpykwR7WYhPOj8D0Gc+bMkVdpsRsY503RonMeWnQWmPEoOoaSq1atknFlHNpy7bXXIjIyUoxhJ2sASy4Usygnr6ZiRg/zvxMF541uWhTdPA69ad9DhBfa1hvRg4Ziyy9TEX3vkwiRDs2GKEyjkOa29EREn3tViGrUQnLeyvk97lFiMiprUt4frbxYJ/GgxnHdEXRDR6z55BvZXpRfiMh+D4ugzXSr6/BsenLTi/MdBpwFjL1w+OJI9s4h3FfjHLToLDBjUXTMfKw8YUXKa6+9Jq+NYmY0YXesErUf2ThxMn5pdHPZAFNm4XLRcaQAMz9nB3PHHCWAeS3cRXBW0ZlDeOY16Yrf//aypMNJjOa5ByAiYDAuKXWXqLA35hGOwzOG9FDMERx90MJDhavGyIK8M6cRqUQaJs0V1YvOFNn8+fNluxU2k/C+ibm/xjlo0VmwZi5muk2bjPcGWGFbGUMzRlv7wqOlLYzdso6kGBMPsYbRFJ0pOHNganlYqMJOmyhEQGo9y2iBN3fBlskzJJ0Tq9di6lUtyxrVWf3PGZ7Zy4SeLlIZRxosGPS41IqSnXNCRdjWtKsSHVm3bp148v79+8t3e/hPyLq/pv5o0Vmwz5BWkpKSEBgYKNtUqU/Csd+fexP/aXS98kb3oViFdvRyXM+RA+Lp7MRVmUmZTnmt4LY+yNyfJudb9cmXmKm8WuYeY/ngklgE2c2LEqQ8Y/xwY6Q42Tb5NwQ2drGEn2aZzrHoKChWkrAHSkBAgDSV0LOz76nsXzaUyfEz0dQNLToLlWWwpUuXonHjxnjxxRcRpITH8XUXVchXeP481nzzAw7GLZOyXMklVsKo8PLh5xHKQabM/BRJNRbR3uhHObe5F1JHfoItP01HYJPO8kbVkoJCuYakER9Il67yY/wRclMnpLxpjEw4u2sfIrvdbbw+y3Je9tOsqkxHOHyJ81umpqbKUJ6WLVtKNzCKUns656NFZ8HMXCzrcBo6ViIMHjwYvXv3xrhx46Sdrp8KwzIyMkRcF0VqZjV8MS6o4xheRt77JGZe0048U6Aqy1Vnc5QFNXNV3z3w27XtMe2vbTHtzy2w/L0xRvoq3ai7h2LmtbdWPLZpV8xo7oalL76NEP8B6py3Yo4q4/GNPTw3bdqVrZWIjZC1MtElJyfLSyFNWHnEiiR6bft9NfVHi86CNXNRZKNGjZJhPaw2Z1NBjx49ZJYsegRizZC0UpWp2cvjyPoNOBSXhPTEVBymJdg+rcZ1FuO+sn9CsrIUHE5egY2TpmLx/c9i+YdfytR96QkrKhybvszYf1/UEhyMSSjfxk/b94Oxy3Au/VBZWdQYeFt+zRQWe9p4enpK7xt2e/vXv/7l8P40zkGLzoI1c/FNpOxdT+6++27p/Ezvx9o+c5wZsWZK6fysykHOIvaZNzG50dWIf3WUbU3dMDyx4eXM9jl7OBERu7o988wzOHr0qHh76705OkZTN7ToLJiZi+UYegC+JJG97du3b49//tOYXdmE4RcrV6xlHsMMj8KJjMzl2pk6VqV/etceBLXxRkh7X2Rs3lpBOLU1c8wfjddGDh06hG+++UYqURxhPd40jXPQorNgzWD8T0/hsRsUG8nNSgXCnvcMNfv06SPLpPxYVbZTIRxFZ3qV2hgnuCVp0UvxS6PGiHvKGOzKF1ZW7KBsnaelYshYcR/jn4i5jvdFOC0F37jaqlUrbNu2TdbZ11bam8Y5aNFZsM9kpsgIMyuN84WwYoWCY6jJaQ02b97sMByrq10svYTCzCzEj/hQupbRy5UqAdVFxCb8bv7jePLJJ/HOO+/I+vfff1+mpODkS9VNSaFxDlp0FhxlNKuR2bNnS3sW2bFjhwzwZAhKqsqwNTWZVVqFkeVy53UxZKX3rNoT2Rs99Zo1azB6tDG/CmF59NVXXxWhmWVWhtEcGW5fW2lvGuegRWfBUUazGr0ZO/+ydo8v1mD/xM8++0yONcM2E+txtRejbX85jh7UFFvtREdmzpwplUAmvBbCfqT8hzF8uPGiSeIoDatpnIMWnQVHGc3eTB544AF8/LExBQM9BGGzAifxYTse4f4M2Uzs0/qjjdd17NgxaW/kREN8kT8xhTdp0iSZhIk4Ot7eNM5Bi86Co4zmyOjVONW40UhuCO7LL7+UN9wwE3MsGmsHuY2io6fhHJrM7M4IQasz8xxk3759Mt3C2LFjJSxmn1LC7Rywan6viWmcgxadBUcZrTIzobBYTmI3MWbuadOm4brrrpOylAlrOh97zJiT0io6E2dVwtiHuDwXr43dvMzBqSzLsQcKr5vmKJ3KTOMctOgsOMpo1RkzLmfKYvU7h8IcOHBApvEzvUhiYqJkdDY+E/M4CoKhH70lu5eZ+5vUVIhWr0amT58ug23ZjmiybNkydOzYUcqfbJtjI39dhK5xDlp0FhxltJoYYSZ/+umny4bHUIyEXavM6nn7Y+iBvLy88NJLL8nIdM5AxhpFeiIK2eoVrcb1VnguHnPPPffIDNXDhg2Dh4eHbavxjgaGvOzUbOIo3epM4xy06Cw4ymg1NcJGcw6LMUWxePFiqeFkiGcfyhF6OI5lM6vuOc3djTfeiKFDh0qZ0V5chMfyOE4VyLa1Dz/8UNavXr1a0uJ0C+SWW24Rj8s5X8x/AMR6DbU1jXPQorPgKKPVxpi5aQzdGGayE/Fbb73lMG3CmcdY+fLVV1/JgFlO8nr99deXCYeio5eaPHmy1JSaXbboIdk1jWPgoqKiysTJCht2yKYoWTPJGlZOLsTr4T7211Bb0zgHLToLjjJaXY21lmw8Z/9MR9sJBcNXDLMcRqNAr7jiCunhQiiWJ554QmaZ5mS3/fr1k/WE0+QxnCVmevSyLVq0kDDSXGfvYetjGuegRWfBUUarj5k46tNIWNvZrl07+U44WJY1nyzfEYabzZo1w5gxY6RWlF3OKETCURBNmjQR72d6V3q1tWvXSphrrrM/b31M4xy06Cw4ymh/hFEMFAvfE8BGa4qMwnzzzTfRunVruRZTNH5+fjKolILiMdyP2yhQej82BTB0pHE9cUYo6cg0zkGLzoKjjPZHGctdHDzKsh9FR1GxOv+VV16Rsp4pOjayc96St99+W2pITe/FF52Y2Kf9R5nGOWjRaTQNjBadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA3M/07RpU1CQKNGaDQ8xraiHjgzrf/fqOrZxQyXyWsDJhnvRK8VtnTrdOz/A9RAdDEYzgdfwQLwhz6vCj92GiYF8JzD1ZXUgT9EdPW8pv9bqPTZGXmizqJpMNHZ8m7AJPWLlRMznL+dmYet+fvy39PY1zDjMThKs3b5oeaiKzuJeZF/YIbTovvfwR/y7BqSWoguIMDBPwJjG2dd+y+Lzv6iFeaPYzPrb3T5fwqF/X86+x+3bHmS7WbKrewYW3hjWoV8YdkWMHx4xbSJ3fU6/lEMq5CuYD7gcqvJNVWaZl2OsVLVc6hwn5YM4cRnV7bJtn54jC2/iPGclmXzOZf9vraD63CdNXo2DvIuMY61F91wDOfvat1Xzj8ckyb910VXybLtztPkAm03ZHtoxiZ1YUpEcoztIVcvOi47uCFuLzu/3Xa7tMp+HDNtu+u97NyVXXMFanlNVT2H2h5jparj7e9TpSfPu6pj7J5Fdc+uwm9tHmt3/fbLZddQlk4drrMmz0awpV2WjoFj0U1CjPV+zHOqkxj3aZ7PUZr2z75q6lamMx8QqfAAFLYHKg/OfPDW/Yl1H8ty2X4Vlqu/IeMhOvpBFPZp22+3T7+ya65A3a6p6jTrdoyVKp9DJdTr2Vl/xyp/w/Lly/atx3VW/2xqJ7o0B9fIUzgUnUOzXV811NrTGRdc/pDMC7I3Q1Bm5rRZ+UHlN2dZdvyDOc7g5nWUm7G94gOSFRXSvmy7osIPWtk1V6B211RVmnU5xkqNn4OF+j47e6uP6OpynSqBGj0blULtRGemq74bXs/Rc3GUpuP8UBm1Dy8r+SEqvW/BvKiKoUhdRWd/TuMh1i7jlG2v9IHZXXMFandN5VRMsy7HWKnVc7BRq2Nq81tX+RuWL9dUdFVdZzlV/UaktqIrP6+Y3TrjWv4bois7ge2i7R+uBV5sxYfm+EaNbZY07NK0f+AOH4K53eGx5cuXXa/dcuXXXJHaXFNladblGCtVHa82VrxPFZIxw9fmmGqfnZVqnqu5fJlXtN+vBtdZk2djYt6Duf9l5zPTNvO3uV2Z6RQcXkvDik5hi6nNizKXy81OXDYru0+FeSO0gEkxxkWbO9g/mMsehHmThvG92dYbrjJtYklPzLqtimuuQK2uqbI063KMlaqfQ4Xf5bJ/mo6PqfbZVfZbV/ab2S3Ls7LfVuvrrOFvZKPsn4dpFQ6wpXXZecuF/F8QnUajcSZadBpNA6NFp9E0MFp0Gk0Do0Wn0TQwWnQaTQOjRafRNDBadBpNA6NFp9E0KMD/Aa7WrzMcKf6wAAAAAElFTkSuQmCC'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
                
           
          }
        });

 }

 function mostrarEvolDep(dep){
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreDep(dep);
        //alert (dep);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosEvolDep.php',
            data: {dep:dep},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
             
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "DEP",data:"IDDEP"},
                  { title: "DEPARTAMENTO",data:"nomdep"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER ASIGNATURAS",data:"CACA",width:"5%" },
                ],
                columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          
                          return '<a onClick=mostrarAsiDep('+dep+','+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
                
           
          }
        });

 }

 function mostrarEvolArea(idarea){
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreArea(idarea);
               
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosEvolArea.php',
            data: {numarea:idarea},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "IDAREA",data:"idarea"},
                  { title: "&AacuteREA DE CONOCIMIENTO",data:"nomarea"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER ASIGNATURAS",data:"CACA",width:"5%" },
                  
                ],
                columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          
                          return '<a onClick=mostrarAsiArea('+idarea+','+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                           exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
                
           
          }
        });

 }


   function mostrarAsi(idtit){
   
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreTit(idtit);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosAsi.php',
            data: {idtit:idtit},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"ASI"},
                  { title: "ASIGNATURA",data:"nomasi"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER RESULTADOS",data:"ASI",width:"5%" },
                ],
                
               
                  columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolAsi('+data+') href=#>Ver</a>';
                          
                    },
                }],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
            //$('#tGrados').dataTable().yadcf([
             //     {column_number : 2}]);
           
          }
        });

   }

 function mostrarAsiTit(idtit,caca){
   
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreTit(idtit);
        
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosAsiTit.php',
            data: {idtit:idtit,caca:caca},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"ASI"},
                  { title: "ASIGNATURA",data:"nomasi"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER EVOLUCI&OacuteN",data:"ASI",width:"5%" },
                ],
                
               
                  columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolAsi('+data+') href=#>Ver</a>';
                          
                    },
                }],
                 dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'A4',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          orientation: 'landscape',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABzCAYAAAAc0geEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAClxSURBVHhe7Z0HeFVV9vYZZ3SsKEpvQijpjSIQEUSwoqLiWLA31L8ojDpjG2TsiFKsQ5WSAklIAgEiaaTQe6+hhB5qeiXwfvtd557k5HLTr5n/9337l2c99562T7n7zVq7nkbQaDQNihadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA2MFp2F7FWDkZt6B3KW90cubUV/pC0agKyUAchb3k+tU5Z6OzKX342inH24cAm4cOFCDa0UpRcvIXvLKGQnd1fn6CfnyVtxJ47EDMLZpLvUd56b5+iLrKQAFJxOgToFvv32WyQlJSEzMxNr165FaWmpccE2Ll68iEuXLjk4p3NN4xy06CzkJvVEXkJn5CZ2Vp9dkJfoirQwV2THu6rv5voOyFzmg+LsXTbRlVyWOR3bRSU6IGfDi8iLbYX8hE7KuqAoqSsOhLvh9O8eKEjsZDu/C7JiO6D4dJyIrn379oiKikJgYCDc3d3lWg8dOoQXXngB27ZtExHm5eXJef5I8WmcgxadhdzkPkpcXZC7TImMluSOtPmeyE5wR76sc0O+EkbOMn8luj219HQU3SXkbHwZufFtjPRVeoXJ7jgY4YkzS72RrwRorO+K7NhOKD2XjPPZRWjbri3S0tIwevRoPPTQQ3Kt06dPR6NGjeTzxx9/xNtvvy3rKUDznNbvzjCNc9Cis5CT0ltEl7fMXTJ/fpKHTXQeZaKjx8tSoivK3lkr0ZUoN3eBotvwCvLi2ilhuytzQ0GKVXS2c4joOqt4dzl27j6E5i1ayPU9+eSTGDFiRNn3Jk2a4PPPP8fAgQMxdepU8XJ33HEH1q9fL/sQR9dSV9M4By06CzkpvZQno7epRnRJfhVExzIVYaand6HZrxPRqe+m6AxxuVpE51VBdFlxnXAxMxnHT5zBTTfdhJEjR+L6669HTEwMcnNz0b17d1nXrVs3eHt7IycnBxEREbIvv+/YsQPvvfeenNvEXkS1NY1z0KKzUBvRFefskmNKSkqkguPEiRM4cuRIBTt27BjOnDmDwsJCKZtRhpeLzq1S0RVkxMo5FixciEGDBuGLL76Q5RkzZuDOO+9EbGyshJhmyBkQEIC///3v8n3cuHHo0aOHfOd+R48erXe4qXEOWnQWqhYdBadCQlaopHRDUdZOnMw4jYMHDuD48eM4f/488vPzUVRUhOLiYhQUFCArKwsZGRlS6ZGefgR5anvB5teU6Fimo7g8lOg8lOg8HIius4jO8Jfl0IPSi23atAm7d+8W7/fbb7+p9NNx9dVXY+/evbLf4MGDMXPmTMydO1fWb926VdYTpuFIVNWZxjlo0VmoTHQ5SnS56nuOEkRRcmccj/FH2rZlOHX6vMqMJXIsM7LVk9iHmFlZ2ThwKB0H4p5BQUJHFIi4XFGYTNF5VerpmIKZnn3m57qDBw+KwCdMmID7779f1rMms3fv3vjss89w8803IyUlRdZz3++//16+EzO9mprGOWjRWajK0+UmdUWhCgUPR3lgZ2hP5el2yDGOMqcju6iEx7/Dy17B7pBOyEnyREESK1LccCDCu1rRVWYm2dnZYiQ5ORl/+ctf0Lx5cyQmJso6hsEDBgwQr0cvSA9cW4+ncQ5adBYci85DRFeU7I7DC7yxP9wVucndUZKz26hIKSnPlJcuWYPBS7ho8U4l6nupyuSFm1/B8YUu2BXqo4TsKUI+UANPV53RmxIKic0LQ4YMwaJFi2Qdefrpp6X8t337drz00ktYvXq1bUvN/3FonIMWnYVy0RmhX26SF/Yr0bG97tQSL+wO81XhYFdks/YyZxdKpPaS4SUz/CXlaQpw5MhZ7D94CidOZEn4Ry5dKkVx6SVbk8GLKEpsh2OLmLYXLqS620Tno0TnJs0I9mU6RwKoyqxQhB988AHc3Nzw8ssvi5czoSg3b94s3x2lY28a56BFZ8FedBTbgXAPZMV7Yuc8b2QneihhdDJqL7N3q5DROO7Y8bNYsmQnpkxbg+8npGLMl/F496NF+PjzGEQs3qq8nJFhRXRsHI9rh6IUelFvnFYeLj2S4SXb6ayiq52nszezTMnvLOv5+vri9OnTWLdunVwLmxf+/Oc/o2vXrjh8+LB4Svs07E3jHLToLNiLLl+J7mCkJ9Ii/HAs2kdCQTYZZC/zQ4kSHVm//jBmTFuLuXO3Y9HifYiO3oM5Qdvx3fjVeGPUEtz+yFQMHTkbx8/kyP4561+SJgP2PslM8MTecD8civRxuuhMMytz2GXMbE5grSZDzSlTpkhTxOOPPy7rHR1vNY1z0KKzYBUdu4LlqzLXHhUC0sux/EUx5CV2Uh7PDyhKw/pNp/DrLysQt/QAdmw7hfSD57B71ymkJh1ASPB2fD12BV4duQit+/2EgJemIbfoAgq3vKo8XVsRNb3doQU+2BLkh/Ox3uJZnRFe2ptZ3mN74XfffYfGjRuLCF1cXNChQwcEBQXJduLoeNM0zkGLzoK96NiGtmmOtyp7+SiBUAyGpytI7YGThzZi4o/rED5/F7ZvzUB2VqGEdPl5xdi7+7QKN/fhx5/X4u//jMUdw0LQyPMLjP0tGdj3DnLjW0lahUmuOBPnhVXTvZEZ56tEx/TZz7OL0zydaabHY3ex5cuXi9fr27evNOKTffv2Sedp4uh4msY5aNFZqBheuoknWjXdC8cXeaEw2ahZzFeiK1nTC1GhC/DVt+uUuNKwP+2cypQcXsPMXYqjR7IQF3cAv07egPc/isddzwXjLwET4Dv0J2QsfwbFSbcqUdtqSJM9sGKarwovfVEgHZ7ZEO+88NLeyMmTJ6W7mNmQnpCQgGbNmklDu+n1KjtWU3+06CzkpfaWjM/2s/xkN5SkeGH9TG+cj/NGkRId1xclq/AyuSe++nw6vvpuAxYs2KM83UnkZNPTXVKerqjM0/3wyzrxdP2HBeHqfhPRqv84JM0aDKxxQW6qEjHPsdINa2f7IiPWC0VqXb7yqPkpXVUI64LCswlSL8o60NoaxWpaaelFlCjRlNKUN2Zj+s6dO6UXy9mzZ2X0AvtwhoSESKWL2V9Ui+6PQYvOQkZsL5xc4orTS9xwMsYNp35neKk83WIvnIpxVeaGs0u74EBUL7wzago+/mIVZs3ejGUJ+7Fz+0mkHzqPPbtOIzX5EIJZphuXgtdHRsP7sem4su8EtB8wAfPGP4OLqR6qXOelzAcFib7YN7c7Ti3qjny1nBtrWFaMOwoO/46SomIU5+WXWYn5PdeByfYC9VmAErVMK+JnUYESTSlKSwwhmU0Z7777Lh599FH88ssv4uVY5qMgTbTo/hi06CwcWtwL6ZFuSI9iBYcH0pWtmemDA5FeOBzlLuuPL3TFttA+eOq1H/Dme4kYN34lZs/ZhuiFexC7NA2LFu9BYPBWjP9hDf7xUSyGvByOZoN+xnX9v0O3IZPw9aDHEdvTHYt6eZVZVE8fLLrNG0uUcXlhb7X+Ni8s6DsIUf0exoI7HsKCfrU0HqNsnt9d2BUcLvdnFRC9GcNMPz8/3HDDDfjwww9lH8K+nStWrChrcjBN4xy06Czkrxqowkd29/JQZTg3FC93x8EoH+QsM3qOcBhOcWoXFYb6Y+gro3HfcxEY+cFSfP51Kib+sBo//7oek35aiy/HpuK9j+Lw1OuR6DpEebnbv0fHe8dj0NAJmOQ5GBHNvTGvVTfDWnZDaCt/ZfxUppbDW/SQ7/NaeCO0mSdCm5vmoZbdEXJ9R4Q2dStfV4XNuqottv08Xe6vpLTiKHfCTtm7dhkjJthxm4Nhr7nmGhkWRKxhpsY5aNFZyFo/DHnxHY0KjkTbqO5IT5z+3VPa7KQiRW3DGjd88MGLuKn/FNzzwly89NZCvP1+DN5VAhylPl97OxoPvRQGt4emSVjZfOD3uO3RSXjqodEI6hyAqLb+mH9rNzvrfvlye+uysvb+CGnji+j7nkB4l16Y385ROhUt6MbO2P6f2XJ/VsFZhcRREQw1OSiWNZrsr8kxeRyaZG001zgHLToLubtGIyeuvQiOwqPojkWr0DLa8HTsk8mmhAvLu2BH5ADc2H8Mru47Ga5DpqLXk3Nw59OBuF19eijvdtOgn/Dn28ejxcDxuO3hCbj7ie/w6e3DlOB8EX5r9WJxZEE3u2LlP75ASXE+5vd9CGEtPB3uZzWr6EpUuc4qOBpFRQ/HvpoLFiyQ/QjH4HGgLENMM8zUOActOgsFx0KRGdtORCeN48oy4z2wN9wL+cnKZD09Xlfl7bpi9oSncFXvb9Ao4AdcdccEJcAJ+Osd49X3cWh85zh0um88AoZMwKC/fY/X738bIS69ENHeWxlFZ+/ZqrF2fghq5YWTGzfJta799zgE3dTZ8b40OUf1oqOZbXiE4wFnzZoltZnstbJkyRJZz/00zkGLzkJJThoyE1UomdgFOdLjvyuKVDkuLdwbGSrELJAQ02hfy0vqAqzywuyJT8Lvvq/Rqv8PaDfwB7jcOwGeD05E7yET0f/xCXjgibF46943MYdhpRKOIYo6eDp1bHBrb5xYZfSdXDfmWyWoTpftF95BmQo7g5q5qTKhpwizOtHRCLuFtW3bVnqpcNwdK1e+/PJL2Wbuo6k/WnQWSksvIGvtE8iNZzcto4GcbXPnYr2wZ563NGTLCHIRHrdReG7YHn43PvtgOP729Gjc+8jnGPzYV3ji0TF49YF3MLbno5jXoTsWtvG+TCC1sQglujlKdBkbtsqQoZghz2NeU7ey7eG2zzCGr137IC0qGvFPD8esq9rXSHQMM+nhOBUEv5vQC5qVKRrnoEVngUFW/uFgnGeIaRFXYYqrdEpOj/JGYWr5eqlwUd7wworOwApPnFraGzvn34PZ9w3ElI79ENqhB6JUSBh6UxfMVQKJUOKzCqQ2xvJb1O2DUZSbg7MH0hHM9Upg9vvNa+aOqEFD5X52zgrBlEZNsaMGoqMRttNx6gl+mu15xNyuqT9adBY49Ka4OBPnlz+AvHhjmjyKi8JimW53mI+MgzMqVQzxcZ/8RIairiha7gKs9ETSIE+ENfVBZGs/zHPpjoRXRmLp315BUJMuiFDCCLMTSk1s7s1dEffsG3KdJ7fsQGAHJbi2ZriqPKGtpjPwpk5Y8+lY2W/7tEBMbdRMiW6WLNdEdKNGjZIR566urrjrrrtktDlnHbN6P0390KKzwK5S4u2ORSBr6a1KSJwD06g8KRCBeWFXqBeOLFQeT5X18pJd1ToKzqjVzEvmjM2+WDrIH/Oa+2F2Yxdsm2bL8Ll5iB78NEJEeLWsRFFG0S19arikdXzNegS28ZJynrmd3pMW1LgjNk/4RfbbFRiKaY2a19jT0bOdO3cOYWFhuPfeezFmzBipTGEtJrdrnIMWnQV2lbpQegkXL5UiZ/NI5C1tKXOjcLgNjZMJ5apy3f5IT+wN80NmvKd0ii6QShd2XnZFQbIPYu/2RfD17ojo/zCKc3NtqQO5J08hvOc9CGtZfVW/aaZXnKvESo9JTm7cjOB2l3s61orOUaLbYmsM36o+pyrR1aRMZxrZv3+/tNnRvv76a+keZg01NfVDi85CyYUS8Xac+6SkMAOZK+5FtlSqsPe/ElYiQ012enbHqRhP7FFeLy3SCyd+90R2ovKG7MWS6ouEgT6YcV1X7A1fKOkueeNdHFuxRr4vf/9fCLyxU63LdfSQsS8bU6cfSV0pzQcVPZ0/wtv7IfAWd+ydb8yNEvfcCMy4okWtPB155JFHcN9998kUfybcrnEOWnQWjMzHjFkiYWZx1g5kJfWVdw/kLvNQpkJKVX7jJ+dK4SDXkzFeOBjpjn3hntgX6Y1DUT5Ycoc3Zt3ihaz9h5GnvNvMpio0HGaUx3b8FoQ5TVjVX7MQM6K9sV/ITZ2RMuKfksbR5asR1NrbIjruo0TXxgfzXPsg59gJmX0s6s4hmHVVmxqLjkbhsbHcCruKaZyHFp0Fa+ZjBuX//eLMbchMvQs5sW2kQqVMfMrj0fsVMKSUihUPZKn12Ql+WBKgym19hypvWYSt0wIx68o2iOo/RM5xKHk55jR3Q0S7ywVmb4Y3VIJSoWPwjZ2R+t6nRhoxCZjTzL2sAdwwfwlbw3rdIyMOSgoKENZzEGZd065W4SUrTDg/5qefGud64403ZKwd59XUOActOgsVMyBDzRIRXkleOjLXvYzspW2Ql2D0zTREZ9RgMuxkCJqf3AXFKd5Y0L0tNk2YJmku/+enCLzuVoR59EVexikU5+chos/9CGuhwsMywTg2s3Jk/q0qbGzcCVt+nCppbp8ZLCEqa0LL9/fHvFvcsPDBYbLP6W07pH0w8PoOtS7TcZYwTuXAEeZ/+tOfMH78ePz1r3+VbZr6o0VnwZr5ZNBnifpUVqrKeBcuFiHvwGTlzW5DztLWIr6y9xvIpyr3JbmicJkSXX9XpC1KkjST3/4Hgm/oJO1qZ3bskXVLBj+DUCWQCuU6hpFS7d/dJjbDi0lTQHtfzLmlK9IW/C7Hxz73FkLUcrnguA9D0C5YpsqPZMP3v2D2DS5KnJ1rFV7S03Fgq7+/vwiN4+3YNez555+XNDT1R4vOgqNMSJNQUzkBtlQV5e1H9p6vVcjZF1mxtyKb7yWId0F+QmdVxnNB3pKOSBn5N9k/69hxRA54RIbjBLb2wfG1G+U8bLObe7OrhIdhHfylt0lwky6Yc6OL8oDeZR6srD2P29t4IWPdFjk+dthwhDRRx5vbKVAlOjZRbP5hsuyz7t/fS3qBNewGZjXCF6LEx8dXGNSqcQ5adBYcZUAa5z3hVAfFpSrcVMqj+EoKTiD/2Hzkbn0fWSsfRlbSbchO9MT56I7YGWL0V1w//lfMuvpWoyq/tSeOrTb6TcY+9yZCbu6qxOWH0HY+CGzqhtT3P8X6sT8g/LZBCFaCZFsejxNv2NYfQWq/kxuMiWEThv2POr6LRXTKM7bzR2BzDxyONzzshq8mYrYKQWvS4dmRmbAbGHuoaJyHFp0F6zAW1uKZvTBKlegkzCwxB4GWQq0qm4+kpCQPJbkHcSFzE05vj8T5w7tReC4Lkb3uQ5gSQnjbbko0vji5ebukFz/sdRHdfLUuqKU3tv0WLOtJXkYGljz6MkKUECPbMdTsgfA2ytN17IbTu/dJrSTH04U28ygXHD/b+CJEleHOqH0uFBdj0UPPykBXhpfbJtdedGafS76Gq2nTptJ2p3EOWnQW+LJFEw7sPHXqlGS2n3/+GYWqXMNMyAqWiqbWKeVdsI2O2RoVh8NrNuPs5h2Yw/6WHGja1g9BHZRodhizb8U8/CzmNXVHsAr/ljzygqzLVeWogizjBSDn9uxDsIsq4ymxSftbSy9E+A1AfmaWeNno/g8htLldRUxbX1Vu9Fei24vCrCyEuAdgfitvzKlDeEkzRcf34F155ZXYs8coj2rqjxadBc6QxfkgOazl22+/lWryzp07yxwifPcccZRBTSMrx06SMHLLT9Okr2W5IPxwautO2Sf28RcRfENHBCpRZWzdgfxz5xDa5wEkvPEP2Z6bcQqh7ncgXIkmvIOf8pbuiBowBBeUpz2hvCU9GgVZQXRtfBDS6Tac239Qjp/r1hthbbxrXZFimgnfBMTp2DXOQ4vOAidenThxotTecU7IBx98UOYL4azIfNWU4ekcZ1KGornHTiLQfwCOr1iNxQ8OkwoUqYlUod9clx7IOnoUxXm5mN9jEGZd1wE7g4wJgxY/+jxmX9kS4d0HSpMC00od9bGINrK98pJKOMv/MVr23R+1BLPVerODs2k818KBj8k+2ceOI9SDns6rThUpPH9oaKh4esI5VKxRgKZ+aNFZYIYjfLkGe9rzXd4bNmyQdZUJjs0K/CSnNm7BLOWZto7/D0LdAlRZTnmj9t0xt5kbYoY8pzyVClk3bsWMG1wQO+w1OWbt2B8w59oOxni55m7Yv2iprN85i21xylMqcbGNbp3aj+yaNQ9BajlS7c9jwmnKy81Vwvx9qBGqHk5ZiaBm7LGiyow3dlKebo6sly5utuutzHifhE0GvH82F/BNr+YIck390aKzg3NAsmf9wIED5Y2mVhxlUrFSo0C36pNvENLCE2G+AxDOblrS5tZdZXwXrLD1JklfugzTlFfbFxEty/N7DkJYMy/xiIHXd8S6bybK+oOLl6oyYVejPKjCy8MJxttUV48Ziyl/aqbWeSCwhTJ1nrlde2GGOseqz40hPRsm/KqE3BFRysMGN3bB9immpzPaHx3eg80IPT4bxNkHkxMVcdZn85+Ppv5o0VlgpmM/wy1btiA8PBw//fSTjKReuXKlhFeOvJ00oovm2NfxYYT73YXoQY8htCUrOowqf4oueeTHco6dM4Lxm0s3lBYV41B8IoKVcOa3VSGi8ogcCb5o8FO4oLadXLsJQW2UGFt6Kq/ZB1lHjsqI8YQPPsO2qb/hcOoapC9LwfHV63FuXxqOr9+EvDNG1X7qJ19gdnsfGYkw5YpW2DYlUNYTvpjS/h6sRtjR+ZNPPpH75YzPrEjJzMyUbZr6o0VngWWZjRs3Sk0dy3R82QYHcdLzPfzww7LP5cIz3jl+csMmzLylC1Z89AXinx2Bebe4i+gopqDGnbH5R6Nb2O8jPsAOVZbjq5Aj+j2ohMaqf3+jjKbCxCCXnsg+ehxFWTmY630Hwpq6ItSnH3IyTknNpa2S1CFMs8T20ry8M2eRsXkb0pbEY824H7Hms3HYE74AJQX5yjNXXbbjPbI8x+8c1sN+mGZFkqb+aNHZwV4YFNlVV10l7VM9e/aUN5i+/vrrUpNHYVbIpHRzKqPHvfA/mN64I85s3orYZ99C6C2u4uVYyxjasQey9u5T+17A9qjFcp713/4sZbZIS6dlKZu59kLWoXRpj4tje9417RFx+wMoUOc23luuwsTCIuxT6bDj8/bpwVj173E4mJCstl9U3vAijm/YjKzDR+U8ZM2n3+CnRlfgx0aNsTc6RtbxhSd8WWWFe1HGpgJHcJvGOWjR2cFmgy+++ELe220t0/E7u0SZjeemsdqhMPM8Qj1uR4hHHxScPYeYJ15Tno7dvIyayxCXHji7a68IhvAzcuCj5cI0TQmQvUqOLFsp+60d/TWmNboFa778XpZ5XHb6YcS9MhIzVfkvUB0f2KSTzIOydepM2Sc9bhmm3twZ87r0wuL7nkTciyNUOXECUkb9Cwmv/h2ntmwv+8dhX76jh2P75IgRI2TkON/QSsx71jgHLToLzFisrbP+t7d+Z2a1Fx1hjeOMq9pgxaiPZHnxIy9irim6Vt4I9e6H7JMZZaHhwaXxmMtJhcomFrJ5OyW64BaeOJpqvIQ//uV3MP2adkiPNypRMrZuQ2DnXghWQuPQoHC1fwQrS1Q6GRQTj3nhTYSocHZ+a18VmrpjRqPm2D7VqL0k3Md6/VYjCxculHeUP/vss/Kug+joaAk1ee8a56BFZ4EZj//t7TMYZz4+c+aM1OQxUxLzDThk7Udf49dGTSTkI0uGPI+5TbtKzeX8Vr6Y59ob2YcMr3F+/37MdQswuod1MDyctOUpY++V2a08yzpG/z70RYR0uQ15587J8pqvvjeaFyhmqaTxB991sODOISguKpbuX5F9B4PvODC9p/S9nGxrMlChpykwR7WYhPOj8D0Gc+bMkVdpsRsY503RonMeWnQWmPEoOoaSq1atknFlHNpy7bXXIjIyUoxhJ2sASy4Usygnr6ZiRg/zvxMF541uWhTdPA69ad9DhBfa1hvRg4Ziyy9TEX3vkwiRDs2GKEyjkOa29EREn3tViGrUQnLeyvk97lFiMiprUt4frbxYJ/GgxnHdEXRDR6z55BvZXpRfiMh+D4ugzXSr6/BsenLTi/MdBpwFjL1w+OJI9s4h3FfjHLToLDBjUXTMfKw8YUXKa6+9Jq+NYmY0YXesErUf2ThxMn5pdHPZAFNm4XLRcaQAMz9nB3PHHCWAeS3cRXBW0ZlDeOY16Yrf//aypMNJjOa5ByAiYDAuKXWXqLA35hGOwzOG9FDMERx90MJDhavGyIK8M6cRqUQaJs0V1YvOFNn8+fNluxU2k/C+ibm/xjlo0VmwZi5muk2bjPcGWGFbGUMzRlv7wqOlLYzdso6kGBMPsYbRFJ0pOHNganlYqMJOmyhEQGo9y2iBN3fBlskzJJ0Tq9di6lUtyxrVWf3PGZ7Zy4SeLlIZRxosGPS41IqSnXNCRdjWtKsSHVm3bp148v79+8t3e/hPyLq/pv5o0Vmwz5BWkpKSEBgYKNtUqU/Csd+fexP/aXS98kb3oViFdvRyXM+RA+Lp7MRVmUmZTnmt4LY+yNyfJudb9cmXmKm8WuYeY/ngklgE2c2LEqQ8Y/xwY6Q42Tb5NwQ2drGEn2aZzrHoKChWkrAHSkBAgDSV0LOz76nsXzaUyfEz0dQNLToLlWWwpUuXonHjxnjxxRcRpITH8XUXVchXeP481nzzAw7GLZOyXMklVsKo8PLh5xHKQabM/BRJNRbR3uhHObe5F1JHfoItP01HYJPO8kbVkoJCuYakER9Il67yY/wRclMnpLxpjEw4u2sfIrvdbbw+y3Je9tOsqkxHOHyJ81umpqbKUJ6WLVtKNzCKUns656NFZ8HMXCzrcBo6ViIMHjwYvXv3xrhx46Sdrp8KwzIyMkRcF0VqZjV8MS6o4xheRt77JGZe0048U6Aqy1Vnc5QFNXNV3z3w27XtMe2vbTHtzy2w/L0xRvoq3ai7h2LmtbdWPLZpV8xo7oalL76NEP8B6py3Yo4q4/GNPTw3bdqVrZWIjZC1MtElJyfLSyFNWHnEiiR6bft9NfVHi86CNXNRZKNGjZJhPaw2Z1NBjx49ZJYsegRizZC0UpWp2cvjyPoNOBSXhPTEVBymJdg+rcZ1FuO+sn9CsrIUHE5egY2TpmLx/c9i+YdfytR96QkrKhybvszYf1/UEhyMSSjfxk/b94Oxy3Au/VBZWdQYeFt+zRQWe9p4enpK7xt2e/vXv/7l8P40zkGLzoI1c/FNpOxdT+6++27p/Ezvx9o+c5wZsWZK6fysykHOIvaZNzG50dWIf3WUbU3dMDyx4eXM9jl7OBERu7o988wzOHr0qHh76705OkZTN7ToLJiZi+UYegC+JJG97du3b49//tOYXdmE4RcrV6xlHsMMj8KJjMzl2pk6VqV/etceBLXxRkh7X2Rs3lpBOLU1c8wfjddGDh06hG+++UYqURxhPd40jXPQorNgzWD8T0/hsRsUG8nNSgXCnvcMNfv06SPLpPxYVbZTIRxFZ3qV2hgnuCVp0UvxS6PGiHvKGOzKF1ZW7KBsnaelYshYcR/jn4i5jvdFOC0F37jaqlUrbNu2TdbZ11bam8Y5aNFZsM9kpsgIMyuN84WwYoWCY6jJaQ02b97sMByrq10svYTCzCzEj/hQupbRy5UqAdVFxCb8bv7jePLJJ/HOO+/I+vfff1+mpODkS9VNSaFxDlp0FhxlNKuR2bNnS3sW2bFjhwzwZAhKqsqwNTWZVVqFkeVy53UxZKX3rNoT2Rs99Zo1azB6tDG/CmF59NVXXxWhmWVWhtEcGW5fW2lvGuegRWfBUUazGr0ZO/+ydo8v1mD/xM8++0yONcM2E+txtRejbX85jh7UFFvtREdmzpwplUAmvBbCfqT8hzF8uPGiSeIoDatpnIMWnQVHGc3eTB544AF8/LExBQM9BGGzAifxYTse4f4M2Uzs0/qjjdd17NgxaW/kREN8kT8xhTdp0iSZhIk4Ot7eNM5Bi86Co4zmyOjVONW40UhuCO7LL7+UN9wwE3MsGmsHuY2io6fhHJrM7M4IQasz8xxk3759Mt3C2LFjJSxmn1LC7Rywan6viWmcgxadBUcZrTIzobBYTmI3MWbuadOm4brrrpOylAlrOh97zJiT0io6E2dVwtiHuDwXr43dvMzBqSzLsQcKr5vmKJ3KTOMctOgsOMpo1RkzLmfKYvU7h8IcOHBApvEzvUhiYqJkdDY+E/M4CoKhH70lu5eZ+5vUVIhWr0amT58ug23ZjmiybNkydOzYUcqfbJtjI39dhK5xDlp0FhxltJoYYSZ/+umny4bHUIyEXavM6nn7Y+iBvLy88NJLL8nIdM5AxhpFeiIK2eoVrcb1VnguHnPPPffIDNXDhg2Dh4eHbavxjgaGvOzUbOIo3epM4xy06Cw4ymg1NcJGcw6LMUWxePFiqeFkiGcfyhF6OI5lM6vuOc3djTfeiKFDh0qZ0V5chMfyOE4VyLa1Dz/8UNavXr1a0uJ0C+SWW24Rj8s5X8x/AMR6DbU1jXPQorPgKKPVxpi5aQzdGGayE/Fbb73lMG3CmcdY+fLVV1/JgFlO8nr99deXCYeio5eaPHmy1JSaXbboIdk1jWPgoqKiysTJCht2yKYoWTPJGlZOLsTr4T7211Bb0zgHLToLjjJaXY21lmw8Z/9MR9sJBcNXDLMcRqNAr7jiCunhQiiWJ554QmaZ5mS3/fr1k/WE0+QxnCVmevSyLVq0kDDSXGfvYetjGuegRWfBUUarj5k46tNIWNvZrl07+U44WJY1nyzfEYabzZo1w5gxY6RWlF3OKETCURBNmjQR72d6V3q1tWvXSphrrrM/b31M4xy06Cw4ymh/hFEMFAvfE8BGa4qMwnzzzTfRunVruRZTNH5+fjKolILiMdyP2yhQej82BTB0pHE9cUYo6cg0zkGLzoKjjPZHGctdHDzKsh9FR1GxOv+VV16Rsp4pOjayc96St99+W2pITe/FF52Y2Kf9R5nGOWjRaTQNjBadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA3M/07RpU1CQKNGaDQ8xraiHjgzrf/fqOrZxQyXyWsDJhnvRK8VtnTrdOz/A9RAdDEYzgdfwQLwhz6vCj92GiYF8JzD1ZXUgT9EdPW8pv9bqPTZGXmizqJpMNHZ8m7AJPWLlRMznL+dmYet+fvy39PY1zDjMThKs3b5oeaiKzuJeZF/YIbTovvfwR/y7BqSWoguIMDBPwJjG2dd+y+Lzv6iFeaPYzPrb3T5fwqF/X86+x+3bHmS7WbKrewYW3hjWoV8YdkWMHx4xbSJ3fU6/lEMq5CuYD7gcqvJNVWaZl2OsVLVc6hwn5YM4cRnV7bJtn54jC2/iPGclmXzOZf9vraD63CdNXo2DvIuMY61F91wDOfvat1Xzj8ckyb910VXybLtztPkAm03ZHtoxiZ1YUpEcoztIVcvOi47uCFuLzu/3Xa7tMp+HDNtu+u97NyVXXMFanlNVT2H2h5jparj7e9TpSfPu6pj7J5Fdc+uwm9tHmt3/fbLZddQlk4drrMmz0awpV2WjoFj0U1CjPV+zHOqkxj3aZ7PUZr2z75q6lamMx8QqfAAFLYHKg/OfPDW/Yl1H8ty2X4Vlqu/IeMhOvpBFPZp22+3T7+ya65A3a6p6jTrdoyVKp9DJdTr2Vl/xyp/w/Lly/atx3VW/2xqJ7o0B9fIUzgUnUOzXV811NrTGRdc/pDMC7I3Q1Bm5rRZ+UHlN2dZdvyDOc7g5nWUm7G94gOSFRXSvmy7osIPWtk1V6B211RVmnU5xkqNn4OF+j47e6uP6OpynSqBGj0blULtRGemq74bXs/Rc3GUpuP8UBm1Dy8r+SEqvW/BvKiKoUhdRWd/TuMh1i7jlG2v9IHZXXMFandN5VRMsy7HWKnVc7BRq2Nq81tX+RuWL9dUdFVdZzlV/UaktqIrP6+Y3TrjWv4bois7ge2i7R+uBV5sxYfm+EaNbZY07NK0f+AOH4K53eGx5cuXXa/dcuXXXJHaXFNladblGCtVHa82VrxPFZIxw9fmmGqfnZVqnqu5fJlXtN+vBtdZk2djYt6Duf9l5zPTNvO3uV2Z6RQcXkvDik5hi6nNizKXy81OXDYru0+FeSO0gEkxxkWbO9g/mMsehHmThvG92dYbrjJtYklPzLqtimuuQK2uqbI063KMlaqfQ4Xf5bJ/mo6PqfbZVfZbV/ab2S3Ls7LfVuvrrOFvZKPsn4dpFQ6wpXXZecuF/F8QnUajcSZadBpNA6NFp9E0MFp0Gk0Do0Wn0TQwWnQaTQOjRafRNDBadBpNA6NFp9E0KMD/Aa7WrzMcKf6wAAAAAElFTkSuQmCC'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
            //$('#tGrados').dataTable().yadcf([
            //      {column_number : 2}]);
           
          }
        });

   }


 function mostrarAsiDep(dep,caca){
   
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreDep(dep);
        
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosAsiDep.php',
            data: {dep:dep,caca:caca},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"ASI"},
                  { title: "ASIGNATURA",data:"nomasi"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER EVOLUCI&OacuteN",data:"ASI",width:"5%" },
                ],
                
               
                  columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolAsi('+data+') href=#>Ver</a>';
                          
                    },
                }],
                 dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          orientation: 'landscape',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
            //$('#tGrados').dataTable().yadcf([
            //      {column_number : 2}]);
           
          }
        });

   }


function mostrarAsi55(caca){
   
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        
        
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/obtenerAsi55.php',
            data: {caca:caca},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"ASI"},
                  { title: "ASIGNATURA",data:"nomasi"},
                  { title: "T&IacuteTULO",data:"nomtit"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER EVOLUCI&OacuteN",data:"ASI",width:"5%" },
                ],
                
               
                  columnDefs: [ {
                    "targets": 8,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolAsi('+data+') href=#>Ver</a>';
                          
                    },
                }],
                 dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
            //$('#tGrados').dataTable().yadcf([
            //      {column_number : 2}]);
           
          }
        });

   }





function mostrarAsiArea(idarea,caca){
   
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreArea(idarea);
       
        
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/datosAsiArea.php',
            data: {numarea:idarea,caca:caca},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "ASI",data:"ASI"},
                  { title: "ASIGNATURA",data:"nomasi"},
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                  { title: "VER EVOLUCI&OacuteN",data:"ASI",width:"5%" },
                ],
                
               
                  columnDefs: [ {
                    "targets": 7,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolAsi('+data+') href=#>Ver</a>';
                          
                    },
                }],
                 dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                           exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          orientation:'landscape',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
            //$('#tGrados').dataTable().yadcf([
            //      {column_number : 2}]);
           
          }
        });

   }


function mostrarAreas(iddep){
   
        $("#boxUMH").hide();
        $("#boxCentro").hide();
        $("#boxGrados").show();
        nombreDep(iddep);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tGrados')){
          $("#tGrados").dataTable().fnDestroy();
          $('#tGrados').empty(); 
        }  
        $.ajax({
            url: '/lib/listadoAreas.php',
            data: {iddep:iddep},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespA) {
              // tabla uno
            
             $('#tGrados').DataTable( {
                data: jsonRespA,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "AREA",data:"AREA"},
                  { title: "NOMBRE",data:"AREA_DE_CONOCIMIENTO"},
                  { title: "VER RESULTADOS",data:"AREA",width:"5%" },
                ],
                columnDefs: [ {
                    "targets": 3,
                    "data": "download_link","render": function ( data, type, full, meta ) {
                          return '<a onClick=mostrarEvolArea('+data+') href=#>Ver</a>';
                          
                    }
                }],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6 ]
                          },
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
                         
             }); // fin d
            /*$('#tGrados').dataTable().yadcf([
                  {column_number : 2}]);*/
                 
           
          }
        });

   }



   function mostrarCentro(id) {
        $("#boxUMH").hide();
        $("#boxCentro").show();
        $("#boxGrados").hide();
        $("#titCentro").text(id);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tCentro')){
          $("#tCentro").dataTable().fnDestroy();
          $('#tCentro').empty(); 
        }  
        $.ajax({
            url: '/lib/datosCentro.php',
            data: {nomcencorto:id},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespC) {
              // tabla uno
            
             $('#tCentro').DataTable( {
                data: jsonRespC,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                ],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABzCAYAAAAc0geEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAClxSURBVHhe7Z0HeFVV9vYZZ3SsKEpvQijpjSIQEUSwoqLiWLA31L8ojDpjG2TsiFKsQ5WSAklIAgEiaaTQe6+hhB5qeiXwfvtd557k5HLTr5n/9337l2c99562T7n7zVq7nkbQaDQNihadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA2MFp2F7FWDkZt6B3KW90cubUV/pC0agKyUAchb3k+tU5Z6OzKX342inH24cAm4cOFCDa0UpRcvIXvLKGQnd1fn6CfnyVtxJ47EDMLZpLvUd56b5+iLrKQAFJxOgToFvv32WyQlJSEzMxNr165FaWmpccE2Ll68iEuXLjk4p3NN4xy06CzkJvVEXkJn5CZ2Vp9dkJfoirQwV2THu6rv5voOyFzmg+LsXTbRlVyWOR3bRSU6IGfDi8iLbYX8hE7KuqAoqSsOhLvh9O8eKEjsZDu/C7JiO6D4dJyIrn379oiKikJgYCDc3d3lWg8dOoQXXngB27ZtExHm5eXJef5I8WmcgxadhdzkPkpcXZC7TImMluSOtPmeyE5wR76sc0O+EkbOMn8luj219HQU3SXkbHwZufFtjPRVeoXJ7jgY4YkzS72RrwRorO+K7NhOKD2XjPPZRWjbri3S0tIwevRoPPTQQ3Kt06dPR6NGjeTzxx9/xNtvvy3rKUDznNbvzjCNc9Cis5CT0ltEl7fMXTJ/fpKHTXQeZaKjx8tSoivK3lkr0ZUoN3eBotvwCvLi2ilhuytzQ0GKVXS2c4joOqt4dzl27j6E5i1ayPU9+eSTGDFiRNn3Jk2a4PPPP8fAgQMxdepU8XJ33HEH1q9fL/sQR9dSV9M4By06CzkpvZQno7epRnRJfhVExzIVYaand6HZrxPRqe+m6AxxuVpE51VBdFlxnXAxMxnHT5zBTTfdhJEjR+L6669HTEwMcnNz0b17d1nXrVs3eHt7IycnBxEREbIvv+/YsQPvvfeenNvEXkS1NY1z0KKzUBvRFefskmNKSkqkguPEiRM4cuRIBTt27BjOnDmDwsJCKZtRhpeLzq1S0RVkxMo5FixciEGDBuGLL76Q5RkzZuDOO+9EbGyshJhmyBkQEIC///3v8n3cuHHo0aOHfOd+R48erXe4qXEOWnQWqhYdBadCQlaopHRDUdZOnMw4jYMHDuD48eM4f/488vPzUVRUhOLiYhQUFCArKwsZGRlS6ZGefgR5anvB5teU6Fimo7g8lOg8lOg8HIius4jO8Jfl0IPSi23atAm7d+8W7/fbb7+p9NNx9dVXY+/evbLf4MGDMXPmTMydO1fWb926VdYTpuFIVNWZxjlo0VmoTHQ5SnS56nuOEkRRcmccj/FH2rZlOHX6vMqMJXIsM7LVk9iHmFlZ2ThwKB0H4p5BQUJHFIi4XFGYTNF5VerpmIKZnn3m57qDBw+KwCdMmID7779f1rMms3fv3vjss89w8803IyUlRdZz3++//16+EzO9mprGOWjRWajK0+UmdUWhCgUPR3lgZ2hP5el2yDGOMqcju6iEx7/Dy17B7pBOyEnyREESK1LccCDCu1rRVWYm2dnZYiQ5ORl/+ctf0Lx5cyQmJso6hsEDBgwQr0cvSA9cW4+ncQ5adBYci85DRFeU7I7DC7yxP9wVucndUZKz26hIKSnPlJcuWYPBS7ho8U4l6nupyuSFm1/B8YUu2BXqo4TsKUI+UANPV53RmxIKic0LQ4YMwaJFi2Qdefrpp6X8t337drz00ktYvXq1bUvN/3FonIMWnYVy0RmhX26SF/Yr0bG97tQSL+wO81XhYFdks/YyZxdKpPaS4SUz/CXlaQpw5MhZ7D94CidOZEn4Ry5dKkVx6SVbk8GLKEpsh2OLmLYXLqS620Tno0TnJs0I9mU6RwKoyqxQhB988AHc3Nzw8ssvi5czoSg3b94s3x2lY28a56BFZ8FedBTbgXAPZMV7Yuc8b2QneihhdDJqL7N3q5DROO7Y8bNYsmQnpkxbg+8npGLMl/F496NF+PjzGEQs3qq8nJFhRXRsHI9rh6IUelFvnFYeLj2S4SXb6ayiq52nszezTMnvLOv5+vri9OnTWLdunVwLmxf+/Oc/o2vXrjh8+LB4Svs07E3jHLToLNiLLl+J7mCkJ9Ii/HAs2kdCQTYZZC/zQ4kSHVm//jBmTFuLuXO3Y9HifYiO3oM5Qdvx3fjVeGPUEtz+yFQMHTkbx8/kyP4561+SJgP2PslM8MTecD8civRxuuhMMytz2GXMbE5grSZDzSlTpkhTxOOPPy7rHR1vNY1z0KKzYBUdu4LlqzLXHhUC0sux/EUx5CV2Uh7PDyhKw/pNp/DrLysQt/QAdmw7hfSD57B71ymkJh1ASPB2fD12BV4duQit+/2EgJemIbfoAgq3vKo8XVsRNb3doQU+2BLkh/Ox3uJZnRFe2ptZ3mN74XfffYfGjRuLCF1cXNChQwcEBQXJduLoeNM0zkGLzoK96NiGtmmOtyp7+SiBUAyGpytI7YGThzZi4o/rED5/F7ZvzUB2VqGEdPl5xdi7+7QKN/fhx5/X4u//jMUdw0LQyPMLjP0tGdj3DnLjW0lahUmuOBPnhVXTvZEZ56tEx/TZz7OL0zydaabHY3ex5cuXi9fr27evNOKTffv2Sedp4uh4msY5aNFZqBheuoknWjXdC8cXeaEw2ahZzFeiK1nTC1GhC/DVt+uUuNKwP+2cypQcXsPMXYqjR7IQF3cAv07egPc/isddzwXjLwET4Dv0J2QsfwbFSbcqUdtqSJM9sGKarwovfVEgHZ7ZEO+88NLeyMmTJ6W7mNmQnpCQgGbNmklDu+n1KjtWU3+06CzkpfaWjM/2s/xkN5SkeGH9TG+cj/NGkRId1xclq/AyuSe++nw6vvpuAxYs2KM83UnkZNPTXVKerqjM0/3wyzrxdP2HBeHqfhPRqv84JM0aDKxxQW6qEjHPsdINa2f7IiPWC0VqXb7yqPkpXVUI64LCswlSL8o60NoaxWpaaelFlCjRlNKUN2Zj+s6dO6UXy9mzZ2X0AvtwhoSESKWL2V9Ui+6PQYvOQkZsL5xc4orTS9xwMsYNp35neKk83WIvnIpxVeaGs0u74EBUL7wzago+/mIVZs3ejGUJ+7Fz+0mkHzqPPbtOIzX5EIJZphuXgtdHRsP7sem4su8EtB8wAfPGP4OLqR6qXOelzAcFib7YN7c7Ti3qjny1nBtrWFaMOwoO/46SomIU5+WXWYn5PdeByfYC9VmAErVMK+JnUYESTSlKSwwhmU0Z7777Lh599FH88ssv4uVY5qMgTbTo/hi06CwcWtwL6ZFuSI9iBYcH0pWtmemDA5FeOBzlLuuPL3TFttA+eOq1H/Dme4kYN34lZs/ZhuiFexC7NA2LFu9BYPBWjP9hDf7xUSyGvByOZoN+xnX9v0O3IZPw9aDHEdvTHYt6eZVZVE8fLLrNG0uUcXlhb7X+Ni8s6DsIUf0exoI7HsKCfrU0HqNsnt9d2BUcLvdnFRC9GcNMPz8/3HDDDfjwww9lH8K+nStWrChrcjBN4xy06Czkrxqowkd29/JQZTg3FC93x8EoH+QsM3qOcBhOcWoXFYb6Y+gro3HfcxEY+cFSfP51Kib+sBo//7oek35aiy/HpuK9j+Lw1OuR6DpEebnbv0fHe8dj0NAJmOQ5GBHNvTGvVTfDWnZDaCt/ZfxUppbDW/SQ7/NaeCO0mSdCm5vmoZbdEXJ9R4Q2dStfV4XNuqottv08Xe6vpLTiKHfCTtm7dhkjJthxm4Nhr7nmGhkWRKxhpsY5aNFZyFo/DHnxHY0KjkTbqO5IT5z+3VPa7KQiRW3DGjd88MGLuKn/FNzzwly89NZCvP1+DN5VAhylPl97OxoPvRQGt4emSVjZfOD3uO3RSXjqodEI6hyAqLb+mH9rNzvrfvlye+uysvb+CGnji+j7nkB4l16Y385ROhUt6MbO2P6f2XJ/VsFZhcRREQw1OSiWNZrsr8kxeRyaZG001zgHLToLubtGIyeuvQiOwqPojkWr0DLa8HTsk8mmhAvLu2BH5ADc2H8Mru47Ga5DpqLXk3Nw59OBuF19eijvdtOgn/Dn28ejxcDxuO3hCbj7ie/w6e3DlOB8EX5r9WJxZEE3u2LlP75ASXE+5vd9CGEtPB3uZzWr6EpUuc4qOBpFRQ/HvpoLFiyQ/QjH4HGgLENMM8zUOActOgsFx0KRGdtORCeN48oy4z2wN9wL+cnKZD09Xlfl7bpi9oSncFXvb9Ao4AdcdccEJcAJ+Osd49X3cWh85zh0um88AoZMwKC/fY/X738bIS69ENHeWxlFZ+/ZqrF2fghq5YWTGzfJta799zgE3dTZ8b40OUf1oqOZbXiE4wFnzZoltZnstbJkyRJZz/00zkGLzkJJThoyE1UomdgFOdLjvyuKVDkuLdwbGSrELJAQ02hfy0vqAqzywuyJT8Lvvq/Rqv8PaDfwB7jcOwGeD05E7yET0f/xCXjgibF46943MYdhpRKOIYo6eDp1bHBrb5xYZfSdXDfmWyWoTpftF95BmQo7g5q5qTKhpwizOtHRCLuFtW3bVnqpcNwdK1e+/PJL2Wbuo6k/WnQWSksvIGvtE8iNZzcto4GcbXPnYr2wZ563NGTLCHIRHrdReG7YHn43PvtgOP729Gjc+8jnGPzYV3ji0TF49YF3MLbno5jXoTsWtvG+TCC1sQglujlKdBkbtsqQoZghz2NeU7ey7eG2zzCGr137IC0qGvFPD8esq9rXSHQMM+nhOBUEv5vQC5qVKRrnoEVngUFW/uFgnGeIaRFXYYqrdEpOj/JGYWr5eqlwUd7wworOwApPnFraGzvn34PZ9w3ElI79ENqhB6JUSBh6UxfMVQKJUOKzCqQ2xvJb1O2DUZSbg7MH0hHM9Upg9vvNa+aOqEFD5X52zgrBlEZNsaMGoqMRttNx6gl+mu15xNyuqT9adBY49Ka4OBPnlz+AvHhjmjyKi8JimW53mI+MgzMqVQzxcZ/8RIairiha7gKs9ETSIE+ENfVBZGs/zHPpjoRXRmLp315BUJMuiFDCCLMTSk1s7s1dEffsG3KdJ7fsQGAHJbi2ZriqPKGtpjPwpk5Y8+lY2W/7tEBMbdRMiW6WLNdEdKNGjZIR566urrjrrrtktDlnHbN6P0390KKzwK5S4u2ORSBr6a1KSJwD06g8KRCBeWFXqBeOLFQeT5X18pJd1ToKzqjVzEvmjM2+WDrIH/Oa+2F2Yxdsm2bL8Ll5iB78NEJEeLWsRFFG0S19arikdXzNegS28ZJynrmd3pMW1LgjNk/4RfbbFRiKaY2a19jT0bOdO3cOYWFhuPfeezFmzBipTGEtJrdrnIMWnQV2lbpQegkXL5UiZ/NI5C1tKXOjcLgNjZMJ5apy3f5IT+wN80NmvKd0ii6QShd2XnZFQbIPYu/2RfD17ojo/zCKc3NtqQO5J08hvOc9CGtZfVW/aaZXnKvESo9JTm7cjOB2l3s61orOUaLbYmsM36o+pyrR1aRMZxrZv3+/tNnRvv76a+keZg01NfVDi85CyYUS8Xac+6SkMAOZK+5FtlSqsPe/ElYiQ012enbHqRhP7FFeLy3SCyd+90R2ovKG7MWS6ouEgT6YcV1X7A1fKOkueeNdHFuxRr4vf/9fCLyxU63LdfSQsS8bU6cfSV0pzQcVPZ0/wtv7IfAWd+ydb8yNEvfcCMy4okWtPB155JFHcN9998kUfybcrnEOWnQWjMzHjFkiYWZx1g5kJfWVdw/kLvNQpkJKVX7jJ+dK4SDXkzFeOBjpjn3hntgX6Y1DUT5Ycoc3Zt3ihaz9h5GnvNvMpio0HGaUx3b8FoQ5TVjVX7MQM6K9sV/ITZ2RMuKfksbR5asR1NrbIjruo0TXxgfzXPsg59gJmX0s6s4hmHVVmxqLjkbhsbHcCruKaZyHFp0Fa+ZjBuX//eLMbchMvQs5sW2kQqVMfMrj0fsVMKSUihUPZKn12Ql+WBKgym19hypvWYSt0wIx68o2iOo/RM5xKHk55jR3Q0S7ywVmb4Y3VIJSoWPwjZ2R+t6nRhoxCZjTzL2sAdwwfwlbw3rdIyMOSgoKENZzEGZd065W4SUrTDg/5qefGud64403ZKwd59XUOActOgsVMyBDzRIRXkleOjLXvYzspW2Ql2D0zTREZ9RgMuxkCJqf3AXFKd5Y0L0tNk2YJmku/+enCLzuVoR59EVexikU5+chos/9CGuhwsMywTg2s3Jk/q0qbGzcCVt+nCppbp8ZLCEqa0LL9/fHvFvcsPDBYbLP6W07pH0w8PoOtS7TcZYwTuXAEeZ/+tOfMH78ePz1r3+VbZr6o0VnwZr5ZNBnifpUVqrKeBcuFiHvwGTlzW5DztLWIr6y9xvIpyr3JbmicJkSXX9XpC1KkjST3/4Hgm/oJO1qZ3bskXVLBj+DUCWQCuU6hpFS7d/dJjbDi0lTQHtfzLmlK9IW/C7Hxz73FkLUcrnguA9D0C5YpsqPZMP3v2D2DS5KnJ1rFV7S03Fgq7+/vwiN4+3YNez555+XNDT1R4vOgqNMSJNQUzkBtlQV5e1H9p6vVcjZF1mxtyKb7yWId0F+QmdVxnNB3pKOSBn5N9k/69hxRA54RIbjBLb2wfG1G+U8bLObe7OrhIdhHfylt0lwky6Yc6OL8oDeZR6srD2P29t4IWPdFjk+dthwhDRRx5vbKVAlOjZRbP5hsuyz7t/fS3qBNewGZjXCF6LEx8dXGNSqcQ5adBYcZUAa5z3hVAfFpSrcVMqj+EoKTiD/2Hzkbn0fWSsfRlbSbchO9MT56I7YGWL0V1w//lfMuvpWoyq/tSeOrTb6TcY+9yZCbu6qxOWH0HY+CGzqhtT3P8X6sT8g/LZBCFaCZFsejxNv2NYfQWq/kxuMiWEThv2POr6LRXTKM7bzR2BzDxyONzzshq8mYrYKQWvS4dmRmbAbGHuoaJyHFp0F6zAW1uKZvTBKlegkzCwxB4GWQq0qm4+kpCQPJbkHcSFzE05vj8T5w7tReC4Lkb3uQ5gSQnjbbko0vji5ebukFz/sdRHdfLUuqKU3tv0WLOtJXkYGljz6MkKUECPbMdTsgfA2ytN17IbTu/dJrSTH04U28ygXHD/b+CJEleHOqH0uFBdj0UPPykBXhpfbJtdedGafS76Gq2nTptJ2p3EOWnQW+LJFEw7sPHXqlGS2n3/+GYWqXMNMyAqWiqbWKeVdsI2O2RoVh8NrNuPs5h2Yw/6WHGja1g9BHZRodhizb8U8/CzmNXVHsAr/ljzygqzLVeWogizjBSDn9uxDsIsq4ymxSftbSy9E+A1AfmaWeNno/g8htLldRUxbX1Vu9Fei24vCrCyEuAdgfitvzKlDeEkzRcf34F155ZXYs8coj2rqjxadBc6QxfkgOazl22+/lWryzp07yxwifPcccZRBTSMrx06SMHLLT9Okr2W5IPxwautO2Sf28RcRfENHBCpRZWzdgfxz5xDa5wEkvPEP2Z6bcQqh7ncgXIkmvIOf8pbuiBowBBeUpz2hvCU9GgVZQXRtfBDS6Tac239Qjp/r1hthbbxrXZFimgnfBMTp2DXOQ4vOAidenThxotTecU7IBx98UOYL4azIfNWU4ekcZ1KGornHTiLQfwCOr1iNxQ8OkwoUqYlUod9clx7IOnoUxXm5mN9jEGZd1wE7g4wJgxY/+jxmX9kS4d0HSpMC00od9bGINrK98pJKOMv/MVr23R+1BLPVerODs2k818KBj8k+2ceOI9SDns6rThUpPH9oaKh4esI5VKxRgKZ+aNFZYIYjfLkGe9rzXd4bNmyQdZUJjs0K/CSnNm7BLOWZto7/D0LdAlRZTnmj9t0xt5kbYoY8pzyVClk3bsWMG1wQO+w1OWbt2B8w59oOxni55m7Yv2iprN85i21xylMqcbGNbp3aj+yaNQ9BajlS7c9jwmnKy81Vwvx9qBGqHk5ZiaBm7LGiyow3dlKebo6sly5utuutzHifhE0GvH82F/BNr+YIck390aKzg3NAsmf9wIED5Y2mVhxlUrFSo0C36pNvENLCE2G+AxDOblrS5tZdZXwXrLD1JklfugzTlFfbFxEty/N7DkJYMy/xiIHXd8S6bybK+oOLl6oyYVejPKjCy8MJxttUV48Ziyl/aqbWeSCwhTJ1nrlde2GGOseqz40hPRsm/KqE3BFRysMGN3bB9immpzPaHx3eg80IPT4bxNkHkxMVcdZn85+Ppv5o0VlgpmM/wy1btiA8PBw//fSTjKReuXKlhFeOvJ00oovm2NfxYYT73YXoQY8htCUrOowqf4oueeTHco6dM4Lxm0s3lBYV41B8IoKVcOa3VSGi8ogcCb5o8FO4oLadXLsJQW2UGFt6Kq/ZB1lHjsqI8YQPPsO2qb/hcOoapC9LwfHV63FuXxqOr9+EvDNG1X7qJ19gdnsfGYkw5YpW2DYlUNYTvpjS/h6sRtjR+ZNPPpH75YzPrEjJzMyUbZr6o0VngWWZjRs3Sk0dy3R82QYHcdLzPfzww7LP5cIz3jl+csMmzLylC1Z89AXinx2Bebe4i+gopqDGnbH5R6Nb2O8jPsAOVZbjq5Aj+j2ohMaqf3+jjKbCxCCXnsg+ehxFWTmY630Hwpq6ItSnH3IyTknNpa2S1CFMs8T20ry8M2eRsXkb0pbEY824H7Hms3HYE74AJQX5yjNXXbbjPbI8x+8c1sN+mGZFkqb+aNHZwV4YFNlVV10l7VM9e/aUN5i+/vrrUpNHYVbIpHRzKqPHvfA/mN64I85s3orYZ99C6C2u4uVYyxjasQey9u5T+17A9qjFcp713/4sZbZIS6dlKZu59kLWoXRpj4tje9417RFx+wMoUOc23luuwsTCIuxT6bDj8/bpwVj173E4mJCstl9U3vAijm/YjKzDR+U8ZM2n3+CnRlfgx0aNsTc6RtbxhSd8WWWFe1HGpgJHcJvGOWjR2cFmgy+++ELe220t0/E7u0SZjeemsdqhMPM8Qj1uR4hHHxScPYeYJ15Tno7dvIyayxCXHji7a68IhvAzcuCj5cI0TQmQvUqOLFsp+60d/TWmNboFa778XpZ5XHb6YcS9MhIzVfkvUB0f2KSTzIOydepM2Sc9bhmm3twZ87r0wuL7nkTciyNUOXECUkb9Cwmv/h2ntmwv+8dhX76jh2P75IgRI2TkON/QSsx71jgHLToLzFisrbP+t7d+Z2a1Fx1hjeOMq9pgxaiPZHnxIy9irim6Vt4I9e6H7JMZZaHhwaXxmMtJhcomFrJ5OyW64BaeOJpqvIQ//uV3MP2adkiPNypRMrZuQ2DnXghWQuPQoHC1fwQrS1Q6GRQTj3nhTYSocHZ+a18VmrpjRqPm2D7VqL0k3Md6/VYjCxculHeUP/vss/Kug+joaAk1ee8a56BFZ4EZj//t7TMYZz4+c+aM1OQxUxLzDThk7Udf49dGTSTkI0uGPI+5TbtKzeX8Vr6Y59ob2YcMr3F+/37MdQswuod1MDyctOUpY++V2a08yzpG/z70RYR0uQ15587J8pqvvjeaFyhmqaTxB991sODOISguKpbuX5F9B4PvODC9p/S9nGxrMlChpykwR7WYhPOj8D0Gc+bMkVdpsRsY503RonMeWnQWmPEoOoaSq1atknFlHNpy7bXXIjIyUoxhJ2sASy4Usygnr6ZiRg/zvxMF541uWhTdPA69ad9DhBfa1hvRg4Ziyy9TEX3vkwiRDs2GKEyjkOa29EREn3tViGrUQnLeyvk97lFiMiprUt4frbxYJ/GgxnHdEXRDR6z55BvZXpRfiMh+D4ugzXSr6/BsenLTi/MdBpwFjL1w+OJI9s4h3FfjHLToLDBjUXTMfKw8YUXKa6+9Jq+NYmY0YXesErUf2ThxMn5pdHPZAFNm4XLRcaQAMz9nB3PHHCWAeS3cRXBW0ZlDeOY16Yrf//aypMNJjOa5ByAiYDAuKXWXqLA35hGOwzOG9FDMERx90MJDhavGyIK8M6cRqUQaJs0V1YvOFNn8+fNluxU2k/C+ibm/xjlo0VmwZi5muk2bjPcGWGFbGUMzRlv7wqOlLYzdso6kGBMPsYbRFJ0pOHNganlYqMJOmyhEQGo9y2iBN3fBlskzJJ0Tq9di6lUtyxrVWf3PGZ7Zy4SeLlIZRxosGPS41IqSnXNCRdjWtKsSHVm3bp148v79+8t3e/hPyLq/pv5o0Vmwz5BWkpKSEBgYKNtUqU/Csd+fexP/aXS98kb3oViFdvRyXM+RA+Lp7MRVmUmZTnmt4LY+yNyfJudb9cmXmKm8WuYeY/ngklgE2c2LEqQ8Y/xwY6Q42Tb5NwQ2drGEn2aZzrHoKChWkrAHSkBAgDSV0LOz76nsXzaUyfEz0dQNLToLlWWwpUuXonHjxnjxxRcRpITH8XUXVchXeP481nzzAw7GLZOyXMklVsKo8PLh5xHKQabM/BRJNRbR3uhHObe5F1JHfoItP01HYJPO8kbVkoJCuYakER9Il67yY/wRclMnpLxpjEw4u2sfIrvdbbw+y3Je9tOsqkxHOHyJ81umpqbKUJ6WLVtKNzCKUns656NFZ8HMXCzrcBo6ViIMHjwYvXv3xrhx46Sdrp8KwzIyMkRcF0VqZjV8MS6o4xheRt77JGZe0048U6Aqy1Vnc5QFNXNV3z3w27XtMe2vbTHtzy2w/L0xRvoq3ai7h2LmtbdWPLZpV8xo7oalL76NEP8B6py3Yo4q4/GNPTw3bdqVrZWIjZC1MtElJyfLSyFNWHnEiiR6bft9NfVHi86CNXNRZKNGjZJhPaw2Z1NBjx49ZJYsegRizZC0UpWp2cvjyPoNOBSXhPTEVBymJdg+rcZ1FuO+sn9CsrIUHE5egY2TpmLx/c9i+YdfytR96QkrKhybvszYf1/UEhyMSSjfxk/b94Oxy3Au/VBZWdQYeFt+zRQWe9p4enpK7xt2e/vXv/7l8P40zkGLzoI1c/FNpOxdT+6++27p/Ezvx9o+c5wZsWZK6fysykHOIvaZNzG50dWIf3WUbU3dMDyx4eXM9jl7OBERu7o988wzOHr0qHh76705OkZTN7ToLJiZi+UYegC+JJG97du3b49//tOYXdmE4RcrV6xlHsMMj8KJjMzl2pk6VqV/etceBLXxRkh7X2Rs3lpBOLU1c8wfjddGDh06hG+++UYqURxhPd40jXPQorNgzWD8T0/hsRsUG8nNSgXCnvcMNfv06SPLpPxYVbZTIRxFZ3qV2hgnuCVp0UvxS6PGiHvKGOzKF1ZW7KBsnaelYshYcR/jn4i5jvdFOC0F37jaqlUrbNu2TdbZ11bam8Y5aNFZsM9kpsgIMyuN84WwYoWCY6jJaQ02b97sMByrq10svYTCzCzEj/hQupbRy5UqAdVFxCb8bv7jePLJJ/HOO+/I+vfff1+mpODkS9VNSaFxDlp0FhxlNKuR2bNnS3sW2bFjhwzwZAhKqsqwNTWZVVqFkeVy53UxZKX3rNoT2Rs99Zo1azB6tDG/CmF59NVXXxWhmWVWhtEcGW5fW2lvGuegRWfBUUazGr0ZO/+ydo8v1mD/xM8++0yONcM2E+txtRejbX85jh7UFFvtREdmzpwplUAmvBbCfqT8hzF8uPGiSeIoDatpnIMWnQVHGc3eTB544AF8/LExBQM9BGGzAifxYTse4f4M2Uzs0/qjjdd17NgxaW/kREN8kT8xhTdp0iSZhIk4Ot7eNM5Bi86Co4zmyOjVONW40UhuCO7LL7+UN9wwE3MsGmsHuY2io6fhHJrM7M4IQasz8xxk3759Mt3C2LFjJSxmn1LC7Rywan6viWmcgxadBUcZrTIzobBYTmI3MWbuadOm4brrrpOylAlrOh97zJiT0io6E2dVwtiHuDwXr43dvMzBqSzLsQcKr5vmKJ3KTOMctOgsOMpo1RkzLmfKYvU7h8IcOHBApvEzvUhiYqJkdDY+E/M4CoKhH70lu5eZ+5vUVIhWr0amT58ug23ZjmiybNkydOzYUcqfbJtjI39dhK5xDlp0FhxltJoYYSZ/+umny4bHUIyEXavM6nn7Y+iBvLy88NJLL8nIdM5AxhpFeiIK2eoVrcb1VnguHnPPPffIDNXDhg2Dh4eHbavxjgaGvOzUbOIo3epM4xy06Cw4ymg1NcJGcw6LMUWxePFiqeFkiGcfyhF6OI5lM6vuOc3djTfeiKFDh0qZ0V5chMfyOE4VyLa1Dz/8UNavXr1a0uJ0C+SWW24Rj8s5X8x/AMR6DbU1jXPQorPgKKPVxpi5aQzdGGayE/Fbb73lMG3CmcdY+fLVV1/JgFlO8nr99deXCYeio5eaPHmy1JSaXbboIdk1jWPgoqKiysTJCht2yKYoWTPJGlZOLsTr4T7211Bb0zgHLToLjjJaXY21lmw8Z/9MR9sJBcNXDLMcRqNAr7jiCunhQiiWJ554QmaZ5mS3/fr1k/WE0+QxnCVmevSyLVq0kDDSXGfvYetjGuegRWfBUUarj5k46tNIWNvZrl07+U44WJY1nyzfEYabzZo1w5gxY6RWlF3OKETCURBNmjQR72d6V3q1tWvXSphrrrM/b31M4xy06Cw4ymh/hFEMFAvfE8BGa4qMwnzzzTfRunVruRZTNH5+fjKolILiMdyP2yhQej82BTB0pHE9cUYo6cg0zkGLzoKjjPZHGctdHDzKsh9FR1GxOv+VV16Rsp4pOjayc96St99+W2pITe/FF52Y2Kf9R5nGOWjRaTQNjBadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA2MFp1G08Bo0Wk0DYwWnUbTwGjRaTQNjBadRtPAaNFpNA3M/07RpU1CQKNGaDQ8xraiHjgzrf/fqOrZxQyXyWsDJhnvRK8VtnTrdOz/A9RAdDEYzgdfwQLwhz6vCj92GiYF8JzD1ZXUgT9EdPW8pv9bqPTZGXmizqJpMNHZ8m7AJPWLlRMznL+dmYet+fvy39PY1zDjMThKs3b5oeaiKzuJeZF/YIbTovvfwR/y7BqSWoguIMDBPwJjG2dd+y+Lzv6iFeaPYzPrb3T5fwqF/X86+x+3bHmS7WbKrewYW3hjWoV8YdkWMHx4xbSJ3fU6/lEMq5CuYD7gcqvJNVWaZl2OsVLVc6hwn5YM4cRnV7bJtn54jC2/iPGclmXzOZf9vraD63CdNXo2DvIuMY61F91wDOfvat1Xzj8ckyb910VXybLtztPkAm03ZHtoxiZ1YUpEcoztIVcvOi47uCFuLzu/3Xa7tMp+HDNtu+u97NyVXXMFanlNVT2H2h5jparj7e9TpSfPu6pj7J5Fdc+uwm9tHmt3/fbLZddQlk4drrMmz0awpV2WjoFj0U1CjPV+zHOqkxj3aZ7PUZr2z75q6lamMx8QqfAAFLYHKg/OfPDW/Yl1H8ty2X4Vlqu/IeMhOvpBFPZp22+3T7+ya65A3a6p6jTrdoyVKp9DJdTr2Vl/xyp/w/Lly/atx3VW/2xqJ7o0B9fIUzgUnUOzXV811NrTGRdc/pDMC7I3Q1Bm5rRZ+UHlN2dZdvyDOc7g5nWUm7G94gOSFRXSvmy7osIPWtk1V6B211RVmnU5xkqNn4OF+j47e6uP6OpynSqBGj0blULtRGemq74bXs/Rc3GUpuP8UBm1Dy8r+SEqvW/BvKiKoUhdRWd/TuMh1i7jlG2v9IHZXXMFandN5VRMsy7HWKnVc7BRq2Nq81tX+RuWL9dUdFVdZzlV/UaktqIrP6+Y3TrjWv4bois7ge2i7R+uBV5sxYfm+EaNbZY07NK0f+AOH4K53eGx5cuXXa/dcuXXXJHaXFNladblGCtVHa82VrxPFZIxw9fmmGqfnZVqnqu5fJlXtN+vBtdZk2djYt6Duf9l5zPTNvO3uV2Z6RQcXkvDik5hi6nNizKXy81OXDYru0+FeSO0gEkxxkWbO9g/mMsehHmThvG92dYbrjJtYklPzLqtimuuQK2uqbI063KMlaqfQ4Xf5bJ/mo6PqfbZVfZbV/ab2S3Ls7LfVuvrrOFvZKPsn4dpFQ6wpXXZecuF/F8QnUajcSZadBpNA6NFp9E0MFp0Gk0Do0Wn0TQwWnQaTQOjRafRNDBadBpNA6NFp9E0KMD/Aa7WrzMcKf6wAAAAAElFTkSuQmCC'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
              }); // fin d
                                                        
            }
        });

    }


    function mostrarAE(id) {
        $("#boxUMH").hide();
        $("#boxCentro").show();
        $("#boxGrados").hide();
        console.log (id);
        nombreAE(id);
        //Si existe, destruyo la tabla para volver a pintarla cuando cambio de centro
        if ($.fn.DataTable.isDataTable('#tCentro')){
          $("#tCentro").dataTable().fnDestroy();
          $('#tCentro').empty(); 
        }  
        $.ajax({
            url: '/lib/datosAE.php',
            data: {idae:id},
            type: 'POST',
            dataType: 'JSON',

      
            success: function(jsonRespC) {
              // tabla uno
            
             $('#tCentro').DataTable( {
                data: jsonRespC,
                retrieve: true,
                scrollX: true,
                columns: [
                  { title: "CURSO",data:"CA"},
                  { title: "N",data:"N"},
                  { title: "TE",data:"TE" },
                  { title: "TR",data:"TR" },
                  { title: "TP",data:"TP" },
                ],
                dom: 'Bfrtip',
                  buttons: [
                      {
                          extend: 'pdfHtml5',
                          text:'PDF',
                          title: ' ',
                          download: 'open',
                          pageSize: 'LEGAL',
                          filename: 'Resultados tasas academicas UMH.pdf',
                          message: ' ',
                          customize: function ( doc ) {
                            doc.content.splice( 1, 0, {
                                alignment: 'center',
                                image: 'data:image/png;base64,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'
                            } );
                          },
                      }
                  ],
                language:{
     
                  url:'/fonts/spanish.txt'
                }
     
              }); // fin d
                                                        
            }
        });

    }






 