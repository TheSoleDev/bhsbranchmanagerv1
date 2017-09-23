
$( document ).on( "pagebeforeshow", "#services-page", function() {
	
    localStorage.removeItem("selected-branch-id");
    localStorage.removeItem("selected-branch");
    localStorage.removeItem("selected-branch-position");	

});

