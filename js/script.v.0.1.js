const speedBlock = document.querySelector("#speed-btn"); 
const sortMethod = document.querySelector("#method");
const speedBtn = document.querySelectorAll('.speed-btn');
const btnSort = document.querySelector("#btn-sort");
const originalArray = document.querySelector("#original-array");
const codeOpen = document.querySelector("#code-open");
const codeBubble = document.querySelector("#code-bubble");
const codeMixing = document.querySelector("#code-mixing");
const codeDwarf = document.querySelector("#code-dwarf");
const codeComb = document.querySelector("#code-comb");
const codeSelection = document.querySelector("#code-selection");

let codeArray = [codeBubble, codeMixing, codeDwarf, codeComb, codeSelection];
let methodName = ['bubble', 'mixing', 'dwarf', 'comb', 'selection'];

sortMethod.addEventListener('click', openCode);
codeOpen.addEventListener('click', openCode);

function openCode(e) {
    if (e.target.classList.contains('code-title')) {
        codeOpen.classList.toggle('active-code');
    }
    for (let i = 0; i < codeArray.length; i++) {
        if (codeArray[i].classList.contains('active-code')) {
            codeArray[i].classList.remove('active-code');
        }
    }
    if (codeOpen.classList.contains('active-code')) {
        for (let i = 0; i < codeArray.length; i++) {
            if (sortMethod.value === methodName[i]) {
                codeArray[i].classList.add('active-code');
            }
        }
    } 
    
}

function checkLength(keys) {
    let maxLength = 4;
    if(keys.value.length > maxLength) {
        keys.value = keys.value.substring(0, 4);
    }
}

speedBlock.addEventListener('click', changeSpeed);
function changeSpeed(e) {
    for (let i = 0, l = speedBtn.length; i < l; i++) {
        if(speedBtn[i].classList.contains('active')){
            speedBtn[i].classList.toggle('active');
        }
        if (speedBtn[i] === e.target){
            speedBtn[i].classList.add('active');
        }
    }
}

const canvas = document.getElementById("sort-canvas");
let pi = Math.PI;
let ctx = canvas.getContext('2d');
canvas.width  = 510;
canvas.height = 100;
function drawBubbleCanvas(arr, number = false, swap = false, color = '#000') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
        //квадрат
        ctx.fillStyle = color;
        if (number === i || number + 1 === i) {
            if (number !== false) {
                ctx.strokeStyle = "red";
            }
        } else {
            ctx.strokeStyle = color;
        }
        ctx.strokeRect(x, 40, 50, 50);
        //текст
        ctx.fillStyle = color;
        ctx.font = "17px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(arr[i], x + 25, 65);
        //треугольник
        if (number === i) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(x + 25, 92);
            ctx.lineTo(x + 30, 100);
            ctx.lineTo(x + 20, 100);
            ctx.fill();
            if (swap === 1) {
                ctx.beginPath();
                ctx.strokeStyle = "red";
                ctx.arc(x + 50, 32, 30, 0, pi, true);
                ctx.stroke();
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.moveTo(x + 15, 30);
                ctx.lineTo(x + 20, 35);
                ctx.lineTo(x + 25, 30);
                ctx.fill();
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.moveTo(x + 75, 30);
                ctx.lineTo(x + 80, 35);
                ctx.lineTo(x + 85, 30);
                ctx.fill();
            }
        } 
    }
}
function drawmMixingCanvas(arr, number, swap = false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = '#000';
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
    //квадрат
        ctx.fillStyle = color;
        if (number === i || number - 1 === i) {
            if (number !== false) {
                ctx.strokeStyle = "red";
            }
        } else {
            ctx.strokeStyle = color;
        }
        ctx.strokeRect(x, 40, 50, 50);
        //текст
        ctx.fillStyle = color;
        ctx.font = "17px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(arr[i], x + 25, 65);
        //треугольник
        if (number === i) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(x + 25, 92);
            ctx.lineTo(x + 30, 100);
            ctx.lineTo(x + 20, 100);
            ctx.fill();
            if (swap === 1) {
                ctx.beginPath();
                ctx.strokeStyle = "red";
                ctx.arc(x, 32, 30, 0, pi, true);
                ctx.stroke();
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.moveTo(x - 25, 30);
                ctx.lineTo(x - 30, 35);
                ctx.lineTo(x - 35, 30);
                ctx.fill();
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.moveTo(x + 25, 30);
                ctx.lineTo(x + 30, 35);
                ctx.lineTo(x + 35, 30);
                ctx.fill();
            }
        } 
    }
}
function drawCombCanvas(arr, number, number1, swap = false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = '#000';
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
    //квадрат
        ctx.fillStyle = color;
        if (number === i || number1 ===i) {
            if (number !== false || number1 !== false ) {
                ctx.strokeStyle = "red";
            }
        } else {
            ctx.strokeStyle = color;
        }
        ctx.strokeRect(x, 40, 50, 50);
        //текст
        ctx.fillStyle = color;
        ctx.font = "17px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(arr[i], x + 25, 65);
        //треугольник
        if (number === i) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(x + 25, 92);
            ctx.lineTo(x + 30, 100);
            ctx.lineTo(x + 20, 100);
            ctx.fill();
            if (swap === 1) {
                ctx.beginPath();
                ctx.strokeStyle = "green";
                ctx.moveTo(x + 15, 30);
                ctx.lineTo(x + 25, 30);
                ctx.stroke();
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.moveTo(x + 25, 35);
                ctx.lineTo(x + 30, 30);
                ctx.lineTo(x + 25, 25);
                ctx.fill();
            }
        } 
        if (number1 === i) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(x + 25, 92);
            ctx.lineTo(x + 30, 100);
            ctx.lineTo(x + 20, 100);
            ctx.fill();
            if (swap === 1) {
                ctx.beginPath();
                ctx.strokeStyle = "green";
                ctx.moveTo(x + 25, 30);
                ctx.lineTo(x + 35, 30);
                ctx.stroke();
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.moveTo(x + 25, 35);
                ctx.lineTo(x + 20, 30);
                ctx.lineTo(x + 25, 25);
                ctx.fill();
            }
        } 
    }
}

