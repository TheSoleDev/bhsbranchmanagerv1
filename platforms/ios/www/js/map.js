
$( document ).on( "pagebeforeshow", ".pageload", function() {
        
    // var arr_str = [];   

    // arr_str.push('<ul>');
    //     arr_str.push('<li><a href="branch.html" data-ajax="false" data-icon="grid" class="ui-btn-active">Branch</a></li>');
    //     arr_str.push('<li><a href="map.html" data-ajax="false" data-icon="star">Map</a></li>');
    //     arr_str.push('<li><a href="#" data-icon="gear">Promos</a></li>');
    //     arr_str.push('<li><a href="#" data-icon="star">Reservation</a></li>');
    //     arr_str.push('<li><a href="#" data-icon="star">Fav</a></li>');
    // arr_str.push('</ul>');

    // $('#footer-nav-item').html(arr_str.join(''))).listview('refresh');

});


$('#map-screen').on('click','.showAll',function(e) { 
    localStorage.removeItem('selected-branch');
    window.location = "map.html";
});

$('#map-screen').on('click','.btn-back',function(e) { 
    
    var backLink = 'index.html';
    if(localStorage.getItem("reference-page") != null)
    {    
        backLink = localStorage.getItem("reference-page");
        localStorage.removeItem('reference-page');
    }
    window.location = backLink;
});

$('#map-screen').on('change',".rb-menu-map",function(e) { 
    //alert($("input[name*=radio-choice-]:checked").val());
    if($("input[name*=radio-choice-]:checked").val() == 'all-branch'){
        localStorage.removeItem('selected-branch');
        localStorage.removeItem('selected-branch-id');
        localStorage.removeItem('selected-branch-position');
        window.location = 'map.html';
    }
    else if($("input[name*=radio-choice-]:checked").val() == 'nearby'){
        var currentLoc = '';
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if(position.coords.latitude != '' && position.coords.longitude != '' ){
                    currentLoc = new google.maps.LatLng(position.coords.latitude,position.coords.longitude)
                    $('#map_canvas').gmap('addMarker', { 'position':currentLoc} );
                    $('#map_canvas').gmap({'center': position.coords.latitude + ", " + position.coords.longitude, 'zoom': 15, 'disableDefaultUI':true, });
                    $('#map_canvas').gmap('get','map').panTo(currentLoc);
                }
                else{
                    alert('fsdf');
                }

            },showError);
        }
        else{
            alert('Your location cannot be determined. ');
        }
        $('#menu-panel').removeClass('ui-panel-open').addClass('ui-panel-close');
    }
});

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Your location cannot be determined.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

$('#map_canvas').css('height',(window.innerHeight) - 110 );