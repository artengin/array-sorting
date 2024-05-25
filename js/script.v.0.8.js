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
const codeDoubleSelection = document.querySelector("#code-double-selection");
const btnClear = document.querySelector(".btn-clear");
const btnRandom = document.querySelector(".btn-random");
const arrInput = document.querySelectorAll('.input-sort');
const titleCompleteArray = document.querySelector('.title-complete-array');
let codeArray = [codeBubble, codeMixing, codeDwarf, codeComb, codeSelection, codeDoubleSelection];
let methodName = ['bubble', 'mixing', 'dwarf', 'comb', 'selection', 'double-selection'];

sortMethod.addEventListener('click', openCode);
codeOpen.addEventListener('click', openCode);
btnClear.addEventListener('click', clearArray);
btnRandom.addEventListener('click', randomArray);
let startStop = true;

function clearArray() {
    for (let i = 0, l = arrInput.length; i < l; i++) {
        arrInput[i].value = '';
    }
}

function randomArray() {
    for (let i = 0, l = arrInput.length; i < l; i++) {
        let randomNumber = Math.round(Math.random() * 9999);
        if (Math.random() < 0.3) {
            arrInput[i].value = '-' + randomNumber;
        } else {
            arrInput[i].value = randomNumber;
        }
    }
}

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
    if (keys.value.length > maxLength) {
        keys.value = keys.value.substring(0, 4);
    }
}

speedBlock.addEventListener('click', changeSpeed);

function changeSpeed(e) {
    for (let i = 0, l = speedBtn.length; i < l; i++) {
        if (speedBtn[i] === e.target) {
            for (let i = 0, l = speedBtn.length; i < l; i++) {
                if (speedBtn[i].classList.contains('active')) {
                    speedBtn[i].classList.remove('active');
                }
            }
            speedBtn[i].classList.add('active');
        }
    }
}

const canvas = document.getElementById("sort-canvas");
let pi = Math.PI;
let ctx = canvas.getContext('2d');
canvas.width = 510;
canvas.height = 100;

