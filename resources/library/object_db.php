<?php
//clase de base de datos
class Db {
    // La conexión de base de datos
    protected static $connection;

    /**
     * Conectarse a la base de datos
     * 
     * @return bool false en caso de fallo / mysqli MySQLi object instance en caso de éxito
     */
    public function connect() {    
        // Intenta conectarse a la base de datos
        if(!isset(self::$connection)) {
            // Carga los datos de configuracion
            require(realpath(dirname(__FILE__) . "/../config.php"));
            self::$connection = mysqli_connect($config["db"]["host"],$config["db"]["username"],$config["db"]["password"],$config["db"]["dbname"]);
        }

        //Si la conexión no se ha realizado correctamente, tratar el error
        if(self::$connection === false) {
            // Manego del error - notificar el error, guardarlo en un fichero de log, mostrarlo en pantalla, etc.
            return false;
        }
        return self::$connection;
    }

    /**
     * Consultar la base de datos
     *
     * @param $query La cadena de consulta
     * @return mixed El resultado de la funcion mysqli::query()
     */
    public function query($query) {
        // Conectarse a la base de datos
        $connection = $this->connect();
        if($connection === false) {
            return false;
        }
        // Consultar la base de datos
        $result = mysqli_query($connection,$query); 
        if($result === false) {
            //  Manego del error - notificar el error, guardarlo en un fichero de log, mostrarlo en pantalla, etc.
            return false;
        }
        return $result;
    }

    /**
     * Recuperar filas de la base de datos (consulta SELECT)
     *
     * @param $query La cadena de consulta
     * @return bool False en caso de fallo / array en caso de éxito
     */
    public function select($query) {
        
        $result = $this->query($query);
       
        if($result === false) {
            return false;
        }
        $array=mysqli_fetch_all($result,MYSQLI_ASSOC);
        return $array;
    }

    /**
     * Recuperar el último error de la base de datos
     * 
     * @return string Mensaje de error de la base de datos
     */
    public function error() {
        $connection = $this->connect();
        return mysqli_error($connection);
    }

    /**
     * Escapa los caracteres especiales de una cadena para usarla en una sentencia SQL y 
     * los incluye entre dobles comillas 
     *
     * @param string $value El valor que se entrecomilla y se escapa
     * @return string La cadena entre comillas y  escapada
     */
    public function quote($value) {
        $connection = $this->connect();
        return "'" . $connection->real_escape_string($value) . "'";
    }
}
?>