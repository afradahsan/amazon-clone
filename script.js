const products=[{
  id: "s23-ultra-123456789",
  image: "https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_UY327_FMwebp_QL65_.jpg",
  name: 'SAMSUNG Galaxy S23 Ultra Cell Phone, Phantom Black',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 99990
}, {
  id: "jordan-black-white-123456789",
  image: "https://m.media-amazon.com/images/I/51q8mx4il2L._AC_UL600_FMwebp_QL65_.jpg",
  name: 'Jordan Mens Retro 6 - Hare Neutral Grey/Black-White',
  rating: {
    stars: 5,
    count: 417
  },
  priceCents: 24550
}, {
  id: "north-face-tee-white-123456789",
  image: "https://m.media-amazon.com/images/I/61c64ekKcTL._AC_UL600_QL65_.jpg",
  name: "THE NORTH FACE Men's Short Sleeve Box NSE Tee",
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 2995
},
  {
    id: "blender-smoothie-11pc-123456789",
    image: "https://m.media-amazon.com/images/I/61qATnpHduL._AC_UY327_FMwebp_QL65_.jpg",
    name: 'Magic Bullet Blender, Small, Silver, 11 Piece Set',
    rating: {
      stars: 4,
      count: 124
    },
    priceCents: 3895
  },
  {
    id: "go-pro-11-black-123456789",
    image: "https://m.media-amazon.com/images/I/617sGSjmC1L._AC_SY450_.jpg",
    name: 'GoPro HERO11 Black - Waterproof Action Camera with 5.3K60 Ultra HD Video',
    rating: {
      stars: 4,
      count: 124
    },
    priceCents: 39700
  },
  {
    id: "ikigai-prod-book-123456789",
    image: "https://m.media-amazon.com/images/I/41mtUoTi8ZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    rating: {
      stars: 4.5,
      count: 5200
    },
    priceCents: 3895
  },
  {
    id: "garnier-charcoal-scrub-123456789",
    image: "https://m.media-amazon.com/images/I/41hryFSg58L._SX300_SY300_QL70_FMwebp_.jpg",
    name: 'Garnier SkinActive Charcoal Blackhead Eliminating Scrub',
    rating: {
      stars: 4,
      count: 124
    },
    priceCents: 759
  }

];

let productsHTML = ``;

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}  
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let  matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem=item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      }
      else{
        cart.push({
          productId: productId, 
          quantity: 1
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      })


      document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity
 
  })
  
});

const cart = [];