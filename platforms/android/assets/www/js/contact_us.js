
$( document ).on( "pagebeforeshow", "#contactus-page", function() {

    var branch_name = localStorage.getItem("selected-branch");
    var branch_id = localStorage.getItem("selected-branch-id");    
	$('#txt_branch_name').val(branch_name);
    // localStorage.removeItem("selected-branch-id");
    // localStorage.removeItem("selected-branch");
    // localStorage.removeItem("selected-branch-position");	

});


$('#contactus-page').on('click','#btn-submit-contact',function(e) { 

	if($('#txt_branch_name').val() == ''){
		alert('Branch name is requried.');
	}
	else if($('#txt_fullname').val() == ''){
		alert('Full name is required.');
	}
	else if($('#txt_email').val() == ''){
		alert('Email address is required.');
	}
	else if($('#mobile_no').val() == ''){
		alert('Mobile is required.');
	}
	else if($('#txt_message').val() == ''){
		alert('Message is required.');
	}
	else{

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
     
            if (data.status=='success') {
            	alert('Your message has been successfully sent.');
                 window.location = 'contact_us.html';
            } else {
                 alert('Send Failed. Please try again.');
            }
        });
    }

});

