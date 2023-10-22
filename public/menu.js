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
        $(".cartpage").addClass(".cartpage show"); 
        
        
    })
    $("h8").click(function(){
        
        $(".cartpage").removeClass(".cartpage show");
        $(".cartpage").addClass(".cart-hide");  
       
    })
    
  });
  

   
 
  $(document).ready(function() {
    $(".cpbtn").hide();
    $(".cart-total").hide();
    var totalCost=0;
    var i=0;
    $(".cartbtn").click(function() {
      var quant=$(".quantity")
      var $parentDiv = $(this).closest(".list");
      var productName = $parentDiv.find("h3").text();
      var productPrice = parseFloat($parentDiv.find("span").text()); // Parse the price as a float
      var productImageSrc = $parentDiv.find("img").attr("src"); // Get the image source
  
      // Create a new cart item div and set its properties
      var $cartItem = $("<div>").addClass("cartitem");
      var $cpbtn = $(".cpbtn");
      var $carttotal = $(".cart-total");
  
      // Create an img element with the product image
      var $productImage = $("<img>").attr("src", productImageSrc);
  
      var $cartItems2 = $("<div>").addClass("cartitems2");
      var $plusButton = $("<button>").addClass("plus").text("+");
      var $quantitySpan = $("<span>").text("1");
      var $minusButton = $("<button>").addClass("minus").text("-");
  
      $cartItems2.append($plusButton);
      $cartItems2.append($quantitySpan);
      $cartItems2.append($minusButton);
  
      // Create a div for cart items that contains both the product name and image
      var $cartItems = $("<div>").addClass("cartitems");
      $cartItems.append($("<h3>").text(productName));
      $cartItems.append($productImage);
  
      var $cartItems3 = $("<div>").addClass("cartitems3").append($("<span>").text(productPrice));
  
      $cartItem.append($cartItems, $cartItems2, $cartItems3);
      $(".cartpage").append($cartItem);
      $(".cartpage").append($carttotal);
      $(".cartpage").append($cpbtn);
      
      $cpbtn.show();
      $carttotal.show();
      
      
  updateTotalCost();
  i+=1;
  $(".quantity").text(i);
      // Add event handlers for the plus and minus buttons within the cart item
      $plusButton.click(function() {
        i+=1;
        quant.text(i)
        var quantity = parseInt($quantitySpan.text());
        quantity += 1;
        $quantitySpan.text(quantity);
        updateitemcost()
        updateTotalCost();
      });
  
      $minusButton.click(function() {
        i-=1;
        quant.text(i)
        var quantity = parseInt($quantitySpan.text());
        if (quantity > 0) {
          quantity -= 1;
          $quantitySpan.text(quantity);
          updateitemcost()
        updateTotalCost();
        }
  
        // Check if quantity is zero and remove the cart item
        if (quantity === 0) {
          $cartItem.remove();
          
        updateTotalCost();
        }
        
      });
  function updateitemcost(){
    var quantity = parseInt($quantitySpan.text());
        var itemcost = productPrice * quantity;
        $cartItems3.find("span").text(itemcost.toFixed(2));
      }
  
      function updateTotalCost() {
       totalCost=0;
        $(".cartitem").each(function() {
          var itemPrice = parseFloat($(this).find(".cartitems3 span").text());
          totalCost +=  itemPrice;
        });
  
        // Update the total cost and display it
        $carttotal.find("span").text(totalCost.toFixed(2)); // Display the total cost with two decimal places
      }
      
    }); 
  
    $(".clear-cart").click(function(){
     $(".cartitem").remove();
     $(".cart-total span").text("0")
     i=0;
     $(".quantity").text("0");
    });
  }); 


