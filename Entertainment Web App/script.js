const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const searchInfo = document.getElementById("searchInfo");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  searchInfo.textContent = searchText ? `You searched for: "${searchText}"` : "";

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if (title.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
