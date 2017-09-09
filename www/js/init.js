$( document ).on( "pagebeforeshow", ".pageload", function() {
    initData();
});


function initData(){

        $.getJSON("http://app.banahawhealsspabranches.com/data/getversion").done(function(data){
            var new_data_version = data.version_code;
            var new_data_version_date = data.version_created_at;
        });  



    if (localStorage.getItem("provinces") !== null && localStorage.getItem("branches_data") !== null) {
        provinces = JSON.parse(localStorage.getItem('provinces'));
        branches = JSON.parse(localStorage.getItem('branches_data'));   
    }
    else{
      
        $.getJSON("http://app.banahawhealsspabranches.com/data/fetchbranches").done(function(data){
            $.each(data, function(index_main, main_data){
                arr_branches.push(main_data); 
            });

            localStorage.setItem("branches_data", JSON.stringify(arr_branches));
        });

        $.getJSON("http://app.banahawhealsspabranches.com/data/fetchprovinces").done(function(data){
            $.each(data, function(index, value){
                arr_provinces.push(value.province); 

            });
            localStorage.setItem("provinces", JSON.stringify(arr_provinces));
        }); 

        provinces = JSON.parse(localStorage.getItem('provinces'));
        branches = JSON.parse(localStorage.getItem('branches_data'));  
             
    }
}

