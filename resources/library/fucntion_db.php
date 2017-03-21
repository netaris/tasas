<?php
 

function db_connect() {
	
    // Definir conexión como una variable estática, para evitar que conecta más de una vez
    static $connection;

    // Intenta conectarse a la base de datos, si una conexión no se ha establecido todavía
    if(!isset($connection)) {
         // Cargar configuración 
        require(realpath(dirname(__FILE__) . "/../config.php"));
        $connection = mysqli_connect($config["db"]["host"],$config["db"]["username"],$config["db"]["password"],$config["db"]["dbname"]);
    }

    // Si la conexión no se ha realizado correctamente, tratar el error
    if($connection === false) {
        //  Manego del error - notificar el error, guardarlo en un fichero de log, mostrarlo en pantalla, etc.
        return mysqli_connect_error(); 
    }
    return $connection;
}
 
function db_select($query) {
    // Conectarse a la base de datos
    $connection = db_connect();

    // Consultar la base de datos
    $result =mysqli_query($connection,$query);
    // Si la conexión no se ha realizado correctamente, tratar el error
    if($result === false) {
        //  Manego del error - notificar el error, guardarlo en un fichero de log, mostrarlo en pantalla, etc.
        return false;
    }
    $array=mysqli_fetch_all($result,MYSQLI_ASSOC);
    return $array;
}
function query($query) {
     
    $result = db_select($query);
    // Si la conexión no se ha realizado correctamente, tratar el error
    if($result === false) {
        //  Manego del error - notificar el error, guardarlo en un fichero de log, mostrarlo en pantalla, etc.
        return false;
    }
    return $result;
}
function db_error() {
    // Conectarse a la base de datos
    $connection = db_connect();
    return mysqli_error($connection);
}
function quote($value) {
     // Conectarse a la base de datos
    $connection = db_connect();
    return "'" . $connection -> real_escape_string($value) . "'";
}

?>