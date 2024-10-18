 // Array of announcements
 const announcements = [
  "Florencia Diamonds - From the House of Jewel One",
  "Diwali Dhamaka Offer - Zero Making Charges on Diamond Jewellery",
  "Flo with Florencia - Fashionable Jewellery for the Fashionable You",
];

let index = 0;

function updateAnnouncement() {
  const announcementElement = document.getElementById("announcement");
  announcementElement.textContent = announcements[index];
  index = (index + 1) % announcements.length;
}

// Initial call
updateAnnouncement();

// Update every 5 seconds
setInterval(updateAnnouncement, 5000);
function toggleWishlist(btn) {
    const icon = btn.querySelector("#wishlistIcon");
    if (icon.getAttribute("fill") === "none") {
      icon.setAttribute("fill", "pink");
    } else {
      icon.setAttribute("fill", "none");
    }
  }



 