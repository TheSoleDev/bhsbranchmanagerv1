var provinces = '';
var branches = '';

var data_version = '';
var data_version_date = '';

var img_marker = 'img/marker-icon.png';
var arr_provinces = [];
var arr_branches = [];

$( document ).on( "pagebeforeshow", ".pageload", function() {
    initData();
});


function initData(){

    if (localStorage.getItem("provinces") !== null && localStorage.getItem("branches_data") !== null && localStorage.getItem("data_version") !== null) {
        provinces = JSON.parse(localStorage.getItem('provinces'));
        branches = JSON.parse(localStorage.getItem('branches_data'));  
        var current_version = JSON.parse(localStorage.getItem('data_version'));  

        data_version = current_version.version_code;
        data_version_date = current_version.version_created_at;


        $.getJSON("http://app.banahawhealsspabranches.com/data/getversion").done(function(data){
            if(data_version != data.version_code){
                localStorage.removeItem('branches_data');
                localStorage.removeItem('provinces');
                localStorage.removeItem('data_version');
                initData();
            }
        });  

    }
    else{

        $.getJSON("http://app.banahawhealsspabranches.com/data/getversion").done(function(data){
            localStorage.setItem("data_version", JSON.stringify(data));
        });  

      
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



function getBranchDetailsById(id){
	
	var branches = JSON.parse(localStorage.getItem('branches_data'));


	var result = branches.filter(function (data) {
	    return data.details.id == id;
	});

	return result[0];
}

function getPromoDetailsById(id, month){

	var data = json_data_promo[month];
			var result = data.filter(function (data) {
			    return data.id == id;
			});

	return result[0];
}

