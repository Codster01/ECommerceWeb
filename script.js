const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart ul');

let cartItems = [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    
    const productLi = event.target.closest('li');
    const productId = productLi.getAttribute('data-product-id');
    const productName = productLi.querySelector('h3').textContent;
    const productPrice = productLi.querySelector('.price').textContent;

    const item = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
    };

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push(item);
    }

    displayCartItems();
  });
});

function displayCartItems() {
  
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} (${item.quantity}) - ${item.price}`;
    cartItemsList.appendChild(li);
  });
}
