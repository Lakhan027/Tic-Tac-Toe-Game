// const row11 = document.querySelector('.row1-first');
// const row12 = document.querySelector('.row1-second');
// const row13 = document.querySelector('.row1-third');
// const row21 = document.querySelector('.row2-first');
// const row22 = document.querySelector('.row2-second');
// const row23 = document.querySelector('.row2-third');
// const row31 = document.querySelector('.row3-first');
// const row32 = document.querySelector('.row3-second');
// const row33 = document.querySelector('.row3-third ');

// const body = document.querySelector('body');
// const maininfo = document.querySelector('.main-info');
// let values = ['', '', '', '', '', '', '', '', ''];
// let values = [];
// values[8] = [];

// let cnt = 0;
// let increment = 0;



// const data11 = () => {

//     if (cnt == 0) {
//         values[0] = 0;
//         row11.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[0] = 1;
//         row11.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[0] == 0 && values[1] == 0 && values[2] == 0) ||
//             (values[0] == 0 && values[3] == 0 && values[6] == 0) ||
//             (values[0] == 0 && values[4] == 0 && values[8] == 0)) {

//             // 'O' Player wins
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//             console.log("O Player wins");

//         }
//         if ((values[0] == 1 && values[1] == 1 && values[2] == 1) ||
//             (values[0] == 1 && values[3] == 1 && values[6] == 1) ||
//             (values[0] == 1 && values[4] == 1 && values[8] == 1)) {
//             // 'X' Player wins
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//             console.log("X Player wins");
//         }
//         if (increment === 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }



// }
// const data12 = () => {

//     if (cnt == 0) {
//         values[1] = 0;
//         row12.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[1] = 1;
//         row12.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[1] == 0 && values[0] == 0 && values[2] == 0) ||
//             (values[1] == 0 && values[4] == 0 && values[7] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//             console.log("O Player wins");
//         }
//         if ((values[1] == 1 && values[0] == 1 && values[2] == 1) ||
//             (values[1] == 1 && values[4] == 1 && values[7] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//             console.log("X Player wins");
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }

// }
// const data13 = () => {

//     if (cnt == 0) {
//         values[2] = 0;
//         row13.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[2] = 1;
//         row13.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[2] == 0 && values[1] == 0 && values[0] == 0) ||
//             (values[2] == 0 && values[5] == 0 && values[8] == 0) ||
//             (values[2] == 0 && values[4] == 0 && values[6] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//             //console.log("O Player wins");
//         }
//         if ((values[2] == 1 && values[1] == 1 && values[0] == 1) ||
//             (values[2] == 1 && values[5] == 1 && values[8] == 1) ||
//             (values[2] == 1 && values[4] == 1 && values[6] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//             //console.log("X Player wins");
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }

// }
// const data21 = () => {

//     if (cnt == 0) {
//         values[3] = 0;
//         row21.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[3] = 1;
//         row21.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[3] == 0 && values[0] == 0 && values[6] == 0) ||
//             (values[3] == 0 && values[4] == 0 && values[5] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//         }
//         if ((values[3] == 1 && values[0] == 1 && values[6] == 1) ||
//             (values[3] == 1 && values[4] == 1 && values[5] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }
// }
// const data22 = () => {

//     if (cnt == 0) {
//         values[4] = 0;
//         row22.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[4] = 1;
//         row22.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[4] == 0 && values[3] == 0 && values[5] == 0) ||
//             (values[4] == 0 && values[1] == 0 && values[7] == 0) ||
//             (values[4] == 0 && values[2] == 0 && values[6] == 0) ||
//             (values[4] == 0 && values[0] == 0 && values[8] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//         }
//         if ((values[4] == 1 && values[3] == 1 && values[5] == 1) ||
//             (values[4] == 1 && values[1] == 1 && values[7] == 1) ||
//             (values[4] == 1 && values[2] == 1 && values[6] == 1) ||
//             (values[4] == 1 && values[0] == 1 && values[8] == 1)) {
//             // 'X' Player wins
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//         }
//         if (increment === 9) {
//             // Game Tie
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = ` Game Tie`;
//             maininfo.append(newDiv);
//         }

//     }
// }
// const data23 = () => {

//     if (cnt == 0) {
//         values[5] = 0;
//         row23.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[5] = 1;
//         row23.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[5] == 0 && values[2] == 0 && values[8] == 0) ||
//             (values[5] == 0 && values[4] == 0 && values[3] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//         }
//         if ((values[5] == 1 && values[2] == 1 && values[8] == 1) ||
//             (values[5] == 1 && values[4] == 1 && values[3] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }
// }
// const data31 = () => {

