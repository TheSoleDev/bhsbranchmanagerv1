$( document ).on( "pagebeforeshow", "#branch-details-page", function() {
  
    var branch_id = localStorage.getItem("selected-branch-id");
    //console.log(branch_id);
    if(branch_id == '' )
    {
        window.location = "map.html";
    }

    var branch_info = getBranchDetailsById(branch_id);

    
    $('#branch_name').html(branch_info.details.branch_name);
    $('#branch_address').html(branch_info.details.address);
    if(branch_info.details.cover_image != '' && branch_info.details.cover_image != null) {
        $('#branch_cover_image').attr('src', 'http://app.banahawhealsspabranches.com/storage/'+branch_info.details.cover_image);
    }
    else{
        $('#branch_cover_image').attr('src', 'img/default_photo.jpg');
        
    }

    $('.btn-addToBookmark').attr('data-branchid',branch_id);

    var arr_str = [];

    if(branch_info.details.tel_no_1 != '' && branch_info.details.tel_no_1 != null)        arr_str.push('<div class="mt-10"><strong>Telephone No.: </strong> <div class="info"> <div class="ui-grid-a"><div class="ui-block-a pt-10 pl-20">'+branch_info.details.tel_no_1+'</div><div class="ui-block-b text-right"><a href="tel:'+branch_info.details.tel_no_1+'" class="linkBranchDetails button-small btn-green"><i class="fa fa-phone" aria-hidden="true"></i>  Call Now </a></div></div></div></div>');
    if(branch_info.details.tel_no_2 != '' && branch_info.details.tel_no_2 != null)        arr_str.push('<div class="mt-10"><strong>Telephone No. 2: </strong> <div class="info"> <div class="ui-grid-a"><div class="ui-block-a pt-10 pl-20">'+branch_info.details.tel_no_2+'</div><div class="ui-block-b text-right"><a href="tel:'+branch_info.details.tel_no_2+'" class="linkBranchDetails button-small btn-green"><i class="fa fa-phone" aria-hidden="true"></i>  Call Now </a></div></div></div></div>');
    if(branch_info.details.tel_no_3 != '' && branch_info.details.tel_no_3 != null)        arr_str.push('<div class="mt-10"><strong>Telephone No. 3: </strong> <div class="info"> <div class="ui-grid-a"><div class="ui-block-a pt-10 pl-20">'+branch_info.details.tel_no_3+'</div><div class="ui-block-b text-right"><a href="tel:'+branch_info.details.tel_no_3+'" class="linkBranchDetails button-small btn-green"><i class="fa fa-phone" aria-hidden="true"></i>  Call Now </a></div></div></div></div>');
    
    if(branch_info.details.mobile_no_1 != '' && branch_info.details.mobile_no_1 != null)        arr_str.push('<div class="mt-10"><strong>Mobile No.: </strong> <div class="info"> <div class="ui-grid-a"><div class="ui-block-a pt-10 pl-20">'+branch_info.details.mobile_no_1+'</div><div class="ui-block-b text-right"><a href="sms:'+branch_info.details.mobile_no_1+'" class="linkBranchDetails button-small btn-blue"><i class="fa fa-commenting" aria-hidden="true"></i>  Message Now  </a></div></div></div></div>');
    if(branch_info.details.mobile_no_2 != '' && branch_info.details.mobile_no_2 != null)        arr_str.push('<div class="mt-10"><strong>Mobile No. 2: </strong> <div class="info"> <div class="ui-grid-a"><div class="ui-block-a pt-10 pl-20">'+branch_info.details.mobile_no_2+'</div><div class="ui-block-b text-right"><a href="sms:'+branch_info.details.mobile_no_2+'" class="linkBranchDetails button-small btn-blue"><i class="fa fa-commenting" aria-hidden="true"></i>  Message Now  </a></div></div></div></div>');
    if(branch_info.details.mobile_no_3 != '' && branch_info.details.mobile_no_3 != null)        arr_str.push('<div class="mt-10"><strong>Mobile No. 3: </strong> <div class="info"> <div class="ui-grid-a"><div class="ui-block-a pt-10 pl-20">'+branch_info.details.mobile_no_3+'</div><div class="ui-block-b text-right"><a href="sms:'+branch_info.details.mobile_no_3+'" class="linkBranchDetails button-small btn-blue"><i class="fa fa-commenting" aria-hidden="true"></i>  Message Now  </a></div></div></div></div>');    

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

    var arr_photo_str = [];
    $.each(branch_info.photos, function(key, value) {

        arr_photo_str.push('<div class="item-img">');
            arr_photo_str.push('<a href="#popupPhotoLarge" class="showPopupPhoto" data-rel="popup" data-position-to="window" data-transition="fade" data-caption="'+value.image_description+'"><img src="http://app.banahawhealsspabranches.com/storage/'+value.image_path+'" alt="" style="width:100%"></a>');

        arr_photo_str.push('</div>');
    });


    $('#photoGalleryContainer').html(arr_photo_str.join('')).appendTo( "popup" ).trigger( "create" );
    
    var arr_photo_str = [];
    $.each(branch_info.photos, function(key, value) {

        arr_photo_str.push('<div class="item-img">');
            arr_photo_str.push('<a href="#popupPhotoLarge" class="showPopupPhoto" data-rel="popup" data-position-to="window" data-transition="fade" data-caption="'+value.image_description+'"><img src="http://app.banahawhealsspabranches.com/storage/'+value.image_path+'" alt="" style="width:100%"></a>');

        arr_photo_str.push('</div>');
    });


    $('#photoGalleryContainer').html(arr_photo_str.join('')).appendTo( "popup" ).trigger( "create" );
    
    var arr_promo_str = [];
    $.each(branch_info.promos, function(key, value) {
        arr_promo_str.push('<div class="item-img">');
            arr_promo_str.push('<a href="#popupPromoLarge" class="showPopupPromo" data-rel="popup" data-position-to="window" data-transition="fade" data-caption="'+value.promo_details+'"><img src="http://app.banahawhealsspabranches.com/storage/'+value.promo_image+'" alt="" style="width:100%"></a>');

        arr_promo_str.push('</div>');
    });


    $('#promoContainer').html(arr_promo_str.join('')).appendTo( "popup" ).trigger( "create" );

    if (localStorage.getItem("bookmarks") !== null) {

          $.each(JSON.parse(localStorage.getItem('bookmarks')), function(key, value) {
            if(branch_id == value){
                $('.btn-bookmark').addClass('btn-blue btn-removeToBookmark').removeClass('btn-addToBookmark').find('i').removeClass('fa-bookmark-o').addClass('fa-bookmark');
            }
          });
    }
    


});


