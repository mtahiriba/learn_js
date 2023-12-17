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
