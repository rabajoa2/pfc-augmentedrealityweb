$( document ).on( "pageinit", ".jqm-pfc", function() {

//	window.alert("pageinit init");
	var page = $( this );

	$(document).on( "click","#barraLateralLeftButton", function() {
		$( ".jqm-navmenu-panel" ).panel( "open" );
	});


});



$(document).on("click",".jqm-pfc .jqm-header .jqm-logo a,.jqm-pfc .jqm-content a,.jqm-pfc .jqm-footer a,.jqm-pfc .jqm-panel a",function(){
		var toLoad = $(this).attr('href');
		$.amloadInWrapperContent(toLoad);
		return false;
		
	});
	

$(document).ready(function() {

	var positionAct;
	
/*	function success(position) {
		positionAct=position;
		window.alert(position.coords.latitude+" "+position.coords.longitude);
	}
	
	function error(msg) {
		window.alert("dentro de errorr"+msg+' ERROR(' + msg.code + '): ' + msg.message);
		  // console.log(arguments);
	}
	
	
	
	function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
//		  var R = 6371; // Radius of the earth in km
		  var R = 6371000; // Radius of the earth in m
		  var dLat = deg2rad(lat2-lat1);  // deg2rad below
		  var dLon = deg2rad(lon2-lon1); 
		  var a = 
		    Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		    Math.sin(dLon/2) * Math.sin(dLon/2)
		    ; 
		  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		  var d = R * c; // Distance in km
//		  window.alert("c "+c +" distancia "+d);
		  return d;
		}

		function deg2rad(deg) {
		  return deg * (Math.PI/180)
		}	

	function showGPS(position) {
	    var lng = position.coords.longitude;
	    var lat = position.coords.latitude;
	    var innerText = "Latitude: "+ lat +"\nLongitude: "+ lng + "\nAccuracy: "+    position.coords.accuracy + "\nSpeed:" + (position.coords.speed*3.6) + "\nAltitude:" + position.coords.altitude;
	    
	    var distancia=getDistanceFromLatLonInKm(position.coords.latitude,position.coords.longitude,positionAct.coords.latitude,positionAct.coords.longitude);
	    
	    if (distancia>2){
	    	positionAct=position;
	    }
//	    window.alert("change "+innerText);
//	    getData("http://databaseEntryURL/gpsReceiver.aspx?string=" + gpsText.innerText);
	}
	
	function successWatchPosition(position){
		showGPS(position);
	}


	if (navigator.geolocation) {
		window.alert("geolocation supported");
		navigator.geolocation.getCurrentPosition(success, error);
		var updateLocation = navigator.geolocation.watchPosition(successWatchPosition, error, {enableHighAccuracy:false, maximumAge:3000, timeout:2700});
//		var updateLocation = navigator.geolocation.watchPosition(successWatchPosition);

		
	} else {
		window.alert("geolocation NOTTT supported");
		error('not supported');
	}
	
	*/
/*	$(document).on( "click","#barraLateralLeftButton", function() {
		$( ".jqm-navmenu-panel" ).panel( "open" );
	});
*/
	//	window.alert("dentro de onready indexHome "+$.globalVariables.prueba);
//	$.globalVariables.codFqUsuario=1;
	$.globalVariables.index=$.globalVariables.constantes.indexHome;
	var options = {
			divForm: "centralContent",
			divFormSub: "indexDiv",
			divFormSubAdd: "busquedaDiv",
			divFormError: "divFormError",
			findForm: "findForm",
			datosForm: "datosForm",
			navControlGroupLeft: "controlGroupLeft",
			navControlGroupRight: "controlGroupRight"
		};

	var navLeftJquery=$('#'+$.globalVariables.navLeft);
	var navRightJquery=$('#'+$.globalVariables.navRight);

	navLeftJquery.empty();
	navRightJquery.empty();

	navLeftJquery.append('<div id="'+options.divFormSub+'" class="jqm-nav'+options.divFormSub+'"><div id="controlGroupLeft" data-role="controlgroup" data-type="horizontal"></div></div>');
	navRightJquery.append('<div id="'+options.divFormSub+'" class="jqm-nav'+options.divFormSub+'"><div id="controlGroupRight" data-role="controlgroup" data-type="horizontal"></div></div>');

	$.amputButtonInNav($.globalVariables.navLeft+' #'+options.divFormSub+' #'+options.navControlGroupLeft,"barraLateralLeftButton","Opciones","bars");

	function onclickCerrarSesionButton(event){
		event.preventDefault();
//		window.alert("dentro de click");
		$.ajaxSetup({
			async: false
		});
		
/*		$.post($.globalVariables.urlBaseAdmin+"doLogoutUsuario.action",function(data){
			//		window.alert($.amdump(data));
			if (data.success){
				window.location="index.html";
			}else{
				
			}
		});*/
		window.location="indexMain.html";

		$.ajaxSetup({
			async: true
		});
		return false;
	};

	$.amsetOnEvent("mainPagePage #mainPagePanel #mainCerrarSesion",onclickCerrarSesionButton,"click");

	$(':jqmData(role="page")').page().trigger('create');

//	window.alert("el ancho "+$(window).width()+" alto "+$(window).height());
	var cabecera=$('#mainPageHeader');
//	window.alert("el ancho cabecera "+cabecera.width()+" alto "+cabecera.height());
	var contenido=$('#mainPageContent');
//	window.alert("el ancho contenido "+contenido.width()+" alto "+contenido.height());
	var footer=$('#mainPageFooter');
//	window.alert("el ancho footer "+footer.width()+" alto "+footer.height());
	
	var contenidoHeight=($(window).height()-cabecera.height()-footer.height());
//	window.alert("contenido height"+contenidoHeight);
//	contenido.css('max-height',contenidoHeight+'px');
//	contenido.css('min-height',contenidoHeight+'px');
  	$("body").css({"min-width": $(window).width(), "min-height": $(window).height()});
  	
  /*
//  	window.alert("dentro");
  	window.addEventListener('load', function() {
//  		window.alert("load");
  	    // initialize awe after page loads
  	    window.awe.init({
  	      // automatically detect the device type
  	      device_type: awe.AUTO_DETECT_DEVICE_TYPE,
  	      // populate some default settings
  	      settings: {
  	      	container_id: 'container',
  	        fps: 30,
  	        default_camera_position: { x:0, y:0, z:0 },
  	        default_lights:[
  	          {
  	            id: 'point_light',
  	            type: 'point',
  	            color: 0xFFFFFF
  	          },
  	        ],
  	      },
  	      ready: function() {
  	    	  window.alert("ready awe");
  	        // load js files based on capability detection then setup the scene if successful
  	        awe.util.require([
  	          {
  	            capabilities: ['gum','gyro','webgl'],
  	            files: [ 
  	              [ 'js/awe-standard-dependencies.js', 'js/awe-standard.js' ], // core dependencies for this app 
  	              'js/awe-standard-window_resized.js', // window resize handling plugin
  	              'js/awe-standard-object_clicked.js', // object click/tap handling plugin
  	              'js/awe.geo_ar.js', // geo ar plugin
  	            ],
  	            success: function() { 
//  	          	  window.alert("ready awe success");
  	              // limit demo to supported devices
  	              // NOTE: only Chrome and Firefox has implemented the DeviceOrientation API in a workable way
  	              //       so for now we are excluding all others to make sure your first experience is a happy one

  	            	
  	            	
  	            	
  	            	
  	          	var pin = [
  	          	       {"name":"New York", "lat":"40.714353", "lng":"-74.005973"},
  	          	       {"name":"San Francisco", "lat":"37.77493", "lng":"-122.419416"},
  	          	       {"name":"Seattle", "lat":"47.60621", "lng":"-122.332071"},
  	          	       {"name":"Los Angeles", "lat":"34.052234", "lng":"-118.243685"},
  	          	       {"name":"Denver", "lat":"39.737567", "lng":"-104.984718"},
  	          	       {"name":"Chicago", "lat":"41.878114", "lng":"-87.629798"},
  	          	       {"name":"Austin", "lat":"30.267153", "lng":"-97.743061"},
  	          	       {"name":"Miami", "lat":"25.788969", "lng":"-80.226439"},
  	          	       {"name":"Pittsburg", "lat":"40.440625", "lng":"-79.995886"},
  	          	       {"name":"Phoenix", "lat":"33.448377", "lng":"-112.074037"},
  	          	       {"name":"Atlanta", "lat":"33.748995", "lng":"-84.387982"},
  	          	       {"name":"Kansas City", "lat":"39.099727", "lng":"-94.578567"}
  	          	   	];
  	          	   var myLat = 0, myLng = 0;

  	          	   var watchGeoID=0;
  	          	   
  	          	   	// Start watching the geolocation
  	          	   function startGeolocation(){
  	          	       var options = { timeout: 30000 };
  	          	       watchGeoID = navigator.geolocation.watchPosition(onGeoSuccess, onGeoError, options);
  	          	   }
  	          	           
  	          	   // Stop watching the geolocation
  	          	   function stopGeolocation() {
  	          	       if (watchGeoID) {
  	          	           navigator.geolocation.clearWatch(watchGeoID);
  	          	           watchGeoID = null;
  	          	       }
  	          	   }
  	          	           
  	          	   // onSuccess: Get the current location
  	          	   function onGeoSuccess(position) {
  	          	   	window.alert("onGeoSuccess"+position);
//  	          	       document.getElementById('geolocation').innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude;
  	          	       myLat = position.coords.latitude;
  	          	       myLng = position.coords.longitude;
  	          	       for(var i=0; i< pin.length; i++){
  	          	           relativePosition(i);
  	          	       }
  	          	       renderer.render(scene, camera);

  	          	   }

  	          	   // onError: Failed to get the location
  	          	   function onGeoError(msg) {
//  	          	       document.getElementById('log').innerHTML += "onError=.";
  	          	   window.alert("errorrr"+msg.message);
  	          	   }

  	          	   function relativePosition(i){
  	          	       var pinLat = pin[i].lat;
  	          	       var pinLng = pin[i].lng;
  	          	       var dLat = (myLat-pinLat)* Math.PI / 180;
  	          	       var dLon = (myLng-pinLng)* Math.PI / 180;
  	          	       var lat1 = pinLat * Math.PI / 180;
  	          	       var lat2 = myLat * Math.PI / 180;
  	          	       var y = Math.sin(dLon) * Math.cos(lat2);
  	          	       var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
  	          	       bearing = Math.atan2(y, x) * 180 / Math.PI;
  	          	       bearing = bearing + 180;
  	          	       pin[i]['bearing'] = bearing;

  	          	       var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  	          	       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  	          	       var distance = 3958.76 * c;
  	          	       pin[i]['distance'] = distance;
  	          	   	
  	          	   	dLat=0;
  	          	       a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  	          	       c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  	          	       distance = 3958.76 * c;
  	          	       pin[i]['distancex'] = distance;

  	          	       dLat = (myLat-pinLat)* Math.PI / 180;
  	          	   	dLon=0;
  	          	       a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  	          	       c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  	          	       distance = 3958.76 * c;
  	          	       pin[i]['distancez'] = distance;
  	          	       if (i==0){
  	          	   		window.alert("distancex "+pin[i]['distancex']+" distancez "+pin[i]['distancez']);
  	          	       }
//				        awe.pois.add({ id:'poi_'+i, position: { x:pin[i]['distancex'], y:0, z:-pin[i]['distancey'] } });
				        awe.pois.add({ id:'poi_'+i, position: { x:(pin[i]['distancex']%10000), y:0, z:-100 } });
 				        awe.projections.add({ 
    				          id:'projections_'+i, 
    				          geometry:{ shape:'cube', x:50, y:50, z:50 }, 
    	                rotation:{ x:30, y:30, z:0 },
    				          material:{ 
    				            type: 'phong',
    				            color:0xFF0000, 
    				          },
    				        }, { poi_id: 'poi_'+i });

  			          awe.povs.update({
  			            where: {
  			              id: 'default'
  			            }
  			          });

  	          	       
  	          	   }



  	            	
  	            	
  	            	var device_type = awe.device_type();
  	              var browser_unsupported = false;
  	              if (device_type != 'android') {
  	                browser_unsupported = true;
  	              } else if (!navigator.userAgent.match(/chrome|firefox/i)) {
  	                browser_unsupported = true;
  	              }
  	              if (browser_unsupported) {
  	                document.body.innerHTML = '<p>This demo currently requires a standards compliant Android browser (e.g. Chrome M33).</p>';
  	                return;
  	              }

  	              // setup and paint the scene
  				        window.awe.setup_scene();
  				
  	              // setup some code to handle when an object is clicked/tapped
  	              window.addEventListener('object_clicked', function(e) { 
  	                var p = awe.projections.view(e.detail.projection_id);
  	                awe.projections.update({ // rotate clicked object by 180 degrees around x and y axes over 10 seconds
  	                  data:{
  	                    animation: {
  	                      duration: 10,
  	                    },
  	                    rotation:{ y: p.rotation.y+180, x: p.rotation.x+180 }
  	                  },
  	                  where:{ id:e.detail.projection_id }
  	                });
  	              }, false);

  	  	          	   startGeolocation();

 	  	            	
  				        
  	            },
  	          },
  	          { // else create a fallback
  	            capabilities: [],
  	            files: [],
  	            success: function() { 
  	            	  window.alert("ready awe error");
//  	              document.body.innerHTML = '<p>This demo currently requires a standards compliant mobile browser (e.g. Firefox on Android). NOTE: iOS does not currently support WebGL or WebRTC and has not implemented the DeviceOrientation API correctly. Please see <a href="http://lists.w3.org/Archives/Public/public-geolocation/2014Jan/0000.html">this post to the W3C GeoLocation Working Group</a> for more detailed information.</p>';
  	              return;
  	            },
  	          },
  	        ]);
  	      }
  	    });
  	  });

  	*/
  	
//    window.alert("fin");
  	
  	
  	
  	
  	
	    window.awe.init({
	  	      // automatically detect the device type
	  	      device_type: awe.AUTO_DETECT_DEVICE_TYPE,
	  	      // populate some default settings
	  	      settings: {
	  	      	container_id: 'container',
	  	        fps: 30,
	  	        default_camera_position: { x:0, y:0, z:0 },
	  	        default_lights:[
	  	          {
	  	            id: 'point_light',
	  	            type: 'point',
	  	            color: 0xFFFFFF
	  	          },
	  	        ],
	  	      },
	  	      ready: function() {
//	  	    	  window.alert("ready awe");
	  	        // load js files based on capability detection then setup the scene if successful
	  	        awe.util.require([
	  	          {
	  	            capabilities: ['gum','gyro','webgl'],
	  	            files: [ 
	  	              [ 'js/awe-standard-dependencies.js', 'js/awe-standard.js' ], // core dependencies for this app 
	  	              'js/awe-standard-window_resized.js', // window resize handling plugin
	  	              'js/awe-standard-object_clicked.js', // object click/tap handling plugin
//	  	              'js/awe.geo_ar.js', // geo ar plugin
	  	            ],
	  	            success: function() { 
//	  	          	  window.alert("ready awe success");
	  	              // limit demo to supported devices
	  	              // NOTE: only Chrome and Firefox has implemented the DeviceOrientation API in a workable way
	  	              //       so for now we are excluding all others to make sure your first experience is a happy one

	  	            	
	  	            	
	  	            	
//	  	  	        window.awe.setup_scene();


	  	            	
	  	            	
	  	            	var device_type = awe.device_type();
	  	              var browser_unsupported = false;
	  	              if (device_type != 'android') {
	  	                browser_unsupported = true;
	  	              } else if (!navigator.userAgent.match(/chrome|firefox/i)) {
	  	                browser_unsupported = true;
	  	              }
	  	              if (browser_unsupported) {
	  	                document.body.innerHTML = '<p>This demo currently requires a standards compliant Android browser (e.g. Chrome M33).</p>';
	  	                return;
	  	              }

	  	              // setup and paint the scene
//	  				        window.awe.setup_scene();
	  				
	  	              // setup some code to handle when an object is clicked/tapped
/*	  	              window.addEventListener('object_clicked', function(e) { 
	  	                var p = awe.projections.view(e.detail.projection_id);
	  	                awe.projections.update({ // rotate clicked object by 180 degrees around x and y axes over 10 seconds
	  	                  data:{
	  	                    animation: {
	  	                      duration: 10,
	  	                    },
	  	                    rotation:{ y: p.rotation.y+180, x: p.rotation.x+180 }
	  	                  },
	  	                  where:{ id:e.detail.projection_id }
	  	                });
	  	              }, false);

*/
	 	  	            	
	  				        
	  	            },
	  	          },
	  	          { // else create a fallback
	  	            capabilities: [],
	  	            files: [],
	  	            success: function() { 
	  	            	  window.alert("ready awe error");
//	  	              document.body.innerHTML = '<p>This demo currently requires a standards compliant mobile browser (e.g. Firefox on Android). NOTE: iOS does not currently support WebGL or WebRTC and has not implemented the DeviceOrientation API correctly. Please see <a href="http://lists.w3.org/Archives/Public/public-geolocation/2014Jan/0000.html">this post to the W3C GeoLocation Working Group</a> for more detailed information.</p>';
	  	              return;
	  	            },
	  	          },
	  	        ]);
//		    	  window.alert("ready awe finnnnnn");

	  	      }
	  	    });  	
    
});	


/*document.addEventListener("deviceready", onDeviceReady, false);

//Cordova is loaded and it is now safe to call Cordova methods
//
function onDeviceReady() {
	window.alert("ondeviceready2");
	$(document).bind('backbutton', function(e){
		e.preventDefault();
		var r=window.confirm("Va a salir de la aplicación");
		if (r == true)
		  {
			navigator.app.exitApp();
		  }
		else
		  {
		  }
	});
	$(document).bind('menubutton', function(e){
		e.preventDefault();
		$( ".jqm-navmenu-panel" ).panel( "toggle" );
	});
}

*/

