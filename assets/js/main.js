function toggleWishlist(btn) {
    const icon = btn.querySelector("#wishlistIcon");
    if (icon.getAttribute("fill") === "none") {
      icon.setAttribute("fill", "pink");
    } else {
      icon.setAttribute("fill", "none");
    }
  }