$( document ).on( "pagebeforeshow", "#branch-details-page", function() {
  
    var branch_id = localStorage.getItem("selected-branch-id");
    console.log(branch_id);
    if(branch_id == '' )
    {
        window.location = "map.html";
    }

    var branch_info = getBranchDetailsById(branch_id);

    
    $('#branch_name').html(branch_info.details.branch_name);
    $('#branch_address').html(branch_info.details.address);
    
    var arr_str = [];

    if(branch_info.details.tel_no_1 != '' && branch_info.details.tel_no_1 != null)        arr_str.push('<div class="mt-10"><strong>Telephone No.: </strong> <div class="info">'+branch_info.details.tel_no_1+' <a href="tel:'+branch_info.details.tel_no_1+'" class="linkBranchDetails button-small btn-green"> Call Now </a></div></div>');
    if(branch_info.details.tel_no_2 != '' && branch_info.details.tel_no_2 != null)        arr_str.push('<div class="mt-10"><strong>Telephone No. 2: </strong> <div class="info">'+branch_info.details.tel_no_2+' <a href="tel:'+branch_info.details.tel_no_2+'" class="linkBranchDetails button-small btn-green"> Call Now </a></div></div>');    
    if(branch_info.details.tel_no_3 != '' && branch_info.details.tel_no_3 != null)        arr_str.push('<div class="mt-10"><strong>Telephone No. 3: </strong> <div class="info">'+branch_info.details.tel_no_3+' <a href="tel:'+branch_info.details.tel_no_3+'" class="linkBranchDetails button-small btn-green"> Call Now </a></div></div>');    
    if(branch_info.details.mobile_no_1 != '' && branch_info.details.mobile_no_1 != null)     arr_str.push('<div class="mt-10"><strong>Mobile No.: </strong> <div class="info">'+branch_info.details.mobile_no_1+' <a href="sms:'+branch_info.details.mobile_no_1+'" class="linkBranchDetails button-small btn-blue"> Message Now </a></div></div>');
    if(branch_info.details.mobile_no_2 != '' && branch_info.details.mobile_no_2 != null)     arr_str.push('<div class="mt-10"><strong>Mobile No. 2: </strong> <div class="info">'+branch_info.details.mobile_no_2+' <a href="sms:'+branch_info.details.mobile_no_2+'" class="linkBranchDetails button-small btn-blue"> Message Now </a></div></div>');
    if(branch_info.details.mobile_no_3 != '' && branch_info.details.mobile_no_3 != null)     arr_str.push('<div class="mt-10"><strong>Mobile No. 3: </strong> <div class="info">'+branch_info.details.mobile_no_3+' <a href="sms:'+branch_info.details.mobile_no_3+'" class="linkBranchDetails button-small btn-blue"> Message Now </a></div></div>');
    if(branch_info.details.email_add != '' && branch_info.details.email_add != null)       arr_str.push('<div class="mt-10"><strong>Email: </strong> <div class="info">'+branch_info.details.email_add+'</div></div>');
    if(branch_info.details.fb_url != '' && branch_info.details.fb_url != null)          arr_str.push('<div class="mt-10"><strong>Facebook: </strong> <div class="info">'+branch_info.details.fb_url+'</div></div>');

    $('#contact_details').html(arr_str.join(''));  
    
    var arr_str = [];

    if(branch_info.details.branch_name != null)     arr_str.push('<li class="main"><label>'+branch_info.details.branch_name+'</label></li>');
    if(branch_info.details.address != null)         arr_str.push('<li class="mt-10"><label>Address: </label> <div class="info">'+branch_info.details.address+'</div></li>');
    if(branch_info.details.tel_no_1 != null)        arr_str.push('<li class="mt-10"><label>Telephone No.: </label> <div class="info">'+branch_info.details.tel_no_1+'</div></li>');
    if(branch_info.details.mobile_no_1 != null)     arr_str.push('<li class="mt-10"><label>Mobile No.: </label> <div class="info">'+branch_info.details.mobile_no_1+'</div></li>');
    if(branch_info.details.email_add != null)       arr_str.push('<li class="mt-10"><label>Email: </label> <div class="info">'+branch_info.details.email_add+'</div></li>');
    if(branch_info.details.fb_url != null)          arr_str.push('<li class="mt-10"><label>Facebook: </label> <div class="info">'+branch_info.details.fb_url+'</div></li>');

    $('#branch-details').html(arr_str.join(''));

    // var arr_str_photo = [];

    // var data_photo = json_data.branch_photo;


    // $.each(data_photo, function(key, value) {

    //     if( value.branch_id == branch_id){
    //         arr_str_photo.push('<a href="#popupPhotoLarge" class="showPopupPhoto" data-rel="popup" data-position-to="window" data-transition="fade"><img class="popphoto" src="'+value.photo_file+'" alt="Paris, France" style="width:30%"></a>');
    //     }
    // });

    // var photoHeader = '';
    // if(arr_str_photo.length > 0)
    // {
    //     photoHeader = '<h2>Photos</h2>';
    // } 
    // $('#branch-photo-list').html(photoHeader + arr_str_photo.join(''));

});



$('#branch-info').on('click','.showPopupPhoto',function(e) { 

    $("#img-large-photo").attr('src',$(this).find('img').attr('src'));

});


$('#branch-screen').on('click','.showDetails',function(e) { 

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

    window.location = "#branch-info";

});



$('#branch-info').on('click','.showmap',function(e) { 

    localStorage.setItem("reference-page", 'branch.html');  
    window.location = "map.html";

});

$('#branch-info').on('click','.showPromo',function(e) { 

    localStorage.setItem("reference-page", 'branch.html#branch-info');  

    window.location = "promo.html";
});

// $('#branch-screen').on('click','.showmap',function(e) { 

//     if(localStorage.getItem("selected-branch") != '')
//     {
//         localStorage.removeItem('selected-branch');
//         localStorage.removeItem('selected-branch-position');
//         localStorage.removeItem('reference-page');
//     }

//     localStorage.setItem("selected-branch", $(this).data('branch'));
//     localStorage.setItem("selected-branch-position", $(this).data('position'));
//     localStorage.setItem("reference-page", 'branch.html');    
//     window.location = "map.html";
// });
