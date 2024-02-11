//System No:01
function handleOnclick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handle by function attatched on onclick attribute'
}


//System No:02
document.getElementById('event-listener').addEventListener('click', function () {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by Event listener';
})

// <!-- System No:03 -->
document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '';


})