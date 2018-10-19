/* Library - General Purpose Functions */

function write_to_element(element_id, content) {
	//alert(element_id);
	document.getElementById(element_id).innerHTML = content;
}


function array_search(needle, haystack) {
	if (haystack.length == 0) { return false; }
	for (var i = 0; i < haystack.length; i++) {
		if (needle == haystack[i]) { return true; }
	}
	return false;
}

function random_number(min, max) {
	
	// this function returns a random number in the range from min to max
	var range = Math.abs(max - min) + 1;
	var number = Math.floor(range*Math.random());
	if (number == range) { number = number - 1; }
	return number + Math.min(max,min);
	
}

function random_element(this_array) {

	// this function returns a random element from an array
	var n = random_number(0, (this_array.length - 1));
	return this_array[n];

}

function set_element_style(element_id, style_name, style_value) {
	document.getElementById(element_id).style[style_name] = style_value;
}

function get_field_value_by_name(element_name) {

	// warning... if result is an integer, you'll need to cast it as such
	var these_values = new Array();
	var element_list = document.getElementsByTagName('input');
	for (var i = 0; i < element_list.length; i++) {
		if (element_list[i].name == element_name && element_list[i].checked==1) {
			these_values[these_values.length] = element_list[i].value;
		}
	}
	return these_values.join(',');

}

function get_field_value_by_id(element_id) {
	return document.getElementById(element_id).value;
}

function int_compare(a, b) {
	// this function is used to sort an array by numerical value
	return a - b;
}

function object_position_property_sort(a, b) {

	if (a.position < b.position) {
		return -1;
	} else {
		if (a.position == b.position) {
			return 0
		} else {
			return 1;
		}
	}

}

function object_event_date_property_sort(a, b) {

	if (a.event_dates < b.event_dates) {
		return -1;
	} else {
		if (a.event_dates == b.event_dates) {
			return 0
		} else {
			return 1;
		}
	}

}

function break_md_array(md_array, md_index) {
	
	// multi dimensional array, multi dimensional index
	// break the $index of the multidimensional array into its own array

	var i;

	new_array = new Array();
	
	for (i = 0; i < md_array.length; i++) {
	
		new_array[i] = md_array[i][md_index];
	
	}
	
	return new_array;

}


function array_similarity(array_1, array_2) {

	// returns the number of equal (value and position) items in two arrays

	var i;
	var s = 0;
			
	if (array_1.length != array_2.length) {
		// arrays are not the same length
		return -1;
	}
	
	for (i = 0; i < array_1.length; i++) {
		if (array_1[i] == array_2[i]) {
			s++;
		}
	}
	
	return s;

}


box_and_date_content = ''
+ '<div id="box_container" style="visibility: hidden;">'
+ '	<div id="box1" style="left: 10%; top:40px;" class="box">'
+ '		EVENT 1'
+ '	</div>'
+ '	<div id="box2" style="left: 20%; top:40px;" class="box">'
+ '		EVENT 2'
+ '	</div>'
+ '	<div id="box3" style="left: 30%; top:40px;" class="box">'
+ '		EVENT 3'
+ '	</div>'
+ '	<div id="box4" style="left: 40%; top:40px;" class="box">'
+ '		EVENT 4'
+ '	</div>'
+ '	<div id="box5" style="left: 50%; top:40px;" class="box">'
+ '		EVENT 5'
+ '	</div>'
+ '	<div id="box6" style="left: 60%; top:40px;" class="box">'
+ '		EVENT 6'
+ '	</div>'
+ '	<div id="box7" style="left: 70%; top:40px;" class="box">'
+ '		EVENT 7'
+ '	</div>'
+ '	<div id="box8" style="left: 80%; top:40px;" class="box">'
+ '		EVENT 8'
+ '	</div>'
+ '</div>'
+ '<div id="date_container" style="visibility: hidden;">'
+ '	<div id="date1" style="left: 10%; top:150px;" class="date">'
+ '		DATE1'
+ '	</div>'
+ '	<div id="date2" style="left: 20%; top:150px;" class="date">'
+ '		DATE2'
+ '	</div>'
+ '	<div id="date3" style="left: 30%; top:150px;" class="date">'
+ '		DATE3'
+ '	</div>'
+ '	<div id="date4" style="left: 40%; top:150px;" class="date">'
+ '		DATE4'
+ '	</div>'
+ '	<div id="date5" style="left: 50%; top:150px;" class="date">'
+ '		DATE5'
+ '	</div>'
+ '	<div id="date6" style="left: 60%; top:150px;" class="date">'
+ '		DATE6'
+ '	</div>'
+ '	<div id="date7" style="left: 70%; top:150px;" class="date">'
+ '		DATE7'
+ '	</div>'
+ '	<div id="date8" style="left: 80%; top:150px;" class="date">'
+ '		DATE8'
+ '	</div>'
+ '</div>'
+ '';

game_screen = ''
+ '<div id="name_container" style="top:0px; width: 100%;">'
+ '	<table border="0" width="100%">'
+ '		<tr>'
+ '		<td width="20%" valign="top" align="left"><span id="p1_name"></span> - <span id="p1_score"></span></td>'
+ '		<td width="60%" valign="top" align="center">'
+ '			<strong><input type="button" id="new_game_button" value="New Game?" onclick="new_game()">'
+ '			<span id="turn_timer"></span> '
+ '			<input type="button" id="check_answer_button" value="Check Answer" onclick="check_answer(\'\')"></strong>'
+ '		</td>'
+ '		<td width="20%" valign="top" align="right"><span id="p2_name"></span> - <span id="p2_score"></span></td>'
+ '		</tr>'
+ '	</table>'
+ '</div>'
+ '<div id="box_and_date_container">'
+ '</div>'
+ '';


setup_screen = ''
+ '<table summary="Intro Screen" border="0" width="750" cellspacing="0" cellpadding="0" align="center">'
+ '	<tr><td valign="top">'
+ '	<p><big><strong>Welcome to the Kitty Hawk Timeline!</strong></big> <p>Get ready to take the historic event challenge!</p>'
+ '	</td><td valign="top">'
+ '	<p><strong>Players:</strong><br>'
+ '	<label><input type="radio" name="players" value="1" checked> One Player</label><br>'
+ '	<label><input type="radio" name="players" value="2"> Two Players</label></p>'
+ '	</td><td valign="top">'
+ '	<p><strong>Level:</strong><br>'
+ '	<label><input type="radio" name="level" value="us-easy" checked> Pre-1800s</label><br>'
+ '	<label><input type="radio" name="level" value="us-hard"> 1800s and Beyond </label><br>'
+ '	<label><input type="radio" name="level" value="world">World History</label></p>'
+ '	</td></tr>'
+ '	<tr><td colspan="3" align="center">'
+ '	<p><input type="button" class="submitbutton" value="Begin Game" onclick="start_game();">'
+ '	</p>'
+ '	</td></tr>'
+ '</table>'
+ '<img src="https://userscontent2.emaze.com/images/68d214f3-cd29-44bb-bb95-a841a5330d01/e58a9f96cd909877d1c438849a2e1e55.png"/>';