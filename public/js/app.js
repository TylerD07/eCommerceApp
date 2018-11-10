$(function() {
  let productList = $("#product-list");

  fetchProducts(function(products) {
    productList.empty();
    for (product of products) {
      productList.append(createProductCard(product));
    }
  });
});

function fetchProducts(done) {
  $.get("/api/products", function(data) {
    done(data);
  });
}

function addProduct(name, dept, price, done) {
  $.post(
    "/api/products",
    {
      productName: name,
      deptName: dept,
      price: price
    },
    function(data) {
      done(data);
    }
  );
}

function createProductCard(product) {
  return $(`<div class="col-4 card mx-2 p-2">
            <h4 class="product-name">${product.productName}</h4>
            <div class="product-manufacturer">${product.deptName}</div>
                <div class="row">
                    <div class="col m-3 p-3">
                        <b>Rs. ${product.price}</b>
                    </div>
                <button class="col btn-primary m-3">Buy</button>
                </div>
            </div>`);
}
