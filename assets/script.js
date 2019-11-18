$(document).ready(function(){
    
    $('#weather').click(function () { 
        
        var city = $("#search").val();

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=e32655ee92c881fc7fe3fc283b2d6aad",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    var widget = print(data);

                    $("#print").html(widget);
                    $("#city").val('');
                }
            });
    
    });

})