$('#branch-details-page').on('click','.btn-addToBookmark',function(e) { 
    var branch_id = $(this).data('branchid');
    if(branch_id != ''){
        var arr_bookmark_items = [];
        if (localStorage.getItem("bookmarks") === null) {
            arr_bookmark_items.push(branch_id);
            localStorage.setItem("bookmarks", JSON.stringify(arr_bookmark_items));
            alert('Added to your Bookmarks');
        } 
        else{
              $.each(JSON.parse(localStorage.getItem('bookmarks')), function(key, value) {
                arr_bookmark_items.push(value);
              });

              if($.inArray(branch_id, arr_bookmark_items)){
                arr_bookmark_items.push(branch_id);
              }
              
              localStorage.setItem("bookmarks", JSON.stringify(arr_bookmark_items));
              alert('Added to your Bookmarks');
        }
        $('.btn-bookmark').addClass('btn-blue btn-removeToBookmark').removeClass('btn-addToBookmark').find('i').removeClass('fa-bookmark-o').addClass('fa-bookmark');
    }

});

$('#branch-details-page').on('click','.btn-removeToBookmark',function(e) { 
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
        $('.btn-bookmark').addClass('btn-addToBookmark').removeClass('btn-blue btn-removeToBookmark').find('i').removeClass('fa-bookmark').addClass('fa-bookmark-o');
    }

});

$('#branch-details-page').on('click','.showPopupPhoto',function(e) { 

    $("#img-large-photo").attr('src',$(this).find('img').attr('src'));
    $(".img-caption").html('<pre>'+$(this).data('caption')+'</pre>');
});

$('#branch-details-page').on('click','.showPopupPromo',function(e) { 

    $("#img-large-promo").attr('src',$(this).find('img').attr('src'));

    $(".img-caption").html('<pre>'+$(this).data('caption')+'</pre>');
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
