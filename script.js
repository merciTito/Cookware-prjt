function cart() {
  let name = prompt("What is your name?");
  let utensil = prompt("What's your favorite kitchen utensil?");

  alert(
    "👏👏 Awesome " +
      name +
      "! Grab a set of Kitchen Utensils on your next visit!"
  );
}
let cartButton = document.querySelector(".cart-button");
cartButton.addEventListener("click", cart);
