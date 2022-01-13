$(() => {
  const populateCart = () => {
    let total = 0;
    let products = JSON.parse(localStorage.getItem('products'));
    for (const obj of products) {
      console.log('obj', obj);
      let container = `
        <div class="card mb-3" style="max-width: 540px;" id="${obj.productId}">
        <div class="row g-0">
          <div class="col-md-4 cart-imgs">
            <img src="${obj.productThumbnail}" class="img-fluid rounded-start" alt="${obj.productName}" width="300">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Item: ${obj.productName}</h5>
              <p class="card-text">${obj.productDescription}</p>
              <p class="card-text">Unit price: $${obj.productUnitPrice}</p>
            </div>
          </div>
        </div>
      </div>
                `
      $("#order-items").append(container);
      total = total + parseFloat(obj.productUnitPrice)
      $(".totals-value").html(total);
    }
  }

  //clear storage and go back to menu page
  $("#clear-cart").on("click", function(event) {
    const itemCard = $('.card');
    itemCard.remove();
    $('.totals-value').html(0);

    localStorage.clear();
  })

    $(".checkout").on("click", function(event) {

      let products = JSON.parse(localStorage.getItem('products'));

      $.post('/checkout', {data: products}, (response) => {
        console.log("order created")
      })
      // get all items from local storeage
      // encode
      // send back to checkout endpoint
    })



  populateCart();
  removeItem();
})
