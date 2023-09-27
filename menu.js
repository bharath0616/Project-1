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
  
  
  $(document).ready(function() {
    $(".cartbtn").click(function() {
      // Get the product details from the clicked item
      var $parentDiv = $(this).closest(".list");
      var productName = $parentDiv.find("h3").text();
      var productPrice = parseFloat($parentDiv.find("span").text()); // Parse the price as a float

      // Create a new cart item div and set its properties
      var $cartItem = $("<div>").addClass("cartitem");
      var $cartItems = $("<div>").addClass("cartitems").append($("<h3>").text(productName));
      var $cartItems2 = $("<div>").addClass("cartitems2");
      var $plusButton = $("<button>").addClass("plus").text("+");
      var $quantitySpan = $("<span>").text("1");
      var $minusButton = $("<button>").addClass("minus").text("-");
      $cartItems2.append($plusButton, $quantitySpan, $minusButton);
      var $cartItems3 = $("<div>").addClass("cartitems3").append($("<span>").text(productPrice));

      // Append the cart item to the cart container
      $cartItem.append($cartItems, $cartItems2, $cartItems3);
      $(".cartpage").append($cartItem);

      // Add event handlers for the plus and minus buttons within the cart item
      $plusButton.click(function() {
        var quantity = parseInt($quantitySpan.text());
        quantity += 1;
        $quantitySpan.text(quantity);
        updateTotalCost();
      });

      $minusButton.click(function() {
        var quantity = parseInt($quantitySpan.text());
        if (quantity > 0) {
          quantity -= 1;
          $quantitySpan.text(quantity);
          updateTotalCost();
        }
      });

      function updateTotalCost() {
        var quantity = parseInt($quantitySpan.text());
        var totalCost = productPrice * quantity;
        $cartItems3.find("span").text(totalCost);
      }
    });
  });