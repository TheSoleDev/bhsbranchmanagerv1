var provinces = '';
var branches = '';

var img_marker = 'img/marker-icon.png';
var arr_provinces = [];
var arr_branches = [];

$( document ).on( "pagebeforeshow", ".pageload", function() {
    initData();
});


function initData(){
    
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

