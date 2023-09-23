$(document).ready(function(){
    $(".h2adb").click(function(){
        $("#adb").show().fadeOut(4000);
    });
    
});

$(document).ready(function(){
    $(".h2strt").click(function(){
        $("#strt").show().fadeOut(4000);
    });
    
});
$(document).ready(function(){
    $(".h2sl").click(function(){
        $("#sl").show().fadeOut(4000);
    });
    
});
$(document).ready(function(){
    $(".h2mc").click(function(){
        $("#mc").show().fadeOut(4000);
    });
    
});
$(document).ready(function(){
    $(".h2sw").click(function(){
        $("#sw").show().fadeOut(4000);
    });
    
});
$(document).ready(function(){
    $(".h2db").click(function(){
        $("#db").show().fadeOut(4000);
    });
    
});
$(document).ready(function(){
    $(".h2ap").click(function(){
        $("#ap").show().fadeOut(4000);
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
        $(".cartpage").addClass("cart-display"); 
    })
    $("h8").click(function(){
        $(".cartpage").removeClass("cart-display"); 
    })
    
  });
  
  $(document).ready(function(){
    function increment(){
        var i=0;
        $(".cartbtn").click(function(){
        
            $(".quantity").text(i+=1);
            $(".cpbtn").show();
            
        })

    }
    increment();
    $(".cartbtn").click(function(){
        var elem=$(this).siblings("img, p, h3").clone();        
        $(".cartitems").append(elem);
    });
    
  });

  $(document).ready(function(){
    $(".clear-cart").click(function(){
        $(".cartitems").empty();
        $(".cartpage").slideUp(500);
        $(".cpbtn").hide();
        $(".quantity").text("0")
        increment();
        
    })
    
  });

  $(document).ready(function(){
    function checkContent() {
        if ($(".cartitems").empty ) {
            // Content is present, show the cpbtn section
            $(".cpbtn").hide()
        } 
    }
    checkContent()
  });