function drawSelectionCanvas(arr, step, done, min, max, swap = false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = "#000";
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
    //квадрат
        ctx.fillStyle = color;
        if (step === i) {
            if (step !== false) {
                ctx.strokeStyle = "red";
            }
        } else if (i < done) {
            ctx.strokeStyle = "green";
        } else {
            ctx.strokeStyle = color;
        }
        if (min === i || max === i) {
            ctx.fillStyle = "green";
            ctx.fillRect(x, 40, 50, 50);
            ctx.fillStyle = "#fff";
            ctx.font = "19px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(arr[i], x + 25, 65);
        } else {
            ctx.strokeRect(x, 40, 50, 50);
            //текст
            ctx.fillStyle = color;
            ctx.font = "17px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(arr[i], x + 25, 65);
        }
        //треугольник
        if (step === i) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(x + 25, 92);
            ctx.lineTo(x + 30, 100);
            ctx.lineTo(x + 20, 100);
            ctx.fill();
        } 
        if (max === i) {
            if (swap === 1) {
                ctx.beginPath();
                ctx.strokeStyle = "green";
                ctx.moveTo(x + 25, 30);
                ctx.lineTo(x + 35, 30);
                ctx.stroke();
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.moveTo(x + 25, 35);
                ctx.lineTo(x + 20, 30);
                ctx.lineTo(x + 25, 25);
                ctx.fill();
            }
        }  
        if (min === i) {
            if (swap === 1) {
                ctx.beginPath();
                ctx.strokeStyle = "green";
                ctx.moveTo(x + 15, 30);
                ctx.lineTo(x + 25, 30);
                ctx.stroke();
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.moveTo(x + 25, 35);
                ctx.lineTo(x + 30, 30);
                ctx.lineTo(x + 25, 25);
                ctx.fill();
            }
        }
    }
}
let isActive = false;

