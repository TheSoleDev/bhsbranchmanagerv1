
$( document ).on( "pagebeforeshow", "#home-page", function() {
	
	$('.dashboard-container').css('height',(window.innerHeight) - 70 );
	$('.button-wrap').hide();
	initData();
	initIndex();

});


function initIndex(){
	
	if (localStorage.getItem("provinces") !== null && localStorage.getItem("branches_data") !== null) {
		 loading('hide', 1000); 
		 $('.button-wrap').show();
	}
	else{
		loading('show', 1);
		setTimeout(function() {
			initIndex();
			console.log('here');
		}, 1000);
	}
}


    $(document).on( "pagebeforecreate", function( event ) { 
        
    });

    function loading(showOrHide, delay) {
      setTimeout(function() {
        $.mobile.loading(showOrHide, { theme: "a", text: "Loading..", textonly: false,textVisible: true});
      }, delay);
    }
