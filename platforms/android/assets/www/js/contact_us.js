
$( document ).on( "pagebeforeshow", "#contactus-page", function() {

    var branch_name = localStorage.getItem("selected-branch");
    var branch_id = localStorage.getItem("selected-branch-id");    
	$('#txt_branch_name').val(branch_name);
    // localStorage.removeItem("selected-branch-id");
    // localStorage.removeItem("selected-branch");
    // localStorage.removeItem("selected-branch-position");	

});


$('#contactus-page').on('click','#btn-submit-contact',function(e) { 

        $.ajax({
            method: "POST",
            url: "http://app.banahawhealsspabranches.com/api/submitfeedback",
            // headers: {
            //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            // },
            data: $('#frm-contactus').serialize()
        }).fail(function( data, textStatus, jqXHR ) {
            //console.log( "Data Failed Saved: ", data, textStatus, jqXHR );
            // alert("Please try again");
            // location.reload();
        }).done(function( data, textStatus, jqXHR ) {
            console.log('LOGIN SUCCESS',data, textStatus, jqXHR);
            alert(data);
            // if (data.status=='success') {
            //     $('#login-container').hide();
            //     $('#welcome-message-container').show();
            //     $('.display_name').html(data.profile.first_name);
            //     //console.log(data);
            //     //window.location = '{{url('plans')}}';
                
            //     @if(!in_array(Route::current()->getName(),['plans']))
            //     //populateFavouritesDropDownList();
            //     $('#loginModal').modal('hide') 
            //     $('#addToFavouriteModal').modal({ keyboard: false,backdrop:'static' }) 
            //     @else
            //     window.location = '{{url('plans')}}';
            //     @endif


            // } else {
            //      window.location.reload();
            // }
        });

});

