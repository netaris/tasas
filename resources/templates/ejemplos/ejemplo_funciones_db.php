<!-- Homepage content -->
<div class="container">
<div class="row">
<div class="col-md-12">
<h2>Home Page</h2>

<table class="table">

<?php
    
    foreach ($categorias as $categoria){
    	 
    	echo "<tr><td>".$categoria['id']."</td><td>".$categoria['orden']."</td></tr>";
    }
?>

</table>
</div>
</div>
</div>