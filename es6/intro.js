function a() {
  let b = 1;
  var c = 1;
  if (true) {
    let b = 2;
    var c = 2;
    console.log(b, c);
  }
  console.log(b, c);
}

a();

const NUM = 4;
// NUM = 3;

const items = ['Item 1', 'Item 2', 'Item 3'];

for (let i in items) {
  console.log(items[i]);
}

for (let item of items) {
  console.log(item);
}

const serie = {
  titulo: 'Game of Thrones',
  temporadas: 8
}

console.log('La serie ' + serie.titulo + '\n tiene ' + serie.temporadas + ' temporadas');

console.log(`La serie ${serie.titulo}
tiene ${serie.temporadas} temporadas`);

let logueado = true;
console.log(`Usuario ${logueado ? 'logueado' : 'no logueado'}`);

function muestraItem(item, pos, array) {
  console.log(`${pos}: ${item}`);
}

items.forEach(muestraItem);
items.forEach(function(item, pos) {
  console.log(`${pos}: ${item}`);
});

items.forEach((item, pos) => {
  console.log(`${pos}: ${item}`);
  return 0;
});

items.forEach((item, pos) => item);

const nuevosItems = items.map((item) => item + '!');
console.log(nuevosItems);

const itemsPares = items.filter((item, pos) => pos % 2 === 0);
console.log(itemsPares);


let button = document.querySelector('button');
button.addEventListener('click', function(event) {
  console.log('this', this);
  // console.log('event', event);
});
// }.bind({titulo: 'GoT'}));

let button2 = document.querySelector('#btn');
button2.addEventListener('click', (event) => {
  console.log('this2', this);
  // console.log('event2', event);
});

function suma(n, ...nums) {
  return nums.reduce((acc, n) => {
    return acc += n;
  }, n);
}

console.log(suma(1, 2, 3, 4))

function b(n1, n2, n3, n4) {

}

b(...[1, 2, 3, 4]);

// let i = items[0];
// let j = items[1];
let [i, j, ...resto] = items;
console.log(i)
console.log(j)
console.log(resto)

let {titulo:t, temporadas} = serie;
console.log(t)
console.log(temporadas)


function A(val) {
  this.a = val;
}

A.prototype.showA = function() {
  console.log(this.a)
}

const aa = new A(3);
aa.showA();

