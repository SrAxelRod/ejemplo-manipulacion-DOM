// console.log("Hola, Mundo")

const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const pResult = document.getElementById('result')

function btnOnClick () {
    const sumaInputs = input1.value + " " + input2.value
    pResult.innerText = "Resultado: " + sumaInputs;
}

// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });


// h1.innerHTML = "patito <br> feo";
// h1.innerText = "patito <br> feo";
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'Verde')

// h1.classList.add('verde')
// h1.classList.remove('Rojo')
// h1.classList.toggle('verde')
// h1.classList.contains('verde')

// input.value = '234'

// console.log(document.createElement('img'));
// console.log(document.createElement('span'));

// const img = document.createElement('img');
// img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Monkey_D_Luffy.jpg/640px-Monkey_D_Luffy.jpg');
// console.log(img);

// pid.innerHTML = "";
// pid.append(img);
