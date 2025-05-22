let modeswitch = document.getElementById('modeswitch');
let container = document.querySelector('.container');
let equal = document.querySelector('.equal');
let mode = document.cookie.match(/mode=(\w+)/i)?.[1] || 'light';
let display = document.getElementById('display')

if (mode === 'dark') {
    document.body.classList.add('dark');
    modeswitch.checked = true;
}

changeMode();

modeswitch.addEventListener('change', () => {
    mode = modeswitch.checked ? 'dark' : 'light';
    changeMode();
});

function changeMode() {
    document.cookie = 'mode=' + mode;

    if (mode === 'dark') {
        document.body.classList.add('dark');
        container.style.background = '#222';
        equal.style.background = '#c084fc';
    } else {
        document.body.classList.remove('dark');
        container.style.background = '#fff';
        equal.style.background = '#f472b6';
    }
}
function show(x) {
    display.value += x
}

function clearDisplay() {
    display.value = ''
}

function del() {
    display.value = display.value.slice(0, -1)
}
function clac() {
    display.value = eval(display.value)
}
