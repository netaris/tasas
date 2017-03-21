<?php
 
/*
    Lo importante es darse cuenta de que el archivo de configuración se debe incluir en cada
    página de su proyecto, o por lo menos cualquier página que quiera acceder a estos ajustes.
    Esto le permite utilizar con confianza estas configuraciones a lo largo de un proyecto porque
    si algo cambia , como sus credenciales de base de datos, o una ruta a un recurso específico ,
    lo único que necesita para actualizar aquí.
*/
 
$config = array(
    /*Conexion a la base de datos*/
    "db" => array( 
        "dbname" => "museodb",
        "username" => "root",
        "password" => "",
        "host" => "localhost"
        
    ),
    /*Almacenamiento de urls pueden ser realmente útil cuando se hace referencia a recursos remotos a través de su sitio*/
    "urls" => array( 
        "baseUrl" => "http://example.com"
    ),
    /*Comúnmente utilizado rutas a diversos recursos para su sitio.*/
    "paths" => array( 
        "resources" => "/path/to/resources",
        "images" => array(
            "content" => $_SERVER["DOCUMENT_ROOT"] . "/img/content",
            "layout" => $_SERVER["DOCUMENT_ROOT"] . "/img/layout"
        )
    ),
     /*Depuración tienda o mensajes de correo electrónico de administrador para utilizar al manejar errores 
        o en formas de contacto.*/
    "emails" => array(        
        "admin" => "admin@admin.es"           
    )
);
 
/*   Por lo general voy a poner lo siguiente en un archivo de arranque o algún tipo de ambiente
     archivo de instalación (código que se ejecuta en el inicio de cada solicitud de página), pero trabajan
     igual de bien en su archivo de configuración si está en php (algunas alternativas a php son archivos xml o ini).
*/
 
/*
    Creación de constantes para caminos muy utilizados hace las cosas mucho más fácil.
     ex. require_once (LIBRARY_PATH. "Paginator.php")
*/

defined("LIBRARY_PATH")
    or define("LIBRARY_PATH", realpath(dirname(__FILE__) . '/library'));
     
defined("TEMPLATES_PATH")
    or define("TEMPLATES_PATH", realpath(dirname(__FILE__) . '/templates'));
 
/*
    Error reporting.
*/
ini_set("error_reporting", "true");
error_reporting(E_ALL|E_STRCT);


?>