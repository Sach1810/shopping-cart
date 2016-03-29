// an array with all of our cart items
var cart = [];



var updateCart = function () {
  // TODO: finish
}


var addItem = function (item) {
  // TODO: finish

}

var clearCart = function () {
  // TODO: finish
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {
    product: $(this).closest('.card').data().name,
    price: $(this).parent().siblings('.pricebox').children().html()
  }

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();