let body = document.querySelector('body')
let header = document.querySelector('.header')
function dardMode() {
    body.classList.toggle('dark')
    box1.classList.toggle('white')
    box2.classList.toggle('white')
    box3.classList.toggle('white')
    box4.classList.toggle('white')
    box5.classList.toggle('white')
    box6.classList.toggle('white')
    box7.classList.toggle('white')
    box8.classList.toggle('white')
    box9.classList.toggle('white')
    box10.classList.toggle('white')
    box11.classList.toggle('white')
    box12.classList.toggle('white')
    politic.classList.toggle('white-t')
    header.classList.toggle('header-w')
}

let man = document.querySelector('.man')
man.style.display = 'flex'
man.style.justifyContent = 'center'
man.style.alignItems = 'center'
man.style.width = '1000px'

let ab = document.querySelector('.ab')
ab.style.display = 'flex'
ab.style.justifyContent = 'space-between'
ab.style.alignItems = 'center'

const shopimg = document.createElement('img');
shopimg.src = 'image/image 8.png';
shopimg.style.width = '70px';
shopimg.style.height = '70px';
shopimg.style.marginLeft = '100px';
ab.appendChild(shopimg);

const shopname = document.createElement('h1');
shopname.textContent = 'Magazin';
shopname.style.fontSize = '40px';
shopname.style.marginLeft = '20px';
ab.appendChild(shopname);

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Поиск продуктов...';
inputField.style.width = '350px';
inputField.style.padding = '10px';
inputField.style.fontSize = '18px';
inputField.style.marginLeft = '90px';
inputField.style.marginTop = '50px';
inputField.style.marginBottom = '50px';
man.appendChild(inputField);

let div = document.createElement('div')
div.classList.add('container')
body.appendChild(div)
let container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)
let row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)

let col1 = document.createElement('div')
col1.classList.add('col-3')
row.appendChild(col1)
col1.style.display = 'flex'
col1.style.justifyContent = 'center'
col1.style.alignItems = 'center'
col1.style.gap = '100px'
col1.style.marginBottom = '100px'

let col2 = document.createElement('div')
col2.classList.add('col-3')
row.appendChild(col2)
col2.style.display = 'flex'
col2.style.justifyContent = 'center'
col2.style.alignItems = 'center'
col2.style.gap = '100px'
col2.style.marginBottom = '100px'

let col3 = document.createElement('div')
col3.classList.add('col-3')
row.appendChild(col3)
col3.style.display = 'flex'
col3.style.justifyContent = 'center'
col3.style.alignItems = 'center'
col3.style.gap = '100px'

let box1 = document.createElement('div')
box1.classList.add('box')
col1.appendChild(box1)
box1.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box1.style.width = '250px'
box1.style.height = '300px'
box1.style.borderRadius = '10px'
box1.style.justifyContent = 'center'
box1.style.alignItems = 'center'
box1.style.display = 'flex'
box1.style.flexDirection = 'column'
box1.style.gap = '15px'
box1.addEventListener('mouseover' , () => {
    box1.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
    box1.style.width = '275px'
    box1.style.height = '325px'
    box1.style.borderRadius = '10px'
    box1.style.justifyContent = 'center'
    box1.style.alignItems = 'center'
    box1.style.display = 'flex'
    box1.style.flexDirection = 'column'
    box1.style.gap = '15px'
})
box1.addEventListener('mouseout' , () => {
    box1.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
    box1.style.width = '250px'
    box1.style.height = '300px'
    box1.style.borderRadius = '10px'
    box1.style.justifyContent = 'center'
    box1.style.alignItems = 'center'
    box1.style.display = 'flex'
    box1.style.flexDirection = 'column'
    box1.style.gap = '15px'
})

let box2 = document.createElement('div')
box2.classList.add('box')
col1.appendChild(box2)
box2.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box2.style.width = '250px'
box2.style.height = '300px'
box2.style.borderRadius = '10px'
box2.style.justifyContent = 'center'
box2.style.alignItems = 'center'
box2.style.display = 'flex'
box2.style.flexDirection = 'column'
box2.style.gap = '15px'

let box3 = document.createElement('div')
box3.classList.add('box')
col1.appendChild(box3)
box3.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box3.style.width = '250px'
box3.style.height = '300px'
box3.style.borderRadius = '10px'
box3.style.justifyContent = 'center'
box3.style.alignItems = 'center'
box3.style.display = 'flex'
box3.style.flexDirection = 'column'
box3.style.gap = '15px'

let box4 = document.createElement('div')
box4.classList.add('box')
col1.appendChild(box4)
box4.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box4.style.width = '250px'
box4.style.height = '300px'
box4.style.borderRadius = '10px'
box4.style.justifyContent = 'center'
box4.style.alignItems = 'center'
box4.style.display = 'flex'
box4.style.flexDirection = 'column'
box4.style.gap = '15px'

