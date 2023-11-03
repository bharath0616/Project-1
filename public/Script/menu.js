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

    $(window).scroll(function() {
      if ($(this).scrollTop() >= 200) {
        $('.up').fadeIn();
      } else {
        $('.up').fadeOut();
      }
    });

    $('.up').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500); 
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
    var totalCost = 0;
    var i = 0;
    var cartItems = {}; 

    $(".cartbtn").click(function() {
        var quant = $(".quantity");
        var $parentDiv = $(this).closest(".list");
        var productName = $parentDiv.find("h3").text();
        var productPrice = parseFloat($parentDiv.find("span").text());
        var productImageSrc = $parentDiv.find("img").attr("src");
        if (cartItems[productName]) {
            cartItems[productName].quantity += 1;
            cartItems[productName].itemCost = productPrice * cartItems[productName].quantity;
            updateTotalCost();
            updateCartItemCount();
        } else {
            var $cartItem = $("<div>").addClass("cartitem");
            var $cpbtn = $(".cpbtn");
            var $carttotal = $(".cart-total");

            var $productImage = $("<img>").attr("src", productImageSrc);

            var $cartItems2 = $("<div>").addClass("cartitems2");
            var $plusButton = $("<button>").addClass("plus").text("+");
            var $quantitySpan = $("<span>").text("1");
            var $minusButton = $("<button>").addClass("minus").text("-");

            $cartItems2.append($plusButton);
            $cartItems2.append($quantitySpan);
            $cartItems2.append($minusButton);

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
            i += 1;
            $(".quantity").text(i);

            $plusButton.click(function() {
                i += 1;
                quant.text(i);
                cartItems[productName].quantity += 1;
                cartItems[productName].itemCost = productPrice * cartItems[productName].quantity;
                $quantitySpan.text(cartItems[productName].quantity);
                updateTotalCost();
            });

            $minusButton.click(function() {
                i -= 1;
                quant.text(i);
                if (cartItems[productName].quantity > 0) {
                    cartItems[productName].quantity -= 1;
                    cartItems[productName].itemCost = productPrice * cartItems[productName].quantity;
                    $quantitySpan.text(cartItems[productName].quantity);
                    updateTotalCost();
                }

                if (cartItems[productName].quantity === 0) {
                    $cartItem.remove();
                    delete cartItems[productName];
                    updateTotalCost();
                }
                updateCartItemCount();
            });

            cartItems[productName] = {
                quantity: 1,
                itemCost: productPrice
            };
        }

        function updateTotalCost() {
            totalCost = 0;
            for (const item in cartItems) {
                totalCost += cartItems[item].itemCost;
            }

            $carttotal.find("span").text(totalCost.toFixed(2));
        }

        function updateCartItemCount() {
            var itemCount = 0;
            for (const item in cartItems) {
                itemCount += cartItems[item].quantity;
            }
            $(".quantity").text(itemCount);
        }
    });

    $(".clear-cart").click(function() {
        $(".cartitem").remove();
        $(".cart-total span").text("0");
        i = 0;
        $(".quantity").text("0");
        cartItems = {}; 
    });
});


  document.getElementById("navigate").addEventListener("click", function() {
    window.location.href = "index.html";
  });
  

