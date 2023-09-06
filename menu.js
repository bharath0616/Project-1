$(document).ready(function(){
    $(".h2adb").click(function(){
        $("#adb").show().fadeOut(2000);
    });
    
});

$(document).ready(function(){
    $(".h2strt").click(function(){
        $("#strt").show().fadeOut(2000);
    });
    
});
$(document).ready(function(){
    $(".h2sl").click(function(){
        $("#sl").show().fadeOut(2000);
    });
    
});
$(document).ready(function(){
    $(".h2mc").click(function(){
        $("#mc").show().fadeOut(2000);
    });
    
});
$(document).ready(function(){
    $(".h2sw").click(function(){
        $("#sw").show().fadeOut(2000);
    });
    
});
$(document).ready(function(){
    $(".h2db").click(function(){
        $("#db").show().fadeOut(9000);
    });
    
});
$(document).ready(function(){
    $(".h2ap").click(function(){
        $("#ap").show().fadeOut(100);
    });
    
});

$(document).ready(function() {
    // Show the button when the user scrolls down 200 pixels
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 200) {
        $('.up').fadeIn();
      } else {
        $('.up').fadeOut();
      }
    });

    // Scroll to top when the button is clicked
    $('.up').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500); // You can adjust the scroll speed (500 milliseconds in this example)
    });
  });

  $(document).ready(function(){
    $(".cart").click(function(){
        $(".cartpage").slideDown();  
    })
    $("h5").click(function(){
        $(".cartpage").slideUp(500);
    })
    
  });

  $(document).ready(function(){

    $("#cartbtn").click(function(){
        var i=0;
        $(".quantity").text(i+=1);
    })

    $("#cartbtn").click(function(){
        var elem=$("#cartbtn").parent().clone();
        $(".cartpage").addClass("food list img");
        
        $(".cartpage").append(elem);
    });
    
  });