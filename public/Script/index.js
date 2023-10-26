

$(document).ready(function(){
    $(".bar").click(function(){
        $(".dropdownmenu").show(1000);
        $(".bar").slideUp(200);
        $(".x").slideDown(200);

    });
});
$(document).ready(function(){
    $(".x").click(function(){
        $(".dropdownmenu").hide(1000);
        $(".x").slideUp(200);   
        $(".bar").slideDown(200);            
    });
});
$(document).ready(function(){
    $(".dropdownmenu a").click(function(){
        $(".dropdownmenu").hide(1000);
        $(".x").slideUp(200);   
        $(".bar").slideDown(200); 
    }) 
});
$(document).ready(function(){
    $(".dropdownmenu ").click(function(){
        $(".dropdownmenu").hide(1000);
        $(".x").slideUp(200);   
        $(".bar").slideDown(200); 
    }) 
});

$(document).ready(function () {
    $(".contactus").click(function(){
        $(".screen").fadeIn(1000);
        $(".screen").addClass("overlay")
        $(".nv").addClass("filter")
        $("#aboutus").addClass("filter")
        $(".corousel").addClass("filter")
        $(".footer").addClass("filter")

    })
});

$(document).ready(function () {
    $(".app-form-button1").click(function(){
        $(".screen").hide();
        $(".nv").removeClass("filter")
        $("#aboutus").removeClass("filter")
        $(".corousel").removeClass("filter")
        $(".footer").removeClass("filter")
    
    })
});

$(document).ready(function(){
    $(".app-form-button2").click(function(){
        $(".thankyou").addClass("overlay");
        $(".screen").hide();
        $(".thankyou").slideDown(500).fadeOut(5000);
        $(".nv").removeClass("filter")
        $("#aboutus").removeClass("filter")
        $(".corousel").removeClass("filter")
        $(".footer").removeClass("filter")
    })
    
});







