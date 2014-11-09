;(function($) {

$.amdump = typeof JSON != "undefined" ? JSON.stringify : function(obj) {
	  var arr = [];
	  $.each(obj, function(key, val) {
	  window.alert("key "+key);
	    var next = key + ": ";
	    next += $.isPlainObject(val) ? printObj(val) : val;
	    arr.push( next );
	  });
	  return "{ " +  arr.join(", ") + " }";
	};
	
$.amdump2 = function print_r(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
	    for(var item in arr) {
	        var value = arr[item];
	
	        if(typeof(value) == 'object') { //If it is an array,
	            dumped_text += level_padding + "'" + item + "' ...\n";
	            dumped_text += print_r(value,level+1);
	        } else {
	            dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
	        }
	    }
	} else { //Stings/Chars/Numbers etc.
	    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
	}
	
	
	
$.amreplaceCaracteres = function(name){
//		window.alert("antes name "+name);
		name=name.replace(":","\\:");
		name=name.replace(".","\\.");
//		window.alert("despues name "+name);
		return name;
	};
		
$.amsetOnEvent = function(id,onclickFunction,type){
		id=$.amreplaceCaracteres(id);
//window.alert("dentro de amsetOnEvent "+id+" type "+type);
		$('#'+id).on(type,onclickFunction);
	};	
	
$.amputButtonInNav = function(name,idButton,textoToolTip,icon){
//	name=$.amreplaceCaracteres(name);
	var button='<input type="button" class="jqm-navmenu-link" id="'+idButton+'" data-corners="false" data-theme="b" data-shadow="false" data-role="button" data-icon="'+icon+'" title="'+textoToolTip+'" data-iconpos="notext">';
	$("#"+name).append(button);
};
	

$.amloadInWrapperContent = function(toLoad) {
	
	$('#wrapper-content').hide('slow',loadContent);
	
	function hideLoader() {
	}

	function showNewContent() {
		$('#wrapper-content').show('normal',hideLoader());
		$(':jqmData(role="page")').page().trigger('create');
	}
	function loadContent() {
		$.ajaxSetup({
				async: false
		});
		
		$('#wrapper-content').empty();
		$('#wrapper-content').load(toLoad,'',showNewContent);
		
		$.ajaxSetup({
				async: true
		});
	}
}

})(jQuery);