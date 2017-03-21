<?php
    require_once(realpath(dirname(__FILE__) . "/../config.php"));
 
    function view($contentFile, $variables = array())
    {
        $contentFileFullPath = TEMPLATES_PATH . "/" . $contentFile;
     
        // Asegurándose de que las variables están en el alcance de la plantilla
        // Cada key en la matriz de variables $ se convertirá en una variable con su correspondiente valor
        if (count($variables) > 0) {
            foreach ($variables as $key => $value) {
                if (strlen($key) > 0) {
                    ${$key} = $value;
                }
            }
        }
     
        require_once(TEMPLATES_PATH . "/header.php");
     
         
        if (file_exists($contentFileFullPath)) {
            require_once($contentFileFullPath);
        } else {
            /*
                Si no se encuentra el archivo el error puede ser manejado de muchas maneras .
                En este caso nos limitaremos a incluir una plantilla de error.
            */
            require_once(TEMPLATES_PATH . "/error.php");
        }
     
        
     
        require_once(TEMPLATES_PATH . "/footer.php");
    }
?>