let box5 = document.createElement('div')
box5.classList.add('box')
col2.appendChild(box5)
box5.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box5.style.width = '250px'
box5.style.height = '300px'
box5.style.borderRadius = '10px'
box5.style.justifyContent = 'center'
box5.style.alignItems = 'center'
box5.style.display = 'flex'
box5.style.flexDirection = 'column'
box5.style.gap = '15px'

let box6 = document.createElement('div')
box6.classList.add('box')
col2.appendChild(box6)
box6.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box6.style.width = '250px'
box6.style.height = '300px'
box6.style.borderRadius = '10px'
box6.style.justifyContent = 'center'
box6.style.alignItems = 'center'
box6.style.display = 'flex'
box6.style.flexDirection = 'column'
box6.style.gap = '15px'

let box7 = document.createElement('div')
box7.classList.add('box')
col2.appendChild(box7)
box7.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box7.style.width = '250px'
box7.style.height = '300px'
box7.style.borderRadius = '10px'
box7.style.justifyContent = 'center'
box7.style.alignItems = 'center'
box7.style.display = 'flex'
box7.style.flexDirection = 'column'
box7.style.gap = '15px'

let box8 = document.createElement('div')
box8.classList.add('box')
col2.appendChild(box8)
box8.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box8.style.width = '250px'
box8.style.height = '300px'
box8.style.borderRadius = '10px'
box8.style.justifyContent = 'center'
box8.style.alignItems = 'center'
box8.style.display = 'flex'
box8.style.flexDirection = 'column'
box8.style.gap = '15px'

let box9 = document.createElement('div')
box9.classList.add('box')
col3.appendChild(box9)
box9.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box9.style.width = '250px'
box9.style.height = '300px'
box9.style.borderRadius = '10px'
box9.style.justifyContent = 'center'
box9.style.alignItems = 'center'
box9.style.display = 'flex'
box9.style.flexDirection = 'column'
box9.style.gap = '15px'

let box10 = document.createElement('div')
box10.classList.add('box')
col3.appendChild(box10)
box10.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box10.style.width = '250px'
box10.style.height = '300px'
box10.style.borderRadius = '10px'
box10.style.justifyContent = 'center'
box10.style.alignItems = 'center'
box10.style.display = 'flex'
box10.style.flexDirection = 'column'
box10.style.gap = '15px'

let box11 = document.createElement('div')
box11.classList.add('box')
col3.appendChild(box11)
box11.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box11.style.width = '250px'
box11.style.height = '300px'
box11.style.borderRadius = '10px'
box11.style.justifyContent = 'center'
box11.style.alignItems = 'center'
box11.style.display = 'flex'
box11.style.flexDirection = 'column'
box11.style.gap = '15px'

let box12 = document.createElement('div')
box12.classList.add('box')
col3.appendChild(box12)
box12.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)'
box12.style.width = '250px'
box12.style.height = '300px'
box12.style.borderRadius = '10px'
box12.style.justifyContent = 'center'
box12.style.alignItems = 'center'
box12.style.display = 'flex'
box12.style.flexDirection = 'column'
box12.style.gap = '15px'



let img1 = document.createElement('img')
img1.src = 'image/image 10.png'
box1.appendChild(img1)
let p1 = document.createElement('h4')
p1.textContent = 'Mars bug'
box1.appendChild(p1)
let h1 = document.createElement('h2')
h1.textContent = '🪙 100 Coins'
box1.appendChild(h1)
let pp1 = document.createElement('p')
pp1.textContent = '24 dona mavjud'
box1.appendChild(pp1)
pp1.style.color = 'grey'

let img2 = document.createElement('img')
img2.src = 'image/image 22.png'
box2.appendChild(img2)
let p2 = document.createElement('h4')
p2.textContent = 'Keyboard sticker'
box2.appendChild(p2)
let h2 = document.createElement('h2')
h2.textContent = '🪙 49 Coins'
box2.appendChild(h2)
let pp2 = document.createElement('p')
pp2.textContent = '11 dona mavjud'
box2.appendChild(pp2)
pp2.style.color = 'grey'

let img3 = document.createElement('img')
img3.src = 'image/image 23.png'
box3.appendChild(img3)
let p3 = document.createElement('h4')
p3.textContent = 'Smart watch'
box3.appendChild(p3)
let h3 = document.createElement('h2')
h3.textContent = '🪙 899 Coins'
box3.appendChild(h3)
let pp3 = document.createElement('p')
pp3.textContent = '4 dona mavjud'
box3.appendChild(pp3)
pp3.style.color = 'grey'

let img4 = document.createElement('img')
img4.src = 'image/image 24.png'
box4.appendChild(img4)
let p4 = document.createElement('h4')
p4.textContent = 'Wireless keyboard'
box4.appendChild(p4)
p4.style.color = 'grey'
let h4 = document.createElement('h2')
h4.textContent = '🪙 350 Coins'
box4.appendChild(h4)
h4.style.color = 'grey'
let pp4 = document.createElement('p')
pp4.textContent = '0 dona mavjud'
box4.appendChild(pp4)
pp4.style.color = 'grey'

let img5 = document.createElement('img')
img5.src = 'image/image 25.png'
box5.appendChild(img5)
let p5 = document.createElement('h4')
p5.textContent = 'Mouse'
box5.appendChild(p5)
let h5 = document.createElement('h2')
h5.textContent = '🪙 359 Coins'
box5.appendChild(h5)
let pp5 = document.createElement('p')
pp5.textContent = '24 dona mavjud'
box5.appendChild(pp5)
pp5.style.color = 'grey'

let img6 = document.createElement('img')
img6.src = 'image/image 26.png'
box6.appendChild(img6)
let p6 = document.createElement('h4')
p6.textContent = 'AirPods'
box6.appendChild(p6)
let h6 = document.createElement('h2')
h6.textContent = '🪙 499 Coins'
box6.appendChild(h6)
let pp6 = document.createElement('p')
pp6.textContent = '11 dona mavjud'
box6.appendChild(pp6)
pp6.style.color = 'grey'

let img7 = document.createElement('img')
img7.src = 'image/image 27.png'
box7.appendChild(img7)
let p7 = document.createElement('h4')
p7.textContent = 'Powerbank'
box7.appendChild(p7)
let h7 = document.createElement('h2')
h7.textContent = '🪙 899 Coins'
box7.appendChild(h7)
let pp7 = document.createElement('p')
pp7.textContent = '5 dona mavjud'
box7.appendChild(pp7)
pp7.style.color = 'grey'

let img8 = document.createElement('img')
img8.src = 'image/image 28.png'
box8.appendChild(img8)
let p8 = document.createElement('h4')
p8.textContent = 'USB flash drive'
box8.appendChild(p8)
let h8 = document.createElement('h2')
h8.textContent = '🪙 299 Coins'
box8.appendChild(h8)
let pp8 = document.createElement('p')
pp8.textContent = '21 dona mavjud'
box8.appendChild(pp8)
pp8.style.color = 'grey'

let img9 = document.createElement('img')
img9.src = 'image/image 29.png'
box9.appendChild(img9)
let p9 = document.createElement('h4')
p9.textContent = 'Smartphone'
box9.appendChild(p9)
let h9 = document.createElement('h2')
h9.textContent = '🪙 3699 Coins'
box9.appendChild(h9)
let pp9 = document.createElement('p')
pp9.textContent = '2 dona mavjud'
box9.appendChild(pp9)
pp9.style.color = 'grey'

let img10 = document.createElement('img')
img10.src = 'image/image 30.png'
box10.appendChild(img10)
let p10 = document.createElement('h4')
p10.textContent = 'Playstation 5'
box10.appendChild(p10)
let h10 = document.createElement('h2')
h10.textContent = '🪙 7449 Coins'
box10.appendChild(h10)
let pp10 = document.createElement('p')
pp10.textContent = 'Ushbu tovarga oldindan buyurtma berish mumkin'
box10.appendChild(pp10)
pp10.style.justifyContent = 'center'
pp10.style.textAlign = 'center'
pp10.style.color = 'grey'

let img11 = document.createElement('img')
img11.src = 'image/image 31.png'
box11.appendChild(img11)
let p11 = document.createElement('h4')
p11.textContent = 'Yandex Station'
box11.appendChild(p11)
let h11 = document.createElement('h2')
h11.textContent = '🪙 1999 Coins'
box11.appendChild(h11)
let pp11 = document.createElement('p')
pp11.textContent = '4 dona mavjud'
box11.appendChild(pp11)
pp11.style.color = 'grey'

let img12 = document.createElement('img')
img12.src = 'image/image 32.png'
box12.appendChild(img12)
let p12 = document.createElement('h4')
p12.textContent = 'Planshet Samsung'
box12.appendChild(p12)
let h12 = document.createElement('h2')
h12.textContent = '🪙 4999 Coins'
box12.appendChild(h12)
let pp12 = document.createElement('p')
pp12.textContent = '24 dona mavjud'
box12.appendChild(pp12)
pp12.style.color = 'grey'

inputField.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const products = document.querySelectorAll('.box');
  products.forEach((product) => {
    const productName = product.querySelector('h4').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'flex';
    } else {
      product.style.display = 'none';
    }
  });
});

let politic = document.querySelector('.politic')