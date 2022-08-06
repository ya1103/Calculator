let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(b => {
    b.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                return;
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                return;
            case '=':
                try {
                    if(display.innerText){
                        display.innerText = eval(display.innerText);
                    } else {
                        display.innerText = 0;
                    }  
                } catch {display.innerText = 'Error!'}
                return;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

