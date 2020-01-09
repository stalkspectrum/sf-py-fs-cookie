$('#subdiv22').hide();

yourcity.value = localStorage.getItem('yourcity');

if (Boolean(yourcity.value)) {
    $('#subdiv11').hide();
    $('#subdiv12').html('<P>Теперь мы знаем ваш город. Это ' + localStorage.getItem('yourcity') + '</P>');
    $('#goaway').text('Стереть ненужные знания');
    $('#subdiv12').show();
}

yourcity.oninput = () => localStorage.setItem('yourcity', yourcity.value);

if (localStorage.getItem('task2fixed') == '1') {
}

$('#goaway').click(e => {
    localStorage.removeItem('yourcity');
    yourcity.value='';
});

$('#savestate').click(e => {
    localStorage.setItem('task2fixed', '1')
});

$('#forgetit').click(e => {
    localStorage.removeItem('task2fixed');
    task2fixed.value='';
});
