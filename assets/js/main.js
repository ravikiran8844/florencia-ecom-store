 // Array of announcements
 const announcements = [
  "CaratLane - A Tanishq Partnership",
  "New arrivals are now available!",
  "20% off your first purchase. Use code: WELCOME20",
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



 