let productsList = [
  {
    catagory: "electronics",
    name: "Earput bluetooth headphone white",
    price: 699,
    Image: "./pic/bluetooth.jpg",
  },
  {
    catagory: "cent",
    name: "Boys body spreey",
    price: 1000,
    Image: "./pic/cent.jpg",
  },
  {
    catagory: "electronics",
    name: "Earput bluetooth headphone black",
    price: 700,
    Image: "./pic/earput.jpg",
  },
  {
    catagory: "electronics",
    name: "Wareless headphone",
    price: 1200,
    Image: "./pic/headphone.jpg",
  },
  {
    catagory: "shows",
    name: "High hill show for ledis",
    price: 1500,
    Image: "./pic/ladisShow.jpg",
  },
  {
    catagory: "electronics",
    name: "HP laptop",
    price: 60000,
    Image: "./pic/laptop.jpg",
  },
  {
    catagory: "electronics",
    name: "lenovo laptop",
    price: 40000,
    Image: "./pic/laptop2.jpg",
  },
  {
    catagory: "T-Shirt",
    name: "T-Shirt for girl",
    price: 500,
    Image: "./pic/ledisTshirt.jpg",
  },
  {
    catagory: "electronics",
    name: "Apple Macbook",
    price: 150000,
    Image: "./pic/macbook.jpg",
  },
  {
    catagory: "shows",
    name: "Shows for man",
    price: 1500,
    Image: "./pic/shows.jpg",
  },
  {
    catagory: "electronics",
    name: "sumsang Galaxy S21 Altra",
    price: 15000,
    Image: "./pic/smartphone.jpg",
  },
  {
    catagory: "sunglass",
    name: "Black sunglass",
    price: 699,
    Image: "./pic/sunglass.jpg",
  },
  {
    catagory: "T-Shirt",
    name: "balck t-shirt for man",
    price: 400,
    Image: "./pic/t-shirt.jpg",
  },
  {
    catagory: "electronics",
    name: "New watch white",
    price: 10000,
    Image: "./pic/watch.jpg",
  },
];
// let product = document.querySelector(".product");
let products = document.querySelector(".Products");

let productLangth = productsList.length;

for (let i = 0; i < productLangth; i++) {
  //create product section
  let product = document.createElement("div");
  product.classList.add("product");
  products.appendChild(product);

  //find product details and image from productList
  let productPic = productsList[i].Image;
  let price = productsList[i].price;
  let name = productsList[i].name;

  //create product details section
  let productName = document.createElement("h4");
  let productPrice = document.createElement("h3");
  let productDetails = document.createElement("div");

  //create and add product image to product section
  let productImage = document.createElement("div");
  productImage.classList.add("product-image");
  product.appendChild(productImage);
  let image = document.createElement("img");
  productImage.appendChild(image);
  image.src = productPic;

  //add product details to product details section
  productDetails.appendChild(productName);
  productDetails.appendChild(productPrice);
  productDetails.classList.add("product-details");
  product.appendChild(productDetails);

  //add price and details
  productName.innerHTML = name;
  productPrice.innerHTML = `price: ${price}$`;
}

//filter product
const search = () => {
  let input = document.querySelector("#input-product").value.toLowerCase();

  for (let i = 0; i < productLangth; i++) {
    let product = document.querySelectorAll(".product");
    let productName = productsList[i].name.toLowerCase();
    //use inclodes method to filter product
    //if product name includes input value then display it otherwise hide it
    if (productName.includes(input)) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
};
//filter product by catagory
