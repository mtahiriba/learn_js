import { products } from '../utils/products.js';

let id = 0;
function handleAddProduct() {
  // step 03 & 04: Get input field values
  const name = document.getElementById("productName").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  // step 05: fetch table-body container
  const tableBody = document.getElementById("table-body");

  // step 06: append new row to table-body
  tableBody.innerHTML += `
        <tr>
            <th scope="row">${++id}</th>
            <td>${name}</td>
            <td>${price}</td>
            <td>${quantity}</td>
        </tr>
    `;

  // step 07: clear input fields
  document.getElementById("productName").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}

// Add onclick event listener to add button  // Function name
document.getElementById("addButton").addEventListener("click", handleAddProduct);

// For Each Loop
// Render Cards
products.forEach(function(product){
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML += `<div class="card mt-5" style="width: 22%;">
  <img class="card-img-top" src=${product.image} alt="Card image cap" style="height: 150px; object-fit: cover;">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn btn-primary">Learn more...</a>
  </div>
</div>`
});

// Tab CSS change
function handleTabClick(tab_name){
  
  const laptop = document.getElementById("laptop");
  const tablet = document.getElementById("tablet");
  const mobile = document.getElementById("mobile");
  
  if(tab_name == "laptop"){  
    mobile.classList = "";
    laptop.classList = "fw-bold pb-1 border-2 border-bottom border-danger";
    tablet.classList = "";
  } else if(tab_name == "mobile"){
    mobile.classList = "fw-bold pb-1 border-2 border-bottom border-danger";
    laptop.classList = "";
    tablet.classList = "";
  } else if(tab_name == "tablet"){
    mobile.classList = "";
    laptop.classList = "";
    tablet.classList = "fw-bold pb-1 border-2 border-bottom border-danger";
  }
}

// Add onclick event listener to tab links  // function name
document.getElementById("laptop").addEventListener("click", () => handleTabClick("laptop"));
document.getElementById("mobile").addEventListener("click", () => handleTabClick("mobile"));
document.getElementById("tablet").addEventListener("click", () => handleTabClick("tablet"));

