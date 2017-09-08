$(document).ready(function(){


    $.getJSON("http://branchmanager.local/data/fetchbranches").done(function(data){

        localStorage.setItem("branch_data", JSON.stringify(data));

        $.each(data, function(index_main, main_data){
            //console.log(index_main,main_data); 
            $.each(main_data, function(index_branch, branch_data){
                  //console.log(branch_data.branch_name);  
            });
        });

    });

    var arr_provinces = [];   

    $.getJSON("http://branchmanager.local/data/fetchprovinces").done(function(data){
       
        $.each(data, function(index, value){
            arr_provinces.push(value.province); 

        });
        localStorage.setItem("provinces", JSON.stringify(arr_provinces));

        //console.log(localStorage.getItem('provinces'));
    });


   var arr_str = [];   

    $.each(JSON.parse(localStorage.getItem('branch_data')), function(index, value) {

        console.log(index,value.details.branch_name);


    });



    var arr_str = [];   



    $('#brachlist').html('');

    $.each(JSON.parse(localStorage.getItem('provinces')), function(i, tag) {

        var filtertext = '';

        // $.each(branch, function(key, value) {

        //     if(value.province == tag){
        //        filtertext = filtertext + ' ' + value.branch_name;
        //       // console.log(filtertext);
        //     }

        // });

        arr_str.push('<div data-role="collapsible" class="tag-item" data-filtertext="'+tag + ' ' + filtertext + '">');
            arr_str.push('<h3>'+tag+'</h3>');
            // arr_str.push('<ul data-role="listview"  data-inset="false">');


            //     $.each(branch, function(key, value) {

            //         if( tag == value.province){
            //             if(value.lat != null && value.long != null)
            //             {
            //                 arr_str.push('<li class="sub-item" data-filtertext="'+tag + ' ' + value.branch_name + '"><a href="#" class="showDetails" data-position="'+value.lat + ',' + value.long+'" data-branch="'+value.branch_name+'" data-id="'+value.id+'">'+value.branch_name+'</a></li>');
            //             }
            //         }
                    
            //     });

            // arr_str.push('</ul>');
        arr_str.push('</div>');

    });

    $('#brachlist').append(arr_str.join('')).trigger('create');
  

});