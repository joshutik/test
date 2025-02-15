let img = document.getElementById("item-img");
let identity = document.getElementById('title')
let text = document.getElementById('price');
let description = document.getElementById('description')
let buyBtn = document.getElementById('btn-buy');





window.addEventListener('load', () =>{
    let getDetailsUrl = `https://fakestoreapi.com/products`;
    let display = document.getElementById('store-items');

    fetch(getDetailsUrl)
            .then(res => res.json())
            .then(goods => {
                const product = goods[3]
                console.log(product)
                description.textContent = product.description
                img.src = product.image;
                identity = product.title;
                text.textContent = product.price;
            })

})
