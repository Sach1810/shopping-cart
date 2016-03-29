// an array with all of our cart items
var cart = [];
var total = 0;


var updateCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  total = 0;
  for (var i =0;i < cart.length; i++) {
    var source = $('#new-item-template').html();
    var template = Handlebars.compile(source);
    var newHtml = template(cart[i]);
    
    var itemPrice = cart[i].price;
    total  += itemPrice;

    $('.cart-list').append(newHtml);
  }
   $('.total').html(total);
   removeCart();
}


var addItem = function (item) {
  cart.push(item);

  updateCart();
}

var clearCart = function () {
  $('.cart-list').empty();
  $('.total').html(0);
  cart =[];
}
var removeObject = function(currentItem){
var $current = $(currentItem).closest('.cart-item');
    var index = $current.index();
    cart.splice(index, 1);

    $current.closest('.cart-item').remove();

updateCart();

}

var removeCart = function(){

$('.removeBtn').on('click', function () {
  
  removeObject(this);
});
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {
    product: $(this).closest('.card').data().name,
    price: $(this).closest('.card').data().price
  }

  addItem(item);
  updateCart();

});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();