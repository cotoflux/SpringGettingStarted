$(function(){

    $.ajax({
        type: "GET",
        url: "greeting",
        success: function(data){
            console.log("success", data);
        }
    });

});