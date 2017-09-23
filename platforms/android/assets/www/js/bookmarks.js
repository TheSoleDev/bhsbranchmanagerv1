$( document ).on( "pagebeforeshow", "#bookmarks-page", function() {
	$('#bookmark-section').css('height',(window.innerHeight) - 120 );
	
    
	initBookmarks();
    localStorage.removeItem("selected-branch-id");
    localStorage.removeItem("selected-branch");
    localStorage.removeItem("selected-branch-position");    
});

function initBookmarks(){
	var arr_str = [];
	if (localStorage.getItem("bookmarks") !== null) {
		$.each(JSON.parse(localStorage.getItem('bookmarks')), function(key, value) {
			
			var branch_info = getBranchDetailsById(value);

			arr_str.push('<li><a href="#" class="link-BranchInfo" data-ajax="false" data-position="'+branch_info.details.map_lat + ',' + branch_info.details.map_long+'" data-branch="'+branch_info.details.branch_name+'" data-id="'+branch_info.details.id+'"><h2>'+branch_info.details.branch_name+'</h2></a>');
	                        arr_str.push('<a href="#actionModal" class="link-openModal" data-rel="popup" data-position-to="window" data-transition="pop"  data-position="'+branch_info.details.map_lat + ',' + branch_info.details.map_long+'" data-branch="'+branch_info.details.branch_name+'" data-id="'+branch_info.details.id+'"></a>');
	        arr_str.push('</li>');
		});

		$('#bookmarks-item').html(arr_str.join('')).listview('refresh'); 	
	}
}

$('#bookmarks-page').on('click','.btn-removeBookmark',function(e) { 
    var branch_id = $(this).data('branchid');
    if(branch_id != ''){
        var arr_bookmark_items = [];
        if (localStorage.getItem("bookmarks") !== null) {
              $.each(JSON.parse(localStorage.getItem('bookmarks')), function(key, value) {
                if(branch_id != value){
                    arr_bookmark_items.push(value);
                }
              });

              localStorage.setItem("bookmarks", JSON.stringify(arr_bookmark_items));
              alert('Removed to your Bookmarks');
        }
        initBookmarks();
    }

});

$('#bookmarks-page').on('click','.link-openModal',function(e) { 

    if(localStorage.getItem("selected-branch") != '')
    {
        localStorage.removeItem('selected-branch');
        localStorage.removeItem('selected-branch-position');
        localStorage.removeItem('reference-page');
    }

    localStorage.setItem("selected-branch-id", $(this).data('id'));
    localStorage.setItem("selected-branch", $(this).data('branch'));
    localStorage.setItem("selected-branch-position", $(this).data('position'));
    localStorage.setItem("reference-page", 'bookamrks.html');   

	$('.btn-removeBookmark').attr('data-branchid',$(this).data('id'));
});

$('#bookmarks-page').on('click','.link-BranchInfo',function(e) { 

    if(localStorage.getItem("selected-branch") != '')
    {
        localStorage.removeItem('selected-branch');
        localStorage.removeItem('selected-branch-position');
        localStorage.removeItem('reference-page');
    }

    localStorage.setItem("selected-branch-id", $(this).data('id'));
    localStorage.setItem("selected-branch", $(this).data('branch'));
    localStorage.setItem("selected-branch-position", $(this).data('position'));
    localStorage.setItem("reference-page", 'bookamrks.html');   

    window.location = 'branch-details.html';
});