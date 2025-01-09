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

     <b> 
      <div class="right-section">
        <div class="action-item"> 
       <i class="bi bi-house"></i>
       <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
        Home
        </div>


        <div class="action-item">


          <a href="/Checkout.html" style="text-decoration: none;color: black">  
          <i class="bi bi-cart3"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>     
Cart
          <div style="position: relative;">
    </div>

          <a href="Checkout.html" style="text-decoration: none;color: black">
        

          </a>
        </div>
        <div class="action-item">
        <i class="bi bi-bell"></i>
        <svg xmlns="http://www.w3.org/2000/svg"  width="17.5" height="16"fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
       Notifiction </div>

 <div class="action-item">
 <i class="bi bi-person-circle"></i>
 <svg xmlns="http://www.w3.org/2000/svg"  width="36" height="70px" !important fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" >
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></div>


      </div>
     </b>

    `;

    document.querySelector('.js-header-container')
    .innerHTML = header;
}