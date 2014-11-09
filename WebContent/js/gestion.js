$(document).ready(function() {
// The root URL for the RESTful services
//var rootURL = "http://192.168.1.34:8080/pfc/rest/pois";
var rootURL = $.globalVariables.urlBase;
//	var rootURL = "http://localhost:8080/pfc/rest/pois";

var currentPoi;

// Retrieve poi list when application starts 
findAll();

// Nothing to delete in initial application state
$('#btnDelete').hide();

// Register listeners
$('#btnSearch').click(function() {
	search($('#searchKey').val());
	return false;
});

// Trigger search when pressing 'Return' on search key input field
$('#searchKey').keypress(function(e){
	if(e.which == 13) {
		search($('#searchKey').val());
		e.preventDefault();
		return false;
    }
});

$('#btnAdd').click(function() {
	window.alert("dentro de add");
	newPoi();
	return false;
});

$('#btnSave').click(function() {
	if ($('#poiId').val() == '')
		addPoi();
	else
		updatePoi();
	return false;
});

$('#btnDelete').click(function() {
	deletePoi();
	return false;
});

function poiclick(){
$('#poiList a').on('click', function() {
//$('#poiList a').click(function() {
	findById($(this).data('identity'));
	return false;
});
}

poiclick();


function search(searchKey) {
	if (searchKey == '') 
		findAll();
	else
		findByTitulo(searchKey);
}

function newPoi() {
	$('#btnDelete').hide();
	currentPoi = {};
	renderDetails(currentPoi); // Display empty form
}

function findAll() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", // data type of response
		success: renderList
	});
}

function findByTitulo(searchKey) {
	console.log('findByTitulo: ' + searchKey);
	$.ajax({
		type: 'GET',
		url: rootURL + '/search/' + searchKey,
		dataType: "json",
		success: renderList 
	});
}

function findById(id) {
	console.log('findById: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.titulo);
			currentPoi = data;
			renderDetails(currentPoi);
		}
	});
}

function addPoi() {
	console.log('addPoi');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL,
		dataType: "json",
		data: formToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Poi created successfully');
			$('#btnDelete').show();
			$('#poiId').val(data.id);
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('addPoi error: ' + textStatus);
		}
	});
}

function updatePoi() {
	console.log('updatePoi');
	$.ajax({
		type: 'PUT',
		contentType: 'application/json',
		url: rootURL + '/' + $('#poiId').val(),
		dataType: "json",
		data: formToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Poi updated successfully');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updatePoi error: ' + textStatus);
		}
	});
}

function deletePoi() {
	console.log('deletePoi');
	$.ajax({
		type: 'DELETE',
		url: rootURL + '/' + $('#poiId').val(),
		success: function(data, textStatus, jqXHR){
			alert('Poi deleted successfully');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('deletePoi error');
		}
	});
}

function renderList(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);

	$('#poiList li').remove();
	$.each(list, function(index, poi) {
		$('#poiList').append('<li><a href="#" data-identity="' + poi.id + '">'+poi.titulo+'</a></li>');
	});
	poiclick();
	$(':jqmData(role="page")').page().trigger('create');

}

function renderDetails(poi) {
	$('#poiId').val(poi.id);
	$('#titulo').val(poi.titulo);
//	window.alert("poi.tipo "+poi.tipo);
/*	$('#tipo option[value="1"]').removeAttr('selected');
	$('#tipo option[value="2"]').removeAttr('selected');
	$('#tipo option[value="3"]').removeAttr('selected');
	$('#tipo option[value="4"]').removeAttr('selected');
	$('#tipo option[value="5"]').removeAttr('selected');
	$('#tipo option[value="'+poi.tipo+'"]').attr('selected', 'selected');*/
 	$('#tipo').val(poi.tipo);
 	$('#tipo').selectmenu('refresh', true);
//	window.alert("7777 "+$('#tipo').val());
//	window.alert("poi.tipo2222 "+$('#tipo').val());
//	window.alert("poi.tipo4444 "+$('#tipo option:selected').val());
	$('#latitud').val(poi.latitud);
	$('#longitud').val(poi.longitud);
	$('#descripcion').val(poi.descripcion);
}

// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
//	window.alert("poi.tipo333 "+$('#tipo option:selected').val());
	var poiId = $('#poiId').val();
	return JSON.stringify({
		"id": poiId == "" ? null : poiId, 
		"titulo": $('#titulo').val(), 
		"tipo": $('#tipo').val(),
//		"tipo": $('#tipo option:selected').val(),
		"latitud": $('#latitud').val(),
		"longitud": $('#longitud').val(),
		"descripcion": $('#descripcion').val()
		});
}
});	

