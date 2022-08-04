const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 10000,
        img: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1913_1_6.png'
    },
    {
        id: 2,
        title: 'Mouse',
        price: 2000,
        img: 'https://www.sven.fi/upload/iblock_photos/mouse/rx-g830/010-photo-big.png'
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 3000,
        img: 'https://avatars.mds.yandex.net/get-mpic/5273154/img_id1164401192089702118.jpeg/orig'
    },
    {
        id: 4,
        title: 'Netbook',
        price: 5000,
        img: 'https://filearchive.cnews.ru/img/zoom/2012/12/17/323916.jpg'
    }
];



// передаем объект целиком
const renderProduct = item => `<div class="products-item">
    <img src="${item.img}" alt="${item.id}">
    <h3>${item.title}</h3>
    <h4>${item.price}</h4>
    </div>`

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item))
    document.querySelector('.products').innerHTML = productsList.join("");
}

renderPage(products);