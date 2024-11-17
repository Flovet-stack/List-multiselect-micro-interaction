// Get all necessary elements
const bgHighlight = document.querySelector(".bg-highlight");
const userItems = document.querySelectorAll(".user-item");
const selectedCountSpan = document.querySelector(".selected-count");
const checkboxes = document.querySelectorAll(".user-checkbox");

// Initial state
bgHighlight.style.opacity = "0";

// Function to update selected count
function updateSelectedCount() {
  const checkedCount = document.querySelectorAll(
    ".user-checkbox:checked"
  ).length;
  selectedCountSpan.textContent =
    checkedCount === 1 ? "1 user selected" : `${checkedCount} users selected`;
}

// Function to handle mouse enter
function handleMouseEnter(event) {
  const item = event.currentTarget;
  const itemRect = item.getBoundingClientRect();
  const listRect = item.parentElement.getBoundingClientRect();

  // Calculate the relative position from the top of the list
  const topPosition = itemRect.top - listRect.top;

  // Show and move the highlight with bounce effect
  bgHighlight.style.transform = `translateY(${topPosition}px)`;
  bgHighlight.style.opacity = "1";
  bgHighlight.style.transition =
    "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease";
}

// Function to handle mouse leave from the list
function handleMouseLeave() {
  bgHighlight.style.opacity = "0";
}

// Add event listeners
userItems.forEach((item) => {
  item.addEventListener("mouseenter", handleMouseEnter);
});

document
  .querySelector(".user-list")
  .addEventListener("mouseleave", handleMouseLeave);

// Add change event listeners to checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateSelectedCount);
});

// Initialize count
updateSelectedCount();
