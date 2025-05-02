const gallery = document.getElementById("gallery");

for (let i = 1; i <= 35; i++) {
  const name = `Elegant Heels ${i}`;
  const price = 999;
  const image = `image/AKASH${i}.jpg`;
  const description = `স্টাইলিশ হিল জুতা মডেল ${i}`;

  const container = document.createElement("div");
  container.style.display = "inline-block";
  container.style.margin = "10px";
  container.style.textAlign = "center";
  container.style.border = "1px solid #ccc";
  container.style.padding = "10px";
  container.style.borderRadius = "10px";

  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.style.width = "200px";
  img.style.borderRadius = "8px";
  container.appendChild(img);

  const title = document.createElement("h4");
  title.innerText = name;
  container.appendChild(title);

  const priceTag = document.createElement("p");
  priceTag.innerText = `৳${price}`;
  container.appendChild(priceTag);

  const viewBtn = document.createElement("button");
  viewBtn.innerText = "View Product";
  viewBtn.style.margin = "5px";
  viewBtn.onclick = function () {
    viewProductDetails(name, description, image, price);
  };
  container.appendChild(viewBtn);

  const buyBtn = document.createElement("button");
  buyBtn.innerText = "Buy Now";
  buyBtn.style.margin = "5px";
  buyBtn.onclick = function () {
    buyNow(name, price, image);
  };
  container.appendChild(buyBtn);

  gallery.appendChild(container);
}

function viewProductDetails(name, description, image, price) {
  const url = `view-product.html?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
  window.open(url, "_blank");
}

function buyNow(name, price, image) {
  const url = `buy-now.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
  window.open(url, "_blank");
}
const delivery = deliverySelect.value;
const url = `buy-summary.html?delivery=${delivery}`;
window.open(url, '_blank');
