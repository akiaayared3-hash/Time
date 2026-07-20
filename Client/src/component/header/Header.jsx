import './header.css'

const Hader = () => {
  return (
    <>
     {/* Main Navigation Bar Base  */}
    <header class="navbar navbar-expand-lg navbar-dark bg-black sticky-top custom-header">
        <div class="container mobile-header-container">
            
             {/* 1. MOBILE LEFT: Hamburger Menu  */}
            <button class="navbar-toggler custom-toggler order-1 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            {/* 2. MOBILE CENTER / DESKTOP LEFT: Accurate Clock Logo  */}
            <a class="navbar-brand logo-wrapper order-2 mx-auto mx-lg-0" href="#">
                 {/* The golden clock arc directly on top  */}
                <div class="logo-clock-top">
                    <span class="clock-pin"></span>
                </div>
                <div class="logo-title">
                    <span>T</span><span>I</span><span>M</span><span class="custom-e"></span>
                </div>
                <div class="logo-subtitle">BURGER & PIZZA</div>
            </a>

             {/* 3. MOBILE RIGHT: Actions Group for Mobile view (Cart + Login Profile)  */}
            <div class="d-flex d-lg-none align-items-center gap-3 order-3 mobile-action-group">
                <a href="login.html" class="nav-icon-link mobile-profile-icon">
                    <i class="bi bi-person-circle"></i>
                </a>
                <a href="#" class="nav-icon-link position-relative mobile-cart-icon">
                    <i class="bi bi-cart3"></i>
                    <span class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle header-cart-badge">2</span>
                </a>
            </div>
            
           {/* 4. COLLAPSIBLE AREA: Links & Desktop Right-side Items */}
            <div class="collapse navbar-collapse order-4" id="mainNavbar">
              {/* Main Nav Links (Centered on desktop)  */}
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 custom-nav-links">
                    <li class="nav-item"><a class="nav-link active" href="/">HOME</a></li>
                    <li class="nav-item"><a class="nav-link" href="/menu">MENU</a></li>
                    <li class="nav-item"><a class="nav-link" href="/about">ABOUT</a></li>
                    <li class="nav-item"><a class="nav-link" href="/categories">CATEGORIES</a></li>
                    <li class="nav-item"><a class="nav-link" href="/contact">CONTACT</a></li>
                </ul>
                
                {/* Desktop Right Actions (Includes the Fixed Embed Search Input & Login Trigger)  */}
                <div class="d-none d-lg-flex align-items-center gap-4 desktop-action-group">
                    
                     {/* Fixed Inline Search Container Block  */}

                    <div class="header-search-container">
                        <form action="#" method="GET" class="position-relative search-form-box">
                            <input type="text" placeholder="Search menu..." class="form-control search-input-field" />
                            <button type="submit" class="search-submit-btn"><i class="bi bi-search"></i></button>
                        </form>
                    </div>

                      {/* User Account Profile Login link  */}
                    <a href="login.html" class="nav-icon-link desktop-login-btn" title="Login Profile">
                        <i class="bi bi-person-circle"></i>
                    </a>

                     {/* Cart Toggle Link  */}
                    <a href="#" class="nav-icon-link position-relative">
                        <i class="bi bi-cart3"></i>
                        <span class="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle header-cart-badge">2</span>
                    </a>
                    <a href="#" class="btn btn-gold text-uppercase fw-bold">ORDER NOW</a>
                </div>
            </div>

        </div>
    </header>
    </>
  )
}

export default Hader
