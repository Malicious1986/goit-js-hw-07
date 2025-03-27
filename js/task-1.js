const categories = document.querySelectorAll(".item");
if (categories.length) {
  console.log(`Number of categories: ${categories.length}`);
}
categories.forEach((elem) => {
  const header = elem.querySelector("h2");
  const subCategories = elem.querySelectorAll("li");

  if (header && subCategories.length) {
    console.log(`Category: ${header.textContent}`);
    console.log(`Elements: ${subCategories.length}`);
  }
});
