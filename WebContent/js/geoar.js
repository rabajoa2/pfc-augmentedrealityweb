function geoar(awe) {
//	window.alert("dentro de awegeoar");
/*    var poiTmp=awe.pois.view({id: 'poi_0'});
    if (poiTmp){
        awe.pois.delete({id: 'poi_0'});    	
    }*/
    awe.plugins.delete({id: 'geo_ar'});
/*    awe.pois.delete({id: 'poi_1'});
    awe.pois.delete({id: 'poi_2'});
    awe.pois.delete({id: 'poi_3'});
    awe.projections.delete({id: 'projections_0'});
    awe.projections.delete({id: 'projections_1'});
    awe.projections.delete({id: 'projections_2'});
    awe.projections.delete({id: 'projections_3'});*/
	var container = document.getElementById('container');
//	window.alert("dentro de awegeoar container"+container);
	var background_video;
	
/*    	var pin = [
	          	       {"titulo":"New York", "latitud":"40.714353", "longitud":"-74.005973"},
	          	       {"titulo":"San Francisco", "latitud":"37.77493", "longitud":"-122.419416"},
	          	       {"titulo":"Seattle", "latitud":"47.60621", "longitud":"-122.332071"},
	          	       {"titulo":"Los Angeles", "latitud":"34.052234", "longitud":"-118.243685"},
	          	       {"titulo":"Denver", "latitud":"39.737567", "longitud":"-104.984718"},
	          	       {"titulo":"Chicago", "latitud":"41.878114", "longitud":"-87.629798"},
	          	       {"titulo":"Austin", "latitud":"30.267153", "longitud":"-97.743061"},
	          	       {"titulo":"Miami", "latitud":"25.788969", "longitud":"-80.226439"},
	          	       {"titulo":"Pittsburg", "latitud":"40.440625", "longitud":"-79.995886"},
	          	       {"titulo":"Phoenix", "latitud":"33.448377", "longitud":"-112.074037"},
	          	       {"titulo":"Atlanta", "latitud":"33.748995", "longitud":"-84.387982"},
	          	       {"titulo":"Kansas City", "latitud":"39.099727", "longitud":"-94.578567"}
	          	   	];*/
	
	
	          	   var myLat = 0, myLng = 0;
	          	   
	          	   
		    	   function getDetail(poiId){
		    		   var textDetail='';
		    			var list = $.globalVariables.pin == null ? [] : ($.globalVariables.pin instanceof Array ? $.globalVariables.pin : [$.globalVariables.pin]);
		    			poiId=poiId.substring('projections_'.length);
//		    			window.alert("poiId "+poiId);
		    			$.each(list, function(index, poi) {
	    					if (poi.id==poiId){
	    						textDetail+=poi.titulo+": "+poi.descripcion+"<br> latitud: "+poi.latitud+" longitud: "+poi.longitud+
	    						"<br> distancex: "+poi.distancex+" distancez: "+poi.distancez;;
	    					}
		    			});
		    			return textDetail;
		    	   }

		    function actualizarPois(){
	    	   function renderList(data) {
	    			// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	    			var listTotal = data == null ? [] : (data instanceof Array ? data : [data]);

	    			var list= [];
	    			var tipos= $.globalVariables.capas;
	    			$.each(listTotal, function(index, poi) {
//	    				$('#poiList').append('<li><a href="#" data-identity="' + poi.id + '">'+poi.titulo+'</a></li>');
	    				$.each(tipos, function(indexTipo, tipo) {
//	    					window.alert("poi.tipo "+poi.tipo+" tipo "+tipo);
	    					if (poi.tipo==tipo){
	    						list.push(poi);
	    					}
	    				});
	    			});
	    			$.globalVariables.pin=list;
	    			
	    			var nombresPois='';
	    			for (var i in list){
	    				nombresPois+=' '+list[i].titulo;
	    			}
//	    			window.alert("nombres pois findAllRemoto "+nombresPois);

	    		}
	    	   
	    	   function findAllLocal(){
	    			var listTotal = $.globalVariables.pinTodos == null ? [] : ($.globalVariables.pinTodos instanceof Array ? $.globalVariables.pinTodos : [$.globalVariables.pinTodos]);
	    			
	    			var list= [];
	    			var tipos= $.globalVariables.capas;
	    			$.each(listTotal, function(index, poi) {
//	    				$('#poiList').append('<li><a href="#" data-identity="' + poi.id + '">'+poi.titulo+'</a></li>');
	    				$.each(tipos, function(indexTipo, tipo) {
//	    					window.alert("poi.tipo "+poi.tipo+" tipo "+tipo);
	    					if (poi.tipo==tipo){
	    						list.push(poi);
	    					}
	    				});
	    			});
	    			$.globalVariables.pin=list;
	    			
	    			var nombresPois='';
	    			for (var i in list){
	    				nombresPois+=' '+list[i].titulo;
	    			}
//	    			window.alert("nombres pois findAllLocal "+nombresPois);

	    	   }
	    	   
	    	   function findAll() {
	    			console.log('findAll');
	    			$.ajaxSetup({
	    				async: false
	    			});
	    		
	    			$.ajax({
	    				type: 'GET',
	    				url: $.globalVariables.urlBase,
	    				dataType: "json", // data type of response
	    				success: renderList,
	    				error: function(xhr, status, error) {
//	    					  var err = eval("(" + xhr.responseText + ")");
//	    					  alert(err.Message);
//	    					window.alert("error remoto usando local");
	    					  findAllLocal();
	    				}
	    			});

	    			$.ajaxSetup({
	    				async: true
	    			});
	    		}
	    	   
	    	   findAll();

	       }

	       function startGeolocation(){
    	       var options = { timeout: 30000 };
    	       $.globalVariables.watchGeoID = navigator.geolocation.watchPosition(onGeoSuccess, onGeoError, options);
//    	       window.alert("estoy en startGeolocation"+$.globalVariables.watchGeoID);
    	   }
    	           
    	   // Stop watching the geolocation
    	   function stopGeolocation() {
//    		   window.alert("estoy en stopGeolocation "+$.globalVariables.watchGeoID);
    	       if ($.globalVariables.watchGeoID!=null) {
//        		   window.alert("estoy en stopGeolocation antes de borrar"+$.globalVariables.watchGeoID);
    	           navigator.geolocation.clearWatch($.globalVariables.watchGeoID);
    	           $.globalVariables.watchGeoID = null;
    	       }
    	   }
    	           
    	   // onSuccess: Get the current location
    	   function onGeoSuccess(position) {
//    	   	window.alert("onGeoSuccess"+position);
//    	       document.getElementById('geolocation').innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude;
    	       myLat = position.coords.latitude;
    	       myLng = position.coords.longitude;

    	       var poisTmp=awe.pois.list();
			   for (var i in poisTmp){
					var dataTmp=poisTmp[i];
					awe.pois.delete({id: dataTmp.id});
			   }
			   
			   actualizarPois();
    	       for(var i=0; i< $.globalVariables.pin.length; i++){
/*    	    	   if (i==0){
    	    		   relativePosition(i);
    	    	   }*/
	    		   relativePosition(i);
    	    	   
    	       }
    	       var proyecciones=awe.projections.list({},{});
//			   window.alert("2222"+proyecciones.size());
//    	       window.alert("proyeccciones "+$.amdump(proyecciones));
    	       var textDetail='';
    	       for(var i=0; i< $.globalVariables.pin.length; i++){
    	    	   var poi=$.globalVariables.pin[i];
					textDetail+=poi.titulo+": "+" distancex: "+poi.distancex+" distancez: "+poi.distancez+" distance "+poi.distance;
    	       }
//    	       window.alert("mylat "+myLat+"mylong "+myLng+" datos "+textDetail);
//    	       renderer.render(scene, camera);

    	   }

    	   // onError: Failed to get the location
    	   function onGeoError(msg) {
//    	       document.getElementById('log').innerHTML += "onError=.";
    		   window.alert("errorrr"+msg.message);
    	   }
    	   
    	   
    	   
   	   function relativePosition(i){
	       var pinLat = $.globalVariables.pin[i].latitud;
	       var pinLng = $.globalVariables.pin[i].longitud;
/*	       var dLat = (myLat-pinLat)* Math.PI / 180;
	       var dLon = (myLng-pinLng)* Math.PI / 180;
//	       window.alert("dLat "+dLat+" dLon "+dLon);
	       var lat1 = pinLat * Math.PI / 180;
	       var lat2 = myLat * Math.PI / 180;
//	       window.alert("lat1 "+lat1+" lat2 "+lat2);
	       var y = Math.sin(dLon) * Math.cos(lat2);
	       var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
	       bearing = Math.atan2(y, x) * 180 / Math.PI;
	       bearing = bearing + 180;
	       $.globalVariables.pin[i]['bearing'] = bearing;

	       var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//	       var distance = 3958.76 * c;
	       var distance = 3958.76 * c * 1000;
	       $.globalVariables.pin[i]['distance'] = distance;
	   	
	   	dLat=0;
	       a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	       c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//	       distance = 3958.76 * c;
	       distance = 3958.76 * c * 1000;
	       $.globalVariables.pin[i]['distancex'] = distance;

	       dLat = (myLat-pinLat)* Math.PI / 180;
	   	dLon=0;
	       a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	       c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//	       distance = 3958.76 * c;
	       distance = 3958.76 * c * 1000;
	       $.globalVariables.pin[i]['distancez'] = distance;
//	       if (i==0){
//	   		window.alert("distancex "+$.globalVariables.pin[i]['distancex']+" distancez "+$.globalVariables.pin[i]['distancez']);
//	       }
//	   		window.alert("distancex "+$.globalVariables.pin[i]['distancex']+" distancez "+$.globalVariables.pin[i]['distancez']);
//        awe.pois.add({ id:'poi_'+$.globalVariables.pin[i].id, position: { x:$.globalVariables.pin[i]['distancex'], y:0, z:-$.globalVariables.pin[i]['distancez'] } });
//        awe.pois.add({ id:'poi_'+($.globalVariables.pin[i].id), position: { x:($.globalVariables.pin[i]['distancex']%10000), y:0, z:-100 } });
//	        awe.pois.add({ id:'poi_'+($.globalVariables.pin[i].id), position: { x:10, y:0, z:-1000 } });
	       
	       if (myLat < pinLat)
	    	   $.globalVariables.pin[i]['distancez'] *= -1;
	       if (myLng > pinLng)
	    	   $.globalVariables.pin[i]['distancex'] *= -1;
		*/	
			
	         var   origin={};

	         origin={slat:pinLat, slon:pinLng,coord_system:1,
	                 olat:myLat,olon:myLng,xoffset_mtrs:0,
	                 yoffset_mtrs:0,
	                 rotation_angle_degs:0,rms_error:0};
	         
	         var ll2xy= translate_coordinates(LL_TO_XY,
	        		 origin); 
	       
	         $.globalVariables.pin[i]['distancex']=(ll2xy.x.toFixed(1));
	         $.globalVariables.pin[i]['distancez']=(ll2xy.y.toFixed(1));
	       
	       
	       //ponemos la z negativa porque la camara mira hacia la posicion negativa
        awe.pois.add({ id:'poi_'+($.globalVariables.pin[i].id), position: { x:($.globalVariables.pin[i]['distancex']), y:0, z:-$.globalVariables.pin[i]['distancez'] } });
        
        //tamanio cube de 5m x5m x5m a una distancia de 20m en x y 20m en z
        //la relacion es 20/5=4m luego a 1000m tenemos que coger el mayor de la x y la z y hacer 1000/4=250m y poner este tamanio
	        //al cubo en x, y y z
	        
/*        var tamX=5;
        var tamY=5;
        var tamZ=5;*/
        var tamX=2;
        var tamY=2;
        var tamZ=2;
	        
	        var distanceX=$.globalVariables.pin[i]['distancex'];
	        var distanceZ=$.globalVariables.pin[i]['distancez'];
	        
	        var distanceXAbsolute=Math.abs(distanceX);
	        var distanceZAbsolute=Math.abs(distanceZ);
	        

/*	        if (distanceXAbsolute>distanceZAbsolute){
	        	tamX=(distanceXAbsolute/4);
	        	tamY=(distanceXAbsolute/4);
	        	tamZ=(distanceXAbsolute/4);
	        }else{
	        	tamX=(distanceZAbsolute/4);
	        	tamY=(distanceZAbsolute/4);
	        	tamZ=(distanceZAbsolute/4);
	        }*/
	        if (distanceXAbsolute>distanceZAbsolute){
	        	tamX=(distanceXAbsolute/8);
	        	tamY=(distanceXAbsolute/8);
	        	tamZ=(distanceXAbsolute/8);
	        }else{
	        	tamX=(distanceZAbsolute/8);
	        	tamY=(distanceZAbsolute/8);
	        	tamZ=(distanceZAbsolute/8);
	        }
//	        window.alert("tamx "+tamX);
	        
	        var icono="iconotipo"+$.globalVariables.pin[i].tipo+".png";
	        
	        awe.projections.add({ 
	          id:'projections_'+$.globalVariables.pin[i].id, 
	          geometry:{ shape:'cube', x:tamX, y:tamY, z:tamZ }, 
//	          texture:{ path:'restaurante2.png' }, 
	          texture:{ path: icono }, 
	          rotation:{ x:30, y:30, z:0 },
	          material:{ 
	            type: 'phong',
	            color:0xFFFFFF, 
	          },
	        }, { poi_id: 'poi_'+($.globalVariables.pin[i].id) });

//          awe.povs.update({
//        	  data: {
//                  euler_order: 'YZX',
//                  rotation: {
//                    x: 0,
//                    y: 0,
//                    z: 0,
//                  }
//                },
//              where: {
//            	  id: 'default'
//              }
//          });

	        awe.scene_needs_rendering = 1;
	       
	   }
	   
    	   
    	   

/*    	   function relativePosition(i){
    	       var pinLat = $.globalVariables.pin[i].latitud;
    	       var pinLng = $.globalVariables.pin[i].longitud;
    	       var dLat = (myLat-pinLat)* Math.PI / 180;
    	       var dLon = (myLng-pinLng)* Math.PI / 180;
//    	       window.alert("dLat "+dLat+" dLon "+dLon);
    	       var lat1 = pinLat * Math.PI / 180;
    	       var lat2 = myLat * Math.PI / 180;
//    	       window.alert("lat1 "+lat1+" lat2 "+lat2);
    	       var y = Math.sin(dLon) * Math.cos(lat2);
    	       var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
    	       bearing = Math.atan2(y, x) * 180 / Math.PI;
    	       bearing = bearing + 180;
    	       $.globalVariables.pin[i]['bearing'] = bearing;

    	       var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    	       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//    	       var distance = 3958.76 * c;
    	       var distance = 3958.76 * c * 1000;
    	       $.globalVariables.pin[i]['distance'] = distance;
    	   	
    	   	dLat=0;
    	       a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    	       c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//    	       distance = 3958.76 * c;
    	       distance = 3958.76 * c * 1000;
    	       $.globalVariables.pin[i]['distancex'] = distance;

    	       dLat = (myLat-pinLat)* Math.PI / 180;
    	   	dLon=0;
    	       a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    	       c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//    	       distance = 3958.76 * c;
    	       distance = 3958.76 * c * 1000;
    	       $.globalVariables.pin[i]['distancez'] = distance;
//    	       if (i==0){
//    	   		window.alert("distancex "+$.globalVariables.pin[i]['distancex']+" distancez "+$.globalVariables.pin[i]['distancez']);
//    	       }
//   	   		window.alert("distancex "+$.globalVariables.pin[i]['distancex']+" distancez "+$.globalVariables.pin[i]['distancez']);
//	        awe.pois.add({ id:'poi_'+$.globalVariables.pin[i].id, position: { x:$.globalVariables.pin[i]['distancex'], y:0, z:-$.globalVariables.pin[i]['distancez'] } });
//	        awe.pois.add({ id:'poi_'+($.globalVariables.pin[i].id), position: { x:($.globalVariables.pin[i]['distancex']%10000), y:0, z:-100 } });
//   	        awe.pois.add({ id:'poi_'+($.globalVariables.pin[i].id), position: { x:10, y:0, z:-1000 } });
    	       
    	       if (myLat < pinLat)
    	    	   $.globalVariables.pin[i]['distancez'] *= -1;
    	       if (myLng > pinLng)
    	    	   $.globalVariables.pin[i]['distancex'] *= -1;
    			
    			
	        awe.pois.add({ id:'poi_'+($.globalVariables.pin[i].id), position: { x:($.globalVariables.pin[i]['distancex']%10000), y:0, z:-$.globalVariables.pin[i]['distancez'] } });
	        
	        //tamanio cube de 5m x5m x5m a una distancia de 20m en x y 20m en z
	        //la relacion es 20/5=4m luego a 1000m tenemos que coger el mayor de la x y la z y hacer 1000/4=250m y poner este tamanio
   	        //al cubo en x, y y z
   	        
   	        var tamX=5;
   	        var tamY=5;
   	        var tamZ=5;
   	        
   	        var distanceX=$.globalVariables.pin[i]['distancex'];
   	        var distanceZ=$.globalVariables.pin[i]['distancez'];
   	        

   	        if (distanceX>distanceZ){
   	        	tamX=(distanceX/4);
   	        	tamY=(distanceX/4);
   	        	tamZ=(distanceX/4);
   	        }else{
   	        	tamX=(distanceZ/4);
   	        	tamY=(distanceZ/4);
   	        	tamZ=(distanceZ/4);
   	        }
//   	        window.alert("tamx "+tamX);
		        awe.projections.add({ 
		          id:'projections_'+$.globalVariables.pin[i].id, 
		          geometry:{ shape:'cube', x:tamX, y:tamY, z:tamZ }, 
            rotation:{ x:30, y:30, z:0 },
		          material:{ 
		            type: 'phong',
		            color:0xFF0000, 
		          },
		        }, { poi_id: 'poi_'+($.globalVariables.pin[i].id) });

//	          awe.povs.update({
//	        	  data: {
//	                  euler_order: 'YZX',
//	                  rotation: {
//	                    x: 0,
//	                    y: 0,
//	                    z: 0,
//	                  }
//	                },
//	              where: {
//	            	  id: 'default'
//	              }
//	          });

		        awe.scene_needs_rendering = 1;
    	       
    	   }
    	   
*/    	   
    	   
    	   
    stopGeolocation();
    startGeolocation();
	
	function resize_video() {
		if (background_video) {
			var video = awe.video_stream().video_element;
			var w = video.videoWidth,
				h = video.videoHeight;
			var cnt_h = container.clientHeight,
				cnt_w = container.clientWidth,
				wrapper_aspect_ratio = cnt_w / cnt_h,
				video_aspect_ratio = w / h
			
			// stretch the video to cover the background entirely and center it
			if (wrapper_aspect_ratio > video_aspect_ratio) {
				background_video.setAttribute('width', cnt_w);
				background_video.setAttribute('height', cnt_w / video_aspect_ratio);
				background_video.style.marginLeft = (-cnt_w/2)+'px';
			}
			else {
				background_video.setAttribute('height', cnt_h);
				background_video.setAttribute('width', cnt_h * video_aspect_ratio);
				background_video.style.marginLeft = (-cnt_h * video_aspect_ratio / 2)+'px';	
			}
		}
		aspectRatio = window.innerWidth / window.innerHeight;
		awe.pov().aspect = aspectRatio;
		awe.pov().updateProjectionMatrix();
		awe.renderer().setSize(window.innerWidth, window.innerHeight);
		awe.scene_needs_rendering = 1;
	}

	awe.plugins.add([{
		id: 'geo_ar',
		auto_register: true,
		register: function(plugin_data){
//			window.alert("register plugin");
			// add video stream
			awe.setup_stream();
			awe.events.add([
				{
					id: 'video_stream',
					device_types: {
						android: 1,
						pc: 1
					},
					register: function(handler) {
						window.addEventListener('gum_ready', handler, false);
					},
					unregister: function(handlerUnRegister){
						window.removeEventListener('gum_ready', handlerUnRegister, false);
						
						
					},
					handlerUnRegister: function(e){
						window.alert("dentro de handlerUnRegister");
					},
					handler: function(e) {
						var video = awe.video_stream();
						background_video = document.createElement('video');
						background_video.setAttribute('width', window.innerWidth);
						background_video.setAttribute('height', window.innerHeight);
						background_video.setAttribute('autoplay', 'true');
						background_video.style.position = 'absolute';
						background_video.style.left = '50%';
						background_video.style.marginLeft = (-window.innerWidth/2)+'px';
						background_video.style.top = '0px';
						background_video.style.zIndex = '-1';
						container.appendChild(background_video);
						awe.util.connect_stream_to_src(awe.video_stream().stream, background_video);
						background_video.addEventListener('play',resize_video, false);
            setTimeout(function() {
              resize_video();
            }, 1000);
					}
				}
			]);
			
			// toDeg() is a Number object extension courtesy http://www.movable-type.co.uk/scripts/latlong.html 
			if (typeof Number.prototype.toDeg == 'undefined') {
				Number.prototype.toDeg = function() {
					return this * 180 / Math.PI;
				};
			}
			if (typeof Number.prototype.toRad == 'undefined') {
				Number.prototype.toRad = function() {
					return this * Math.PI / 180;
				};
			}

			
			awe.events.add({
				id: 'deviceorientation',
				device_types: {
					pc: 1,
					android: 1
				},
				register: function(handler) {
					window.addEventListener('deviceorientation', handler, false);
				},
				unregister: function(handler){
					window.removeEventListener('deviceorientation', handler, false);
				},
				handler: function(e) {
					var alpha = e.alpha,
					    beta = e.beta,
              gamma = e.gamma,
              x = 0,
              y = 0,
              z = 0;
              
              
/*              var element = $('#accelerometer');
				    element.empty().html ( 'alpha: ' + alpha + '<br />' +
				                        'beta: ' + beta + '<br />' +
				                        'gamma: ' + gamma );
  */            

          if ((beta > 30 && beta < 150) || // device is generally upright (portrait)
              (beta < -30 && beta > -150)) { // device is generally upright but inverted (portrait)
//            x = beta+90;
            y = (alpha+gamma)%360;
//            z = 180;
          } else { // device is generally not-upright (landscape)
            if (gamma < 0 && gamma > -90) { // rotation below horizon
              x = -gamma-90;
            } else { // rotation above horizon
              x = 90-gamma;
            }
            y = (alpha+gamma+180)%360;
          }

          awe.povs.update({
            data: {
              euler_order: 'YZX',
              rotation: {
                x: x,
                y: y,
                z: z,
              }
            },
            where: {
              id: 'default'
            }
          });
				}
			});
			
			
			
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

			awe.events.add([
							{
								id: 'click_object',
								device_types: {
									pc: 1,
									android: 1
								},
								register: function(handler) {
									window.addEventListener('object_clicked', handler, false);
								},
								unregister: function(handler){
									window.removeEventListener('object_clicked', handler, false);
								},
								handler: function(e) {
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
									 
									 var options = {
												divForm: "container",
												divFormSub: "centralContent",
//												divFormSubParent: "maincontainer",
											};

									 var containerJquery=$('#'+options.divForm);									 
//									 window.alert("antes de append containerJquery "+containerJquery.html());
									 var centralContentJquery=$('#'+options.divFormSub);									 
//									 var containerJquery=$('#'+options.divFormSub+' #'+options.divForm);									 
//									 var mainContainerJquery=$('#'+options.divFormSubParent);									 
//									 window.alert("despues de append mainContainerJquery"+mainContainerJquery.html());
									 var divTextToContain=$('#'+options.divFormSub+" #texto_"+e.detail.projection_id);
//									 window.alert("divTextToContain "+divTextToContain.get(0));
									 
									 if(divTextToContain.get(0)){
										 return;
									 } 
									 var text2 = document.createElement('div');
//									 text2.style.position = 'absolute';
//									 text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
//									 text2.style.width = 300;
//									 text2.style.height = 300;
//									 text2.style.backgroundColor = "blue";
									 text2.innerHTML = ""+getDetail(e.detail.projection_id);
//									 text2.style.top = 200 + 'px';
//									 text2.style.class='text2';
//									 text2.style.left =200 + 'px';
									 text2.id="texto_"+e.detail.projection_id;
									 
									 function textOnClick(e){
//										 window.alert("textOnClick "+e.target.id);
										 $(e.target).remove();
										 
									 }
									 
									 text2.style.top = (containerJquery.height()-150) + 'px';
//									 text2.style['min-width'] = (containerJquery.width()) + 'px';
									 centralContentJquery.append(text2);	
//									 window.alert("antes de append containerJquery"+containerJquery.width());
//									 window.alert("antes de append centralContentJquery"+centralContentJquery.html());
									 $('#'+text2.id).addClass('text2');
									 $('#'+text2.id).css('min-width',(containerJquery.width()) + 'px');
//									 $('#'+text2.id).attr('class','text2');
									 $('#'+text2.id).on('click',textOnClick);
									}
								}
							]);

			
			
			awe.events.add([
				{
					id: 'resize_screen',
					device_types: {
						pc: 1,
						android: 1
					},
					register: function(handler) {
						window.addEventListener('resize', handler, false);
					},
					unregister: function(handler){
						window.removeEventListener('resize', handler, false);
					},
					handler: function(e) {
						resize_video();
					}
				}
			]);
              // setup and paint the scene
	        window.awe.setup_scene();
//	        window.alert("despues de setup_scene");

		},
		unregister: function(plugin_data){
//			window.alert("estoy en unregister");
			
			awe.events.delete('resize_screen');
			awe.events.delete('deviceorientation');
			awe.events.delete('video_stream');
			awe.events.delete('click_object');

//			window.alert("unregister pois.data.elements ");
//			var poisTmp=awe.pois.list({ id: "poi_" });
			var poisTmp=awe.pois.list();
//			window.alert("unregister 2222"+poisTmp);
			for (var i in poisTmp){
				var dataTmp=poisTmp[i];
//				awe.pois.delete({id: dataTmp.id});
//				window.alert("poi "+dataTmp.id);
			}
			awe.video_streams.delete({ id: 'default' });
			awe.renderers.delete({ id: 'default' });
		    awe.scenes.delete({ id: 'default' });
		    awe.povs.delete({ id: 'default' });	
		}
	}]);
}



