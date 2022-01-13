// Client facing scripts here
const addCart = function (id, name, description, price, picture_url) {
  alert(id + name + "-" + description);
  console.log('id', id);
  console.log('Price', price);
  console.log('name', name);
  console.log('description', description);
  console.log('thumbnail', picture_url);

  let products = [];

  if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
  }

  products.push({ 'productId': id, 'productName': name, 'productDescription': description, 'productUnitPrice': price, 'productThumbnail': picture_url });

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
          <img src="${menu_items.picture_url}"
          alt="${menu_items.name}" width="300">
          <div class="item-info">
          <p>${menu_items.name}</p>
          <p>${menu_items.description}</p>
          <p>$${menu_items.price}</p>
          </div>
          <div class="buttons ${isSignIn ? 'afterSignUp' : 'beforeSignUp'}">
            <button class="btn" onclick="addCart(${menu_items.id}, \'${menu_items.name}\', \'${menu_items.description}\', ${menu_items.price}, \'${menu_items.picture_url}\')">
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
  });
};

$(() => {
  $.ajax({
    method: "GET",
    url: "/menu_items"
  }).done((response) => {
    renderMenu(response.menu_items);
  });
});
