$(document).ready(function() {

	$.each($.globalVariables.capas, function(index, tipo) {
		$('input[value="'+tipo+'"]').attr('checked','checked');
	});
	
	$('#btnSave').click(function() {
		var textDetail='';
		$.globalVariables.capas.splice(0,$.globalVariables.capas.length);
		if ($('#checkboxUniversidades').is(':checked')){
			$.globalVariables.capas.push($('#checkboxUniversidades').val());
			textDetail+='Universidades ';
		}
		if ($('#checkboxMonumentos').is(':checked')){
			$.globalVariables.capas.push($('#checkboxMonumentos').val());
			textDetail+='Monumentos ';
		}
		if ($('#checkboxRestaurantes').is(':checked')){
			$.globalVariables.capas.push($('#checkboxRestaurantes').val());
			textDetail+='Restaurantes ';
		}
		if ($('#checkboxGimnasios').is(':checked')){
			$.globalVariables.capas.push($('#checkboxGimnasios').val());
			textDetail+='Gimnasios ';
		}
		if ($('#checkboxBares').is(':checked')){
			$.globalVariables.capas.push($('#checkboxBares').val());
			textDetail+='Bares ';
		}
	
		if ($.globalVariables.capas.length==0){
//			$.globalVariables.capas.push($('#checkboxUniversidades').val());
		}
//		window.alert("capas "+$.globalVariables.capas);
		$('#status').empty().html('Se ha guardado correctamente '+textDetail)
		return false;
	});


});	