function drawBubbleCanvas(arr, number = false, swap = false, color = '#000', out = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
        //квадрат
        ctx.fillStyle = color;
        if (number === i || number + 1 === i) {
            if (number !== false) {
                ctx.strokeStyle = "red";
            }
        } else if (i > out) {
            ctx.strokeStyle = "green";
            if (out === false) {
                ctx.strokeStyle = color;
            }
        } else {
            ctx.strokeStyle = color;
        }
        ctx.strokeRect(x, 40, 47, 50);
        //текст
        ctx.fillStyle = color;
        ctx.font = "16px arial";
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
    let color = '#000';
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
        ctx.strokeRect(x, 40, 47, 50);
        //текст
        ctx.fillStyle = color;
        ctx.font = "16px arial";
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
    let color = '#000';
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
        //квадрат
        ctx.fillStyle = color;
        if (number === i || number1 === i) {
            if (number !== false || number1 !== false) {
                ctx.strokeStyle = "red";
            }
        } else {
            ctx.strokeStyle = color;
        }
        ctx.strokeRect(x, 40, 47, 50);
        //текст
        ctx.fillStyle = color;
        ctx.font = "16px arial";
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
    let color = "#000";
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
            ctx.fillRect(x, 40, 47, 50);
            ctx.fillStyle = "#fff";
            ctx.font = "16px arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(arr[i], x + 25, 65);
        } else {
            ctx.strokeRect(x, 40, 47, 50);
            //текст
            ctx.fillStyle = color;
            ctx.font = "16px arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(arr[i], x + 25, 65);
        }
        //треугольник
        if (step === i) {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.moveTo(x + 24, 92);
            ctx.lineTo(x + 29, 100);
            ctx.lineTo(x + 19, 100);
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

function drawDoubleSelectionCanvas(arr, step, start, stop, min, max, swap = false) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = "#000";
    for (let x = 2, i = 0, l = arr.length; i < l; x += 50, i++) {
    //квадрат
        ctx.fillStyle = color;
        if (step === i) {
            if (step !== false) {
                ctx.strokeStyle = "red";
            }
        } else if (i < start || i >= stop) {
            ctx.strokeStyle = "green";
            ctx.fillStyle = "green";
        } else {
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
        }
        if (start === i && swap === 1) {
            ctx.fillStyle = '#4e90ff';
            ctx.fillRect(x, 40, 47, 50);
            ctx.fillStyle = "#fff";
        } else if (stop - 1 === i && swap === 2) {
            ctx.fillStyle = '#084ec3';
            ctx.fillRect(x, 40, 47, 50);
            ctx.fillStyle = "#fff";
        }
        if (min === i) {
            ctx.fillStyle = '#4e90ff';
            ctx.fillRect(x, 40, 47, 50);
            ctx.fillStyle = "#fff";
            ctx.font = "16px arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(arr[i], x + 25, 65);
        } else if (max === i) {
            ctx.fillStyle = "#084ec3";
            ctx.fillRect(x, 40, 47, 50);
            ctx.fillStyle = "#fff";
            ctx.font = "16px arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(arr[i], x + 25, 65);
        } else {
            ctx.strokeRect(x, 40, 47, 50);
            //текст
            ctx.font = "16px arial";
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
        if (swap === 1) {
            if (min === i) {
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
            if (start === i) {
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
        if (swap === 2) {
            if (stop - 1 === i) {
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
            if (max === i) {
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
let sortingState = true;
btnSort.addEventListener('click', startSort);

function startSort() {
    if (btnSort.textContent === 'Остановить') {
        sortingState = false;
        return;
    }
    let arr = [];
    let arrOrigin = [];
    let speed = 0;
    if (titleCompleteArray.classList.contains('empty-array')) {
        titleCompleteArray.classList.remove('empty-array');
    }
    for (let i = 0, l = arrInput.length; i < l; i++) {
        if (arrInput[i].value) {
            arr.push(Number(arrInput[i].value));
            arrOrigin.push(' ' + arrInput[i].value);
        }
    }
    if (arr.length === 0) {
        titleCompleteArray.classList.add('empty-array');
        return;
    }

    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        )
    }

    if (!isActive) {
        btnSort.textContent = 'Остановить';
        isActive = true;

        for (let i = 0, l = speedBtn.length; i < l; i++) {
            if (speedBtn[i].classList.contains('active')) {
                speed = Number(speedBtn[i].textContent);
            }
        }

        originalArray.textContent = "[" + arrOrigin + "]";

        function stopSorting() {
            isActive = false;
            sortingState = true;
            btnSort.textContent = 'Сортировать'
        }

        async function startBubble() {
            let newArr = arr;
            for (let out = newArr.length - 1; out > 0; out--) {
                for (let i = 0; i < out; i++) {
                    if (sortingState) {
                        await drawBubbleCanvas(newArr, i, false, "#000", out);
                        await sleep(speed * 1000);
                        if (newArr[i] > newArr[i + 1]) {
                            temp = newArr[i + 1];
                            newArr[i + 1] = newArr[i];
                            newArr[i] = temp;
                            await drawBubbleCanvas(newArr, i, 1, "#000", out);
                        } else {
                            await drawBubbleCanvas(newArr, i, false, "#000", out);
                        }
                        await sleep(speed * 1000);
                    }
                }
            }
            drawBubbleCanvas(newArr, false, false, 'green');

            stopSorting();
        }

        async function startMixing() {
            let newArr = arr;
            let start = 0;
            let stop = newArr.length - 1;
            do {
                swap = false;
                for (i = start; i < stop; i++) {
                    if (sortingState) {
                        await drawBubbleCanvas(newArr, i, false, "#000", false);
                        await sleep(speed * 1000);
                        if (newArr[i] > newArr[i + 1]) {
                            temp = newArr[i + 1];
                            newArr[i + 1] = newArr[i];
                            newArr[i] = temp;
                            swap = true;
                            await drawBubbleCanvas(newArr, i, 1, "#000", false);
                        } else {
                            await drawBubbleCanvas(newArr, i, false, "#000", false);
                        }
                        await sleep(speed * 1000);
                    } else {
                        drawBubbleCanvas(newArr, false, false, 'green');
                        stopSorting();
                        return;
                    }
                }
                for (l = stop - 1; l >= start; l--) {
                    if (sortingState) {
                        await drawmMixingCanvas(newArr, l + 1);
                        await sleep(speed * 1000);
                        if (newArr[l] > newArr[l + 1]) {
                            let temp = newArr[l + 1];
                            newArr[l + 1] = newArr[l];
                            newArr[l] = temp;
                            swap = true;
                            await drawmMixingCanvas(newArr, l + 1, 1);
                        } else {
                            await drawmMixingCanvas(newArr, l + 1);
                        }
                        await sleep(speed * 1000);
                    } else {
                        drawBubbleCanvas(newArr, false, false, 'green');
                        stopSorting();
                        return;
                    }
                }
                start++;
                stop--;
            } while (swap);
            drawBubbleCanvas(newArr, false, false, 'green');
            stopSorting();
        }

        async function startDwarf() {
            let newArr = arr;
            let index = 1;
            let nextIndex = index + 1;
            while (index < newArr.length) {
                if (sortingState) {
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
                } else {
                    drawBubbleCanvas(newArr, false, false, 'green');
                    stopSorting();
                    return;
                }
            }
            drawBubbleCanvas(newArr, false, false, 'green');
            stopSorting();
        }

        async function startComb() {
            let newArr = arr;
            const l = newArr.length;
            const constant = 1.25;
            let step = l / constant;
            while (step >= 1) {
                const stepRound = Math.floor(step);
                for (let i = 0, j = stepRound; j < l; i++, j++) {
                    if (sortingState) {
                        await drawCombCanvas(newArr, i, j);
                        await sleep(speed * 1000);
                        if (newArr[i] > newArr[j]) {
                            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
                            await drawCombCanvas(newArr, i, j, 1);
                        }
                        await sleep(speed * 1000);
                    } else {
                        drawBubbleCanvas(newArr, false, false, 'green');
                        stopSorting();
                        return;
                    }
                }
                step = stepRound / constant;

            }
            drawBubbleCanvas(newArr, false, false, 'green');
            stopSorting();
        }

        async function startSelection() {
            let newArr = arr;
            const l = newArr.length;
            for (let i = 0; i < l; i++) {
                let min = i;
                for (let j = i; j < l; j++) {
                    if (sortingState) {
                        await drawSelectionCanvas(newArr, j, i, i, min);
                        await sleep(speed * 1000);
                        if (newArr[j] < newArr[min]) {
                            min = j;
                            await drawSelectionCanvas(newArr, j, i, i, min);
                            await sleep(speed * 1000);
                        }
                    } else {
                        drawBubbleCanvas(newArr, false, false, 'green');
                        stopSorting();
                        return;
                    }
                }
                if (min !== i) {
                    let temp = newArr[i];
                    newArr[i] = newArr[min];
                    newArr[min] = temp;
                    await drawSelectionCanvas(newArr, false, i, i, min, 1);
                    await sleep(speed * 2000);
                }
            }
            drawBubbleCanvas(newArr, false, false, 'green');
            stopSorting();
        }

        async function startDoubleSelection(){
            let newArr = arr; 
            const l = newArr.length;
            for (let i = 0, end = l - 1; i < end; i++, end--) {
                let min = i;
                let max = i;
                for (let j = i; j <= end; j++) {
                    if (sortingState) {
                        await drawDoubleSelectionCanvas(newArr, j, i, end + 1, min, max);
                        await sleep(speed * 1000);
                        if (newArr[j] < newArr[min]) {
                            min = j;
                            await drawDoubleSelectionCanvas(newArr, j, i, end + 1, min, max);
                            await sleep(speed * 1000);
                        }
                        if (newArr[j] > newArr[max]) {
                            max = j;
                            await drawDoubleSelectionCanvas(newArr, j, i, end + 1, min, max);
                            await sleep(speed * 1000);
                        }
                    } else {
                        drawBubbleCanvas(newArr, false, false, 'green');
                        stopSorting();
                        return;
                    }
                }

                if (min !== i) {
                    let temp = newArr[i];
                    newArr[i] = newArr[min];
                    newArr[min] = temp;
            
                    if (max === i) {
                        max = min;
                    }
                    await drawDoubleSelectionCanvas(newArr, false, i, end + 1, min, max, 1);
                    await sleep(speed * 3000);
                }
                if (max !== end) {
                    let temp = newArr[end];
                    newArr[end] = newArr[max];
                    newArr[max] = temp;
                    await drawDoubleSelectionCanvas(newArr, false, i, end + 1, false, max, 2);
                    await sleep(speed * 3000);
                }
            }                
            drawBubbleCanvas(newArr, false, false, 'green');
            stopSorting();
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
        } else if (sortMethod.value === 'double-selection') {
            startDoubleSelection();
        } 
    }
}