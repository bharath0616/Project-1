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
  
  $(document).ready(function () {
    var i = 1;
    var costPerProduct = Number($(".cartitems3 p").text()); // Initialize cost per product from h1

    $(".plus").click(function () {
        i += 1;
        $(".cartitems2 span").text(i);

        // Calculate the total cost by multiplying the cost per product by the number of products
        var totalCost = costPerProduct * i;
        $(".cartitems3 p").text(totalCost);
    });

    $(".minus").click(function () {
        if(i>0){
        i -= 1;
        $(".cartitems2 span").text(i);

        // Calculate the total cost by multiplying the cost per product by the number of products
        var totalCost = costPerProduct * i;
        $(".cartitems3 p").text(totalCost);
        }
});
});

$(document).ready(function () {
    $(".cartbtn").click(function () {
        // Get the item details
        var itemName = $("#adb").text();
        var itemPrice = parseInt($(".list p").text()); // Assuming price is an integer

        // Create a new cart item
        var cartItem = $("<div class='cartitem'></div>");
        var cartItems = $("<div class='cartitems'></div>");
        var cartItems2 = $("<div class='cartitems2'></div>");
        var cartItems3 = $("<div class='cartitems3'></div>");

        // Set the cart item details
        cartItems.append("<h3>" + itemName + "</h3>");
        cartItems2.append("<button class='plus'>+</button>");
        cartItems2.append("<span>1</span>");
        cartItems2.append("<button class='minus'>-</button>");
        cartItems3.append("<p>" + itemPrice + "</p>");

        // Append the cart item to the cart section
        cartItem.append(cartItems);
        cartItem.append(cartItems2);
        cartItem.append(cartItems3);
        $(".cartpage").append(cartItem);
    });
});
  