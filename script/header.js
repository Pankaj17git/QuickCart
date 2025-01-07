export function renderHeader () {
    const header = `
        <div class="left-section">
        <div class="brand-container">
          <a href="quickCart.html">
            <img src="logo/QuickCart.png" alt="brand logo" class="logo brand-logo-small">
            <img src="logo/QuickCart-big.png" alt="" class="logo brand-logo-big">
          </a>
        </div>
      </div>
      <div class="middel-section">
        <div class="input-container">
          <input type="text" placeholder="Search for Products, Brands and More">
        </div>
        <div class="search-icon-container">
          <button>
            <img class="search-icon" src="logo/search.svg">
          </button>
        </div>
      </div>
      <div class="right-section">
        <div class="action-item">Login</div>
        <div class="action-item">
          <a href="Checkout.html" style="text-decoration: none;color: black">
            Cart
          </a>
        </div>
        <div class="action-item">Become a Seller</div>
      </div>
    `;

    document.querySelector('.js-header-container')
    .innerHTML = header;
}