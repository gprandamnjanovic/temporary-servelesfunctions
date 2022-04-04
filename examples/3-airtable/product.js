const results = document.querySelector('.result');

const fetchProduct = async () => {
  results.innerHTML = `<h2>Loading...</h2>`;
  // console.log('single product');
  try {
    const id = window.location.search;
    // const id = '?id=1';
    // console.log(id);
    // const {
    //   data: { fields },
    // } = await axios.get(`/api/3-product${id}`);
    const {
      data: { fields },
    } = await axios.get(`/api/3-z-complete${id}`);
    // console.log(data);
    const { name, desc, price, image } = fields;
    results.innerHTML = `<h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
  } catch (error) {
    results.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProduct();
