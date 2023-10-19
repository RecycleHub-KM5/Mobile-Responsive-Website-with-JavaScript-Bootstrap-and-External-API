const network = "https://6530b4526c756603295ef07e.mockapi.io/";

const listProduct = document.getElementById("list-product");
async function fetchListProduct(){
    const res = await fetch(
        "https://6530b4526c756603295ef07e.mockapi.io/Produk"
    );

    const data = res.json();
    data.map((item) => {
        listProduct.innerHTML += `
        <div class="card bg-dark mx-1" style="width: 18rem; height: 20rem;">
                <img class="card-img-top img-product" src="${item.avatar}" alt="Card image cap">
                <div class="card-body">
                  <h6 class="card-text">${item.name}</h6>
                  <p class="opacity-75">${item.Deskripsi}</p>
                  <p>${item.Harga}</p>
                </div>
              </div>
        `;
    });
}
