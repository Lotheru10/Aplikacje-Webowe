async function fetchProduct() {
  const url = "https://dummyjson.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    const products = data.products.slice(0, 30);
    const tableBody = document
      .getElementById("productTable")
      .getElementsByTagName("tbody")[0];

    products.forEach((product) => {
      const row = document.createElement("tr");

      const imgCell = document.createElement("td");
      const img = document.createElement("img");
      img.src = product.thumbnail;
      img.alt = product.title;
      imgCell.appendChild(img);
      row.appendChild(imgCell);

      const titleCell = document.createElement("td");
      titleCell.textContent = product.title;
      row.appendChild(titleCell);
      const descCell = document.createElement("td");
      descCell.textContent = product.description;
      row.appendChild(descCell);
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error(error.message);
  }
}
document.addEventListener("DOMContentLoaded", fetchProduct);
