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

http://www.whoi.edu/marine/ndsf/cgi-bin/NDSFutility.cgi?form=0&from=LatLon&to=XY -->Para la localización utilidad

   function relativePosition(i) {
	var pinLat = $.globalVariables.pin[i].latitud;
	var pinLng = $.globalVariables.pin[i].longitud;
	var origin = {};

	origin = {
		slat : pinLat,
		slon : pinLng,
		coord_system : 1,
		olat : myLat,
		olon : myLng,
		xoffset_mtrs : 0,
		yoffset_mtrs : 0,
		rotation_angle_degs : 0,
		rms_error : 0
	};

	var ll2xy = translate_coordinates(LL_TO_XY, origin);

	$.globalVariables.pin[i]['distancex'] = (ll2xy.x.toFixed(1));
	$.globalVariables.pin[i]['distancez'] = (ll2xy.y.toFixed(1));
	awe.pois.add({
		id : 'poi_' + ($.globalVariables.pin[i].id),
		position : {
			x : ($.globalVariables.pin[i]['distancex']),
			y : 0,
			z : -$.globalVariables.pin[i]['distancez']
		}
	});
	var tamX = 5;
	var tamY = 5;
	var tamZ = 5;

	var distanceX = $.globalVariables.pin[i]['distancex'];
	var distanceZ = $.globalVariables.pin[i]['distancez'];

	var distanceXAbsolute = Math.abs(distanceX);
	var distanceZAbsolute = Math.abs(distanceZ);

	if (distanceXAbsolute > distanceZAbsolute) {
		tamX = (distanceXAbsolute / 4);
		tamY = (distanceXAbsolute / 4);
		tamZ = (distanceXAbsolute / 4);
	} else {
		tamX = (distanceZAbsolute / 4);
		tamY = (distanceZAbsolute / 4);
		tamZ = (distanceZAbsolute / 4);
	}
	// window.alert("tamx "+tamX);
	awe.projections.add({
		id : 'projections_' + $.globalVariables.pin[i].id,
		geometry : {
			shape : 'cube',
			x : tamX,
			y : tamY,
			z : tamZ
		},
		rotation : {
			x : 30,
			y : 30,
			z : 0
		},
		material : {
			type : 'phong',
			color : 0xFF0000,
		},
	}, {
		poi_id : 'poi_' + ($.globalVariables.pin[i].id)
	});

	awe.scene_needs_rendering = 1;

}



awe.events.add([ {
	id : 'click_object',
	device_types : {
		pc : 1,
		android : 1
	},
	register : function(handler) {
		window.addEventListener('object_clicked', handler, false);
	},
	unregister : function(handler) {
		window.removeEventListener('object_clicked', handler, false);
	},
	handler : function(e) {
		var p = awe.projections.view(e.detail.projection_id);
		awe.projections.update({ // rotate clicked object by 180 degrees around x and y axes over 10 seconds
			data : {
				animation : {
					duration : 10,
				},
				rotation : {
					y : p.rotation.y + 180,
					x : p.rotation.x + 180
				}
			},
			where : {
				id : e.detail.projection_id
			}
		});

		var options = {
			divForm : "container",
			divFormSub : "centralContent",
		};

		var containerJquery = $('#' + options.divForm);
		var centralContentJquery = $('#' + options.divFormSub);
		var divTextToContain = $('#' + options.divFormSub + " #texto_"
				+ e.detail.projection_id);

		if (divTextToContain.get(0)) {
			return;
		}
		var text2 = document.createElement('div');
		text2.innerHTML = "" + getDetail(e.detail.projection_id);
		text2.id = "texto_" + e.detail.projection_id;

		function textOnClick(e) {
			$(e.target).remove();

		}

		text2.style.top = (containerJquery.height() - 150) + 'px';
		centralContentJquery.append(text2);
		$('#' + text2.id).addClass('text2');
		$('#' + text2.id).css('min-width', (containerJquery.width()) + 'px');
		$('#' + text2.id).on('click', textOnClick);
	}
} ]);



function getDetail(poiId) {
	var textDetail = '';
	var list = $.globalVariables.pin == null ? []
			: ($.globalVariables.pin instanceof Array ? $.globalVariables.pin
					: [ $.globalVariables.pin ]);
	poiId = poiId.substring('projections_'.length);
	$.each(list, function(index, poi) {
		if (poi.id == poiId) {
			textDetail += poi.titulo + ": " + poi.descripcion
					+ "<br> latitud: " + poi.latitud + " longitud: "
					+ poi.longitud + "<br> distancex: " + poi.distancex
					+ " distancez: " + poi.distancez;
			;
		}
	});
	return textDetail;
}




