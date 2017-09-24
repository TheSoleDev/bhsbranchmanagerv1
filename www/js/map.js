$(document).on("pagebeforeshow", "#map-screen",function(event){    

    var arr_str = [];   


       var provinces = JSON.parse(localStorage.getItem('provinces'));
       var branches = JSON.parse(localStorage.getItem('branches_data')); 

    $('#list-branch').html('');

    branches.sort();

    $.each(branches, function(key, value) {
        arr_str.push('<li data-filtertext="'+ value.details.branch_name + '"><a href="#" class="showDetails" data-position="'+value.details.map_lat + ',' + value.details.map_long+'" data-branch="'+value.details.branch_name+'" data-id="'+value.details.id+'">'+value.details.branch_name+'</a></li>');    
    });


    // $.each(provinces, function(i, tag) {

    //     var filtertext = '';

    //     $.each(branches, function(key, value) {

    //         if(value.details.province == tag){
    //            filtertext = filtertext + ' ' + value.details.branch_name;
    //           // console.log(filtertext);
    //         }

    //     });

    //     arr_str.push('<div data-role="collapsible" class="tag-item" data-filtertext="'+tag + ' ' + filtertext + '">');
    //         arr_str.push('<h3>'+tag+'</h3>');
    //         arr_str.push('<ul data-role="listview"  data-inset="false">');

    //             $.each(branches, function(key, value) {

    //                 if( tag == value.details.province){
    //                     if(value.details.map_lat != null && value.details.map_long != null)
    //                     {
    //                         arr_str.push('<li class="sub-item" data-filtertext="'+tag + ' ' + value.details.branch_name + '"><a href="#" class="showDetails" data-position="'+value.details.map_lat + ',' + value.details.map_long+'" data-branch="'+value.details.branch_name+'" data-id="'+value.details.id+'">'+value.details.branch_name+'</a></li>');
    //                     }
    //                 }
                    
    //             });

    //         arr_str.push('</ul>');
    //     arr_str.push('</div>');

    // });

      
    //$('#list-branch').append(arr_str.join('')).trigger('create');
    $('#list-branch').append(arr_str.join('')).listview('refresh'); 
});

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

$('#map-screen').on('click','.showDetails',function(e) { 

    if(localStorage.getItem("selected-branch") != '')
    {
        localStorage.removeItem('selected-branch');
        localStorage.removeItem('selected-branch-position');
        localStorage.removeItem('reference-page');
    }

    localStorage.setItem("selected-branch-id", $(this).data('id'));
    localStorage.setItem("selected-branch", $(this).data('branch'));
    localStorage.setItem("selected-branch-position", $(this).data('position'));
    localStorage.setItem("reference-page", 'branch.html');   

    window.location = "map.html";

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

$('#map-screen').on('click','.btn-show-all',function(e) { 
    
        localStorage.removeItem('selected-branch');
        localStorage.removeItem('selected-branch-id');
        localStorage.removeItem('selected-branch-position');
        window.location = 'map.html';
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