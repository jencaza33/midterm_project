$(() => {
  $('#add-to-cart').click(function () {
    console.log('click');
  })
})


// const e = require("express");
// const menu_items = require("../../routes/menu_items");
// const order_items = require("../../routes/order_items");

// function addProduct(){
//   let products = [];
//   if(localStorage.getItem('products')){
//       products = JSON.parse(localStorage.getItem('products'));
//   }
//   products.push({'productId' : productId + 1, image : '<imageLink>'});
//   localStorage.setItem('products', JSON.stringify(products));
// }

// $(() => {
//   const addProduct = function () {
//     let products = [];
//   if (localStorage.getItem('products')) {
//     products = JSON.parse(localStorage.getItem('products'));
//   }
//   products.push({ productId: menu_items.id, image: menu_items.thumbnail_url });
//   localStorage.setItem('products', JSON.stringify(products));
//   }
//   const addToCart = function () {
//     $('.add-to-cart').on('click', (e) => {
//       e.preventDefault();
//       addProduct();
//       console.log('this', this);
//       console.log('addProduct()', addProduct());
//     })
//   }
//   addToCart()

// })

// // const order_items = require("../../routes/order_items");

// // $(() => {
// //   let $total = 0;
// //   const cart = JSON.parse(localStorage.getItem(order_items));
// //   console.log('cart', cart);
// //   //store each items(object) in cartItem and append to #cart-body
// //   const populateCart = (db) => {
// //     for(item in cart) {
// //       let cartItem = cart[item];
// //         let $container = `
// //         <div class="card mb-3" style="max-width: 540px;">
// //         <div class="row g-0">
// //           <div class="col-md-4 cart-imgs">
// //             <img src="${cartItem.thumbnail_url}" class="img-fluid rounded-start" alt="${cartItem.name}" width="300">
// //           </div>
// //           <div class="col-md-8">
// //             <div class="card-body">
// //               <h5 class="card-title">${cartItem.name}</h5>
// //               <p class="card-text">${cartItem.description}</p>
// //               <p class="card-text">${cartItem.unit_price}</p>
// //             </div>
// //             <form method="POST" action="/order_index">
// //             <button class="cart-button" type="submit" id="clear-order-button">
// //               <span class="add-to-cart">Add to cart</span>
// //             </button>
// //             <input type="hidden" name="item" value="${cartItem.id}">
// //           </form>
// //           </div>
// //         </div>
// //       </div>
// //         `;
// //         $("#order-items").append($container);
// //         $total = $total + parseFloat(cartItem.unit_price)
// //         $total = round($total);
// //         $(".totals-value").html($total)
// //       }
// //       db();
// //   }

// //   //takes remove/orderclear function as cb
// //   populateCart( () => {
// //     //remove selected items in the cart
// //     $("#order-items .card").on("click", function (event) {
// //       event.preventDefault();
// //      const cart = JSON.parse(localStorage.getItem(order_items))
// //      const itemId = $(event.target).data("id");
// //      console.log('itemId', itemId);
// //       $(this).parent().parent().remove();

// //       $total = $total - parseFloat(cart[itemId].unit_price)
// //       $total = round($total);

// //       $(".totals-value").html($total)
// //       delete cart[itemId]


// //        localStorage.setItem(order_items, JSON.stringify(cart))
// //     })
// //   })

// //     //clear storage and go back to menu page
// //     $("#clear-order-button").on("click", function (event) {
// //       delete cart
// //       localStorage.clear();
// //   })
// // });

// // function round(number) {
// // return Math.round(number * 100) / 100;
// // }
