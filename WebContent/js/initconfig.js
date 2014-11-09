$( document ).on( "mobileinit", function() {
//	window.alert("mobile init");
    // Make your jQuery Mobile framework configuration changes here!
//    $.mobile.allowCrossDomainPages = true;
//	$.support.cors = true;
	$.globalVariables = new Object();
	$.globalVariables.constantes = new Object();
	$.globalVariables.constantes.index="index";
	$.globalVariables.constantes.indexHome="indexHome";
//	$.globalVariables.urlBase = "http://192.168.1.34:8080/pfc/";
	$.globalVariables.urlBase = "http://192.168.1.34:8080/pfc/rest/pois"
	$.globalVariables.urlBaseAdmin = "http://192.168.1.34:8080/pfc/admin/";
//	$.globalVariables.urlBase = "http://localhost:8080/pfc/rest/pois"
//	$.globalVariables.urlBaseAdmin = "http://localhost:8080/pfc/admin/";
	$.globalVariables.navLeftPanel = "mainPageHeader #navMenuLeft #controlGroupLeft .ui-controlgroup-controls";
	$.globalVariables.navRigthPanel = "mainPageHeader #navMenuRight #controlGroupRight .ui-controlgroup-controls"; //se utiliza para acceder directamente al contenido
						//ya que si no se hace asi el boton aparece en todo el panel porque la div .ui-controlgroup-controls no se crea de nuevo
	$.globalVariables.navLeft = "mainPageHeader #navMenuLeft"; //para el evento onclick de un boton ya que cuando lo ponemos no existe el .ui-controlgroup-controls
	$.globalVariables.navRight = "mainPageHeader #navMenuRight";
	$.globalVariables.versionActual=2;	
	$.globalVariables.watchGeoID=0;	
	$.globalVariables.capas=new Array(1,2);

	$.globalVariables.pinTodos = [
/*      	       {"titulo":"New York", "descripcion":"New York", "latitud":"40.714353", "longitud":"-74.005973", "id":"1", "tipo":"1"},
      	       {"titulo":"San Francisco", "descripcion":"San Francisco", "latitud":"37.77493", "longitud":"-122.419416", "id":"2", "tipo":"1"},
      	       {"titulo":"Seattle", "descripcion":"Seattle", "latitud":"47.60621", "longitud":"-122.332071", "id":"3", "tipo":"1"},
      	       {"titulo":"Los Angeles", "descripcion":"Los Angeles", "latitud":"34.052234", "longitud":"-118.243685", "id":"4", "tipo":"1"},
      	       {"titulo":"Denver", "descripcion":"Denver", "latitud":"39.737567", "longitud":"-104.984718", "id":"5", "tipo":"1"},
      	       {"titulo":"Chicago", "descripcion":"Chicago", "latitud":"41.878114", "longitud":"-87.629798", "id":"6", "tipo":"1"},
      	       {"titulo":"Austin", "descripcion":"Austin", "latitud":"30.267153", "longitud":"-97.743061", "id":"7", "tipo":"2"},
      	       {"titulo":"Miami", "descripcion":"Miami", "latitud":"25.788969", "longitud":"-80.226439", "id":"8", "tipo":"2"},
      	       {"titulo":"Pittsburg", "descripcion":"Pittsburg", "latitud":"40.440625", "longitud":"-79.995886", "id":"9", "tipo":"2"},
      	       {"titulo":"Phoenix", "descripcion":"Phoenix", "latitud":"33.448377", "longitud":"-112.074037", "id":"10", "tipo":"2"},
      	       {"titulo":"Atlanta", "descripcion":"Atlanta", "latitud":"33.748995", "longitud":"-84.387982", "id":"11", "tipo":"2"},
      	       {"titulo":"Kansas City", "descripcion":"Kansas City", "latitud":"39.099727", "longitud":"-94.578567", "id":"12", "tipo":"2"}*/
      	       {"titulo":"Universidad Politécnica de Madrid", "descripcion":"Calle Ramiro de Maeztu, 7, 28040 Madrid", "latitud":"40.448904", "longitud":"-3.718965", "id":"13", "tipo":"1"},
      	       {"titulo":"UPM Campus Sur", "descripcion":"Carretera de Valencia, km. 7, 28031 Madrid", "latitud":"40.388461", "longitud":"-3.629555", "id":"14", "tipo":"1"},
      	       {"titulo":"Universidad Autónoma de Madrid", "descripcion":"Ciudad Universitaria de Cantoblanco, 28049 Madrid", "latitud":"40.545277", "longitud":"-3.693735", "id":"15", "tipo":"1"},
      	       {"titulo":"Estatua Felipe II", "descripcion":"Plaza Mayor", "latitud":"40.415631", "longitud":"-3.707378", "id":"16", "tipo":"2"},
      	       {"titulo":"Plaza de Toros de las Ventas", "descripcion":"Las Ventas", "latitud":"40.431955", "longitud":"-3.663414", "id":"17", "tipo":"2"},
      	       {"titulo":"Palau de Cerveró", "descripcion":"Plaça de Cisneros, 4, 46003 València, Valencia", "latitud":"39.478046", "longitud":"-0.375588", "id":"18", "tipo":"2"},
      	       {"titulo":"Casa Sixto", "descripcion":"Calle Ortega y Gasset, 83, Madrid", "latitud":"40.430125", "longitud":"-3.671622", "id":"19", "tipo":"3"},
      	       {"titulo":"Casa Lucio", "descripcion":"Calle Cava Baja, 35, 28005 Madrid", "latitud":"40.412234", "longitud":"-3.709648", "id":"20", "tipo":"3"},
      	       {"titulo":"Asador Donostiarra", "descripcion":"Calle de la Infanta Mercedes, 79, 28020 Madrid", "latitud":"40.461975", "longitud":"-3.695663", "id":"21", "tipo":"3"},
      	       {"titulo":"Gimnasio Vambora", "descripcion":"Calle Augusto Figueroa, 9, 28004 Madrid", "latitud":"40.423175", "longitud":"-3.699931", "id":"22", "tipo":"4"},
      	       {"titulo":"Gimnasio AltaFit", "descripcion":"Calle Jorge Manrique, 27, 28006 Madrid", "latitud":"40.442640", "longitud":"-3.687096", "id":"23", "tipo":"4"},
      	       {"titulo":"Gimnasio Torre Cristal", "descripcion":"Paseo de la Castellana, 259C, 28046 Madrid", "latitud":"40.478487", "longitud":"-3.687500", "id":"24", "tipo":"4"},
      	       {"titulo":"Bar Brillante", "descripcion":"Calle Eloy Gonzalo, 12, 28010 Madrid", "latitud":"40.434003", "longitud":"-3.702501", "id":"25", "tipo":"5"},
      	       {"titulo":"Sidreria El Tigre", "descripcion":"Calle Infantas, 13, 28004 Madrid", "latitud":"40.420586", "longitud":"-3.698823", "id":"26", "tipo":"5"},
      	       {"titulo":"Bar Docamar", "descripcion":"Calle de Alcalá, 337, 28027, Madrid", "latitud":"40.433776", "longitud":"-3.648007", "id":"27", "tipo":"5"}
      	   	];


	$.globalVariables.pin = [];
	                              
});

