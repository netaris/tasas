<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<?php 
include 'conexion.php';

?>

<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tasas Acad&eacutemicas</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="css/select.dataTables.css">
    <link rel="stylesheet" href="css/buttons.dataTables.css">
    <link rel="stylesheet" href="css/dataTables.bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery.dataTables.yadcf.css"> 
    <!-- Font Awesome -->
    <link rel="stylesheet" href="css/fonts/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="css/AdminLTE.min.css">
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
          page. However, you can choose any other skin. Make sure you
          apply the skin class to the body tag so the changes take effect.
    -->
    <link rel="stylesheet" href="css/skin-blue.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">

      <!-- Main Header -->
      <header class="main-header">

        <!-- Logo -->
        <a href="index.php" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>U</b>mh</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>Tasas</b>UMH</span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <!-- Navbar Right Menu -->
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <!-- Messages: style can be found in dropdown.less-->
              <!-- User Account Menu -->
              <li class="dropdown user user-menu">
                <!-- Menu Toggle Button -->
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <!-- The user image in the navbar-->
                  <img src="img/avatar.png" class="user-image" alt="User Image">
                  <!-- hidden-xs hides the username on small devices so only the image appears. -->
                  <span class="hidden-xs"><?php echo $login; ?></span>
                </a>
                
              </li>
              <!-- Control Sidebar Toggle Button -->
              <li>
                <a href="logout.php" class="dropdown-toggle"><i class="fa fa-power-off"></i></a>
                  
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

          <!-- Sidebar user panel (optional) -->
          <div class="user-panel">
            <div class="pull-left image">
              <img src="img/avatar.png" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
              <p><?php echo $nombre;?></p>

              
            </div>
          </div>

          

          <!-- Sidebar Menu -->
          <ul class="sidebar-menu">
            <li class="header">MEN&Uacute PRINCIPAL</li>
            <!-- Optionally, you can add icons to the links -->
            <li id="lidatosUMH" class="active" ><a href="#" ><i class="fa fa-university"></i><span>Datos UMH</span></a></li>
            <li id="lidatosAE" class="treeview">
               <a href="#"><i class="fa fa-globe"></i> <span>Datos &Aacuterea de Ense&ntilde;anza</span> <i class="fa fa-angle-left pull-right"></i></a>
              <ul id="idAE" class="treeview-menu">
                <li id="CE"><a onClick="mostrarAE('CE')" href="#">Ciencias Experimentales</a></li>
                <li id="CS"><a onClick="mostrarAE('CS')" href="#">Ciencias de la Salud</a></li>
                <li id="CSJ"><a onClick="mostrarAE('CSJ')" href="#">Ciencias Sociales y Jur&iacutedicas</a></li>
                <li id="HU"><a onClick="mostrarAE('HU')" href="#">Humanidades</a></li>
                <li id="TEC"><a onClick="mostrarAE('TEC')" href="#">T&eacutecnicas</a></li>
              </ul>
            </li>
            <li id="lidatosCentros" class="treeview">
               <a href="#"><i class="fa fa-group"></i> <span>Datos Centros</span> <i class="fa fa-angle-left pull-right"></i></a>
              <ul id="idCentro" class="treeview-menu">
                <li id="EPSE"><a onClick="mostrarCentro('EPSE')" href="#">EPSE</a></li>
                <li id="EPSO"><a onClick="mostrarCentro('EPSO')" href="#">EPSO</a></li>
                <li id="FBA"><a onClick="mostrarCentro('FBA')" href="#">FBA</a></li>
                <li id="FCE"><a onClick="mostrarCentro('FCE')" href="#">FCE</a></li>
                <li id="FCSJE"><a onClick="mostrarCentro('FCSJE')" href="#">FCSJE</a></li>
                <li id="FCSJO"><a onClick="mostrarCentro('FCSJO')" href="#">FCSJO</a></li>
                <li id="FCSS"><a onClick="mostrarCentro('FCSS')" href="#">FCSS</a></li>
                <li id="FF"><a onClick="mostrarCentro('FF')" href="#">FF</a></li>
                <li id="FM"><a onClick="mostrarCentro('FM')" href="#">FM</a></li>               
              </ul>
            </li>
            <li id="listadoGrados"><a href="#"><i class="fa fa-graduation-cap"></i> <span>Datos Grados</span></a></li>
            <li id="listadoMaster"><a href="#"><i class="fa fa-book"></i> <span>Datos M&aacutester</span></a></li>
            <li id="listadoDepartamentos"><a href="#"><i class="fa fa-building"></i> <span>Datos Departamentos</span></a></li>
            <li id="listadoAC"><a href="#"><i class="fa fa-building"></i> <span>Datos &Aacutereas de Conocimiento</span></a></li>
            <li id="listadoAsi"><a href="#"><i class="fa fa-book"></i> <span>Datos Asignaturas</span></a></li>
            <li id="listadoAsi55"><a href="#"><i class="fa fa-book"></i> <span>Asignaturas Tasa &Eacutexito <55%</span></a></li>
            <li id="gestionUsuarios"><a href="#"><i class="fa fa-user-plus"></i> <span>Gesti&oacuten usuarios</span></a></li>
            <li id="cargaDatos"><a href="#"><i class="fa fa-upload"></i> <span>Carga de datos</span></a></li>
            
          </ul><!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            <!--Hola <?php echo $login;echo $tipo;echo $nombre;?>-->
            Resultados Tasas Acad&eacutemicas UMH
            <!--<small>Optional description</small>-->
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
            <li class="active">Here</li>
          </ol>
        </section>

        <!-- Main content -->
        <section id="principal" class="content" >

          <!-- Your Page Content Here -->
          <div id="boxUMH" class="box box-solid box-primary" style='display:none' >
            <div class="box-header">
              <h3 class="box-title">Datos UMH</h3>
            </div>
            <div class="box-body">
              <table id="tUMH" class="table table-bordered table-hover text-center" cellspacing="0" width="100%" style="text-align:center"></table>
            </div>  
          </div>
          <div id="boxCentro" class="box box-solid box-primary" style='display:none' >
            <div class="box-header">
              <h3 id="titCentro" class="box-title"></h3>
            </div>
            <div class="box-body">
              <table id="tCentro" class="table table-bordered table-hover text-center" cellspacing="0" width="100%" style="text-align:center"></table>
            </div>  
          </div>
           <div id="boxGrados" class="box box-solid box-primary" style='display:none' >
            <div class="box-header">
              <h3 id="titGrado" class="box-title"></h3>
            </div>
            <div class="box-body">
              <table id="tGrados" class="table table-bordered table-hover " cellspacing="0" width="100%" ></table>
            </div>  
          </div>
        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->

      <!-- Main Footer -->
      <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right hidden-xs">
          <strong>TE: Tasa de &eacutexito</strong> (cr&eacuteditos aprobados de los presentados). <strong>TR: Tasa de rendimiento</strong> (cr&eacuteditos aprobados de los matriculados). <strong>TP: Tasa de presentados </strong>(cr&eacuteditos presentados de los matriculados).
        </div>
        <!-- Default to the left -->
        <a href="#">Servicio de Calidad</a> 
      </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Create the tabs -->
        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
          <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
          <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <!-- Home tab content -->
          <div class="tab-pane active" id="control-sidebar-home-tab">
            <h3 class="control-sidebar-heading">Recent Activity</h3>
            <ul class="control-sidebar-menu">
              <li>
                <a href="javascript::;">
                  <i class="menu-icon fa fa-birthday-cake bg-red"></i>
                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>
                    <p>Will be 23 on April 24th</p>
                  </div>
                </a>
              </li>
            </ul><!-- /.control-sidebar-menu -->

            <h3 class="control-sidebar-heading">Tasks Progress</h3>
            <ul class="control-sidebar-menu">
              <li>
                <a href="javascript::;">
                  <h4 class="control-sidebar-subheading">
                    Custom Template Design
                    <span class="label label-danger pull-right">70%</span>
                  </h4>
                  <div class="progress progress-xxs">
                    <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                  </div>
                </a>
              </li>
            </ul><!-- /.control-sidebar-menu -->

          </div><!-- /.tab-pane -->
          <!-- Stats tab content -->
          <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div><!-- /.tab-pane -->
          <!-- Settings tab content -->
          <div class="tab-pane" id="control-sidebar-settings-tab">
            <form method="post">
              <h3 class="control-sidebar-heading">General Settings</h3>
              <div class="form-group">
                <label class="control-sidebar-subheading">
                  Report panel usage
                  <input type="checkbox" class="pull-right" checked>
                </label>
                <p>
                  Some information about this general settings option
                </p>
              </div><!-- /.form-group -->
            </form>
          </div><!-- /.tab-pane -->
        </div>
      </aside><!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>
    </div><!-- ./wrapper -->

    <!-- REQUIRED JS SCRIPTS -->

    <!-- jQuery 2.1.4 -->
    <script src="js/jQuery-2.1.4.min.js"></script>

    <!-- Bootstrap 3.3.5 -->
    <script src="js/bootstrap.min.js"></script>
    <!-- AdminLTE App -->
    <script src="js/app.min.js"></script>

    <script src="js/datosUMH.js"></script>
    
    <script src="js/jquery.dataTables.js"></script>
    <script src="js/dataTables.select.js"></script>
    <script src="js/dataTables.buttons.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.buttons.min.js"></script>
    <script src="js/pdfmake.min.js"></script>
    <script src="js/vfs_fonts.js"></script>
    <script src="js/buttons.html5.min.js"></script>
    <script src="js/dataTables.tableTools.js"></script>
    <script src="js/cargarPerfil.js"></script>



    


    <!-- Optionally, you can add Slimscroll and FastClick plugins.
         Both of these plugins are recommended to enhance the
         user experience. Slimscroll is required when using the
         fixed layout. -->
  </body>
</html>