btnSort.addEventListener('click', startSort);
function startSort(){
    const arrInput = document.querySelectorAll('.input-sort');
    let arr = [];
    let arrOrigin = [];
    let speed = 0;
    
    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
    
    if (!isActive) {
        btnSort.textContent = 'Ждите ...'
        isActive = true;
        
        for (let i = 0, l = speedBtn.length; i < l; i++) {
            if (speedBtn[i].classList.contains('active')){
                speed = Number(speedBtn[i].textContent);
            }
        }
        
        for (let i = 0, l = arrInput.length; i < l; i++) {
            if (arrInput[i].value){
                arr.push(Number(arrInput[i].value));
                arrOrigin.push(' '+ arrInput[i].value);
            }
        }
        originalArray.textContent = "[" + arrOrigin + "]";
        function clearField(){
            isActive = false;
            btnSort.textContent = 'Сортировать'
            for (let i = 0, l = arrInput.length; i < l; i++) {
                arrInput[i].value = '';
            }
        }
        async function startBubble(){
            let newArr = arr; 
            do{
                swap = false;
                for (let i = 0, l = newArr.length - 1; i < l; i++) {
                    await drawBubbleCanvas(newArr, i);
                    await sleep(speed * 1000);
                    if (newArr[i] > newArr[i + 1]) {
                        temp = newArr[i + 1];
                        newArr[i + 1] = newArr[i];
                        newArr[i] = temp;
                        swap = true;
                        await drawBubbleCanvas(newArr, i, 1);
                    } else {
                        await drawBubbleCanvas(newArr, i);
                    }
                    await sleep(speed * 1000);
                }
            } while (swap);
            drawBubbleCanvas(newArr, false, false, 'green');

            clearField();
        }

        async function startMixing(){
            let newArr = arr; 
            let start = 0;
            let stop = newArr.length - 1;
            do{
                swap = false;
                for (i = start; i < stop; i++) {
                    await drawBubbleCanvas(newArr, i);
                    await sleep(speed * 1000);
                    if (newArr[i] > newArr[i + 1]) {
                        temp = newArr[i + 1];
                        newArr[i + 1] = newArr[i];
                        newArr[i] = temp;
                        swap = true;
                        await drawBubbleCanvas(newArr, i, 1);
                    } else {
                        await drawBubbleCanvas(newArr, i);
                    }
                    await sleep(speed * 1000);
                }
                for (l = stop - 1;l >= start; l--) {
                    await drawmMixingCanvas(newArr, l + 1);
                    await sleep(speed * 1000);
                    if (newArr[l] > newArr[l + 1]) {
                        temp = newArr[l + 1];
                        newArr[l + 1] = newArr[l];
                        newArr[l] = temp;
                        swap = true;
                        await drawmMixingCanvas(newArr, l + 1, 1);
                    } else {
                        await drawmMixingCanvas(newArr, l + 1);
                    }
                    await sleep(speed * 1000);
                }
                start++;
                stop--;
            } while (swap);
            drawBubbleCanvas(newArr, false, false, 'green');
            clearField();
        }
        async function startDwarf(){
            let newArr = arr; 
            let index = 1;
            let nextIndex = index + 1;
            while (index < newArr.length) {
                await drawmMixingCanvas(newArr, index);
                await sleep(speed * 1000);
                if (newArr[index - 1] < newArr[index]) {
                    index = nextIndex;
                    nextIndex++; 
                } else {
                    temp = newArr[index - 1];
                    newArr[index - 1] = newArr[index];
                    newArr[index] = temp;
                    index--;
                    await drawmMixingCanvas(newArr, index + 1, 1);
                    if (index === 0) {
                        index = nextIndex;
                        nextIndex++;
                    }
                }
                await sleep(speed * 1000);
            }
            drawBubbleCanvas(newArr, false, false, 'green');
            clearField();
        }
        async function startComb(){
            let newArr = arr; 
            const l = newArr.length;
            const constant = 1.25;
            let step = l / constant;
            while (step >= 1) {
                const stepRound = Math.floor(step);
                for (let i = 0, j = stepRound; j < l; i++, j++) {
                    await drawCombCanvas(newArr, i, j);
                    await sleep(speed * 1000);
                    if (newArr[i] > newArr[j]) {
                        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                        await drawCombCanvas(newArr, i, j, 1);
                    }
                    await sleep(speed * 1000);
                }
                step = stepRound / constant;

            }
            drawBubbleCanvas(newArr, false, false, 'green');
            clearField();
        }
        async function startSelection(){
            let newArr = arr; 
            const l = newArr.length;
            for (let i = 0; i < l; i++) {
                let min = i;
                for (let j = i; j < l; j++) {
                    await drawSelectionCanvas(newArr, j, i, i, min);
                    await sleep(speed * 1000);
                    if (newArr[j] < newArr[min]) {
                        min = j;
                        await drawSelectionCanvas(newArr, j, i, i, min);
                        await sleep(speed * 1000);
                    }
                }
                if (min != i) {
                    let temp = newArr[i];
                    newArr[i] = newArr[min];
                    newArr[min] = temp;
                    await drawSelectionCanvas(newArr, false, i, i, min, 1);
                    await sleep(speed * 2000);
                }
            }
            drawBubbleCanvas(newArr, false, false, 'green');
            clearField();
        }

        if (sortMethod.value === 'bubble') {
            startBubble();
        } else if (sortMethod.value === 'mixing') {
            startMixing();
        } else if (sortMethod.value === 'dwarf') {
            startDwarf();
        } else if (sortMethod.value === 'comb') {
            startComb();
        } else if (sortMethod.value === 'selection') {
            startSelection();
        } 
    }
}