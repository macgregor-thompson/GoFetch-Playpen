$(document).ready(function(){
	
		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "33.47", "longitude":"-82.00", "icon": "img/map-marker.png", "baloon_text": '<strong>PLANAR</strong> 1110 Bates Avenue Los Angeles, CA 90029, US'}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 9,
			center	: 'Augusta, GA 30909, United States',
			markers	: myMarkers
		});

	});