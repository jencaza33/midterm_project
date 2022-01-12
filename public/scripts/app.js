// Client facing scripts here
const addCart = function (id, name, description, unitPrice, thumbnail) {
  console.log('id', id);
  console.log('unitPrice', unitPrice);
  console.log('description', name);
  console.log('description', description);
  console.log('description', thumbnail);
  let products = [];
  if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
  }
  products.push({ 'productId': id, 'productName': name, 'productDescription': description, 'productUnitPrice': unitPrice, 'productThumbnail': thumbnail });
  localStorage.setItem('products', JSON.stringify(products));
}

const createMenu = function (menu_items) {
  const $body = $(document.body);
  const isSignIn = $body.data('is_sign_in');
  console.log('menu_items', typeof menu_items.name);
  return $(
    `
<div class="browse-all">
  <div class="browse-all-img">
      <div class="items item1">
          <img src="${menu_items.thumbnail_url}"
          alt="${menu_items.name}" width="300">
          <div class="item-info">
          <p>${menu_items.name}</p>
          <p>${menu_items.description}</p>
          <p>$${menu_items.unit_price}</p>
          </div>
          <div class="buttons ${isSignIn ? 'afterSignUp' : 'beforeSignUp'}">
            <button class="btn" onclick="addCart(${menu_items.id}, \'${menu_items.name}\', \'${menu_items.description}\', ${menu_items.unit_price}, \'${menu_items.thumbnail_url}\')">
              <span>Add to cart</span>
            </button>
            <input type="hidden" name="item" value="${menu_items.id}">
          </div>
      </div>
  </div>
</div>
  `)
}


const renderMenu = function (items) {
  const containerMenu = $('#menu-items');
  // console.log(items);
  items.forEach((menu_items) => {
    containerMenu.append(createMenu(menu_items));
  })
}

$(() => {
  $.ajax({
    method: "GET",
    url: "/menu_items"
  }).done((response) => {
    renderMenu(response.menu_items);
  })
});
