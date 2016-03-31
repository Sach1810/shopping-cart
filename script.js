// an array with all of our cart items
var STOR = 'shopping';
var cart = [];
var total = 0;

var removeLocalStorage = function(){
  localStorage.removeItem(STOR);
  location.reload();

}

var saveToLocalStorage = function (item) {
  localStorage.setItem(STOR, JSON.stringify(cart));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STOR) || '[]');
}

cart = getFromLocalStorage();

var updateCart = function () {
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
}


var addItem = function (item) {
  
  if(itemExists(item)){
    updateItemQty(item);
  }
  else{
    cart.push(item);    
  }



 saveToLocalStorage(cart[0]);

  updateCart();
}

function updateItemQty(item){
  for(var i = 0; i < cart.length; i++){

    if(cart[i].product == item.product){
      cart[i].qty++;
    }  
  }
}
function itemExists(item){

  for(var i = 0; i < cart.length; i++){

    if(cart[i].product == item.product){
      return true;
    }
  }
  return false;
}



// var addItem = function (item) {
//   if (cart.length === 0){
//     //console.log(item.qty + " 52 " + item.product);
//     cart.push(item);
//   } else {
//       for (var i = 0; i < cart.length; i++){
//         if (item.product === cart[i].product) {
//             //console.log(item.product +" "+ cart[i].product);
//             //console.log(cart[i].qty + " before");
//             cart[i].qty++;
//             //console.log(cart[i].qty + " after");
//             //console.log(item.qty + " 59 "+ item.product);
//             break;   
//         } else {
//             //console.log(item.qty + " 61 "+ item.product);
//             cart.push(item); 
//         }
//       }
//   updateCart();
//   }
  // saveToLocalStorage(item);
//   updateCart();
// }


var clearCart = function () {
  $('.cart-list').empty();
  $('.total').html(0);

  cart =[];
}



$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle('show');
});

$('.add-to-cart').on('click', function () {
  var item = {
    product: $(this).closest('.card').data().name,
    price: $(this).closest('.card').data().price,
    qty: 1
  }

  addItem(item);
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();