//     if (cnt == 0) {
//         values[6] = 0;
//         row31.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[6] = 1;
//         row31.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[6] == 0 && values[7] == 0 && values[8] == 0) ||
//             (values[6] == 0 && values[3] == 0 && values[0] == 0) ||
//             (values[6] == 0 && values[4] == 0 && values[2] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//         }
//         if ((values[6] == 1 && values[7] == 1 && values[8] == 1) ||
//             (values[6] == 1 && values[3] == 1 && values[0] == 1) ||
//             (values[6] == 1 && values[4] == 1 && values[2] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }
// }
// const data32 = () => {

//     if (cnt == 0) {
//         values[7] = 0;
//         row32.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[7] = 1;
//         row32.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 5 && increment <= 9) {
//         if ((values[7] == 0 && values[6] == 0 && values[8] == 0) ||
//             (values[7] == 0 && values[4] == 0 && values[1] == 0)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//         }
//         if ((values[7] == 1 && values[6] == 1 && values[8] == 1) ||
//             (values[7] == 1 && values[4] == 1 && values[1] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }
// }
// const data33 = () => {

//     if (cnt == 0) {
//         values[8] = 0;
//         row33.textContent = 'O';
//         cnt++;
//         increment++;
//     }
//     else {
//         values[8] = 1;
//         row33.textContent = 'X';
//         cnt--;
//         increment++;
//     }
//     if (increment >= 3 && increment <= 9) {
//         if ((values[8] == 0 && values[5] == 0 && values[2] == 0) ||
//             (values[8] == 0 && values[7] == 0 && values[6] == 0) ||
//             (values[8] == 0 && values[4] == 0 && values[0] == 0)) {

//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `O Player wins`;
//             maininfo.append(newDiv);
//         }
//         if ((values[8] == 1 && values[5] == 1 && values[2] == 1) ||
//             (values[8] == 1 && values[7] == 1 && values[6] == 1) ||
//             (values[8] == 1 && values[4] == 1 && values[0] == 1)) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `X Player wins`;
//             maininfo.append(newDiv);
//         }
//         if (increment == 9) {
//             const newDiv = document.createElement('div');
//             newDiv.setAttribute('class', 'output');
//             newDiv.innerText = `Game Tie`;
//             maininfo.append(newDiv);
//             console.log("Game Tie");
//         }
//     }


// }


const row11 = document.querySelector('.row1-first');
const row12 = document.querySelector('.row1-second');
const row13 = document.querySelector('.row1-third');
const row21 = document.querySelector('.row2-first');
const row22 = document.querySelector('.row2-second');
const row23 = document.querySelector('.row2-third');
const row31 = document.querySelector('.row3-first');
const row32 = document.querySelector('.row3-second');
const row33 = document.querySelector('.row3-third ');
const reloadbtn = document.querySelector('.reload-btn');

const body = document.querySelector('body');
const maininfo = document.querySelector('.main-info');
let values = ['', '', '', '', '', '', '', '', ''];

let cnt = 0;
let increment = 0;
const checkWinner = (player, increment) => {
    if (increment >= 5 && increment <= 9) {
        if ((values[0] === player && values[1] === player && values[2] === player) ||
            (values[3] === player && values[4] === player && values[5] === player) ||
            (values[6] === player && values[7] === player && values[8] === player) ||
            (values[0] === player && values[3] === player && values[6] === player) ||
            (values[1] === player && values[4] === player && values[7] === player) ||
            (values[2] === player && values[5] === player && values[8] === player) ||
            (values[0] === player && values[4] === player && values[8] === player) ||
            (values[2] === player && values[4] === player && values[6] === player)) {
            return true;
        }
    }
    return false;
}

const data = (index, btn) => {
    if (cnt == 0) {
        values[index] = 'O';
        btn.textContent = 'O';
        cnt++;
    } else {
        values[index] = 'X';
        btn.textContent = 'X';
        cnt--;
    }
    increment++;

    if (checkWinner('O', increment)) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'output');
        newDiv.innerText = `O Player wins`;
        maininfo.append(newDiv);

    } else if (checkWinner('X', increment)) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'output');
        newDiv.innerText = `X Player wins`;
        maininfo.append(newDiv);
    } else if (increment === 9) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'output');
        newDiv.innerText = `Game Tie`;
        maininfo.append(newDiv);
    }
}

const btn = () => {
    location.reload();
}
reloadbtn.addEventListener('click', btn)
row11.addEventListener('click', () => data(0, row11));
row12.addEventListener('click', () => data(1, row12))
row13.addEventListener('click', () => data(2, row13));
row21.addEventListener('click', () => data(3, row21));
row22.addEventListener('click', () => data(4, row22));
row23.addEventListener('click', () => data(5, row23));
row31.addEventListener('click', () => data(6, row31));
row32.addEventListener('click', () => data(7, row32));
row33.addEventListener('click', () => data(8, row33));

