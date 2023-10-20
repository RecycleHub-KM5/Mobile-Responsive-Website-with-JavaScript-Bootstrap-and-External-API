// const network = "https://6530b4526c756603295ef07e.mockapi.io/";
const url = new URL("https://6530b4526c756603295ef07e.mockapi.io/Produk");

const listProduct = document.getElementById("list-product");
async function getDataProduct() {
    try {
        let respons = await fetch(url);
        let product = await respons.json();

        product.map((item) => {
            listProduct.innerHTML += `
            <button id="btn-toDetail" onclick="window.location.href='detail-produk.html'">
              <div class="card bg-dark mx-1 mb-5" style="width: 18rem; height: 20rem">
                  <img
                      class="card-img-top img-product"
                      src="${item.avatar}"
                      alt="Card image cap"
                  />
                  <div class="card-body">
                      <h6 class="card-text">${item.name}</h6>
                      <p class="opacity-75">${item.Deskripsi}</p>
                      <p>${item.Harga}</p>
                  </div>
              </div>
            </button>
        `;
        });
    } catch (error) {
        console.log(error);
    }
}

getDataProduct();

//Filter Plastik
const plastik = document.getElementById("plastik");
plastik.onclick = function () {
    getProductFilter("Plastik");
};

//Filter Kertas
const kertas = document.getElementById("kertas");
kertas.onclick = function () {
    getProductFilter("Kertas");
};

//Filter Kardus
const kardus = document.getElementById("kardus");
kardus.onclick = function () {
    getProductFilter("Kardus");
};

async function getProductFilter(filterParam) {
    listProduct.innerHTML = ``;
    try {
        url.searchParams.delete("search");
        url.searchParams.append("search", filterParam);
        let respons = await fetch(url);
        let product = await respons.json();

        product.map((items) => {
            listProduct.innerHTML += `
      <button onclick="window.location.href='../pages/detail-produk.html';">
      <div class="card bg-dark mx-1 mb-5" style="width: 18rem; height: 20rem;">
              <img class="card-img-top img-product" src="${items.avatar}" alt="Card image cap">
              <div class="card-body">
                <h6 class="card-text">${items.name}</h6>
                <p class="opacity-75">${items.Deskripsi}</p>
                <p>${items.Harga}</p>
              </div>
            </div>
            </button>
      `;
        });
    } catch (error) {
        console.log(error);
    }
}
