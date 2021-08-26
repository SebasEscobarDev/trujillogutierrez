
			function initMap() {
			  // Styles a map in night mode.
			  var map = new google.maps.Map(document.getElementById('google-map'), {
				center: {lat: 5.064341, lng: -75.507727},
				zoom: 13.8,
				mapTypeControl: false,
				fullscreenControl: false,
				streetViewControl: false,
		 //        markers: [
				  // 	{
				  // 		address: "Manizales, Colombia",
				  // 		html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;">Hi, we\'re <span>Envato</span></h4><p class="nobottommargin">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.</p></div>',
				  /*
			  icon: {
							  image: "images/map-icon-red.png",
							  iconsize: [32, 39],
							  iconanchor: [32,39]
						  }
	  */
				  // 	}
				  // ],
	  
				styles: [
		  {
			  "featureType": "water",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "color": "#d3d3d3"
				  },
				  {
					  "visibility": "off"
				  }
			  ]
		  },
		  {
			  "featureType": "transit",
			  "stylers": [
				  {
					  "color": "#808080"
				  },
				  {
					  "visibility": "off"
				  }
			  ]
		  },
		  {
			  "featureType": "road.highway",
			  "elementType": "geometry.stroke",
			  "stylers": [
				  {
					  "visibility": "on"
				  },
				  {
					  "color": "#b3b3b3"
				  }
			  ]
		  },
		  {
			  "featureType": "road.highway",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "color": "#ffffff"
				  }
			  ]
		  },
		  {
			  "featureType": "road.local",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "visibility": "on"
				  },
				  {
					  "color": "#ffffff"
				  },
				  {
					  "weight": 1.8
				  }
			  ]
		  },
		  {
			  "featureType": "road.local",
			  "elementType": "geometry.stroke",
			  "stylers": [
				  {
					  "color": "#d7d7d7"
				  }
			  ]
		  },
		  {
			  "featureType": "poi",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "visibility": "on"
				  },
				  {
					  "color": "#ebebeb"
				  }
			  ]
		  },
		  {
			  "featureType": "administrative",
			  "elementType": "geometry",
			  "stylers": [
				  {
					  "color": "#a7a7a7"
				  }
			  ]
		  },
		  {
			  "featureType": "road.arterial",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "color": "#ffffff"
				  }
			  ]
		  },
		  {
			  "featureType": "road.arterial",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "color": "#ffffff"
				  }
			  ]
		  },
		  {
			  "featureType": "landscape",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "visibility": "on"
				  },
				  {
					  "color": "#efefef"
				  }
			  ]
		  },
		  {
			  "featureType": "road",
			  "elementType": "labels.text.fill",
			  "stylers": [
				  {
					  "color": "#696969"
				  }
			  ]
		  },
		  {
			  "featureType": "administrative",
			  "elementType": "labels.text.fill",
			  "stylers": [
				  {
					  "visibility": "on"
				  },
				  {
					  "color": "#737373"
				  }
			  ]
		  },
		  {
			  "featureType": "poi",
			  "elementType": "labels.icon",
			  "stylers": [
				  {
					  "visibility": "off"
				  }
			  ]
		  },
		  {
			  "featureType": "poi",
			  "elementType": "labels",
			  "stylers": [
				  {
					  "visibility": "off"
				  }
			  ]
		  },
		  {
			  "featureType": "road.arterial",
			  "elementType": "geometry.stroke",
			  "stylers": [
				  {
					  "color": "#d6d6d6"
				  }
			  ]
		  },
		  {
			  "featureType": "road",
			  "elementType": "labels.icon",
			  "stylers": [
				  {
					  "visibility": "off"
				  }
			  ]
		  },
		  {},
		  {
			  "featureType": "poi",
			  "elementType": "geometry.fill",
			  "stylers": [
				  {
					  "color": "#dadada"
				  }
			  ]
		  }
	  ]
	  
			  });
			  
	  var image = 'images/icons/map-icon-trujillo-oficinas.png';
	  var image2 = 'images/icons/map-icon-la-quinta.png';
	  var image3 = 'images/icons/map-icon-sonora.png';
	  var image4 = 'images/icons/map-icon-3aguas.png';
	  var image5 = 'images/icons/map-icon-torres.png';
	  
			//   var marker = new google.maps.Marker({
			//   animation: google.maps.Animation.DROP,
			//   position: {lat: 5.058528, lng: -75.487791},
			//   map: map,
			//   icon: image,
			//   title: 'Oficinas'
			// });
			  
			  var marker3 = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,
			  position: {lat: 5.070288, lng: -75.528595},
			  map: map,
			  icon: image2,
			  title: 'La Quinta'
			});
			  var marker4 = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,
			  position: {lat: 5.070745, lng: -75.494590},
			  map: map,
			  icon: image3,
			  title: 'La Sonora'
			});
			var marker2 = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,
			  position: {lat: 5.063052, lng: -75.495259},
			  map: map,
			  icon: image,
// 			  anchor: new google.maps.Point (0, 0),
			  title: 'Sala de ventas'
			});
			  var marker4 = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,
			  position: {lat: 5.063052, lng: -75.495259},
			  map: map,
			  icon: image4,
			  title: '3 Aguas'
			});
			  var marker5 = new google.maps.Marker({
			  animation: google.maps.Animation.DROP,
			  position: {lat: 4.848314, lng: -75.664582},
			  map: map,
			  icon: image5,
			  title: 'Torres del Bosque'
			});
	  
			  var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h3 id="firstHeading" class="firstHeading" style="margin-bottom: 2px;">Oficinas</h3>'+
			'<div id="bodyContent">'+
			'<p><b>Edificio Forum.</b></br>Cra. 23 C No. 62-06, Ofc. 303.</p>' +
			'</div>'+
			'</div>';
	  
			 var contentString2 = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h3 id="firstHeading" class="firstHeading" style="margin-bottom: 2px;">Sala de ventas</h3>'+
			'<div id="bodyContent">'+
			'<p><b>Centro comercial Mall Plaza.</b></br>Local BH-064 frente a Olímpica.</p>' +
			'</div>'+
			'</div>';
	  
			var infowindow = new google.maps.InfoWindow({
			  content: contentString
			});
			marker.addListener('click', function() {
			  infowindow.open(map, marker);
			});
	  
			var infowindow2 = new google.maps.InfoWindow({
			  content: contentString2
			});
			marker2.addListener('click', function() {
			  infowindow2.open(map, marker2);
			});
		   }
		 