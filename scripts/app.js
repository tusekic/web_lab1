

data.categories.forEach(category => {
  console.log(category.name);
});


const container = document.getElementById("category");

data.categories.forEach(category => {
  // napravi div
  const div = document.createElement("div");

  // ubaci sadržaj
  div.innerHTML = `
    <span>${category.name}</span>
  `;

  // dodaj u stranicu
  container.appendChild(div);
});