function jQuery (selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this;
}
jQuery.prototype.each = function(fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}
jQuery.prototype.click = function(fn) {
    this.each(element => element.addEventListener('click', fn));
    return this
}
jQuery.prototype.hide = function() {
    this.each(element => element.style.display = 'none');
    return this;
}
jQuery.prototype.show = function() {
    this.each(element => element.style.display = '');
    return this;
}
jQuery.prototype.html = function(newHtml) {
    if (newHtml) {
        this.each(element => element.innerHTML = newHtml);
        return this;
    }
    return this.elements[0].innerHTML;
}
jQuery.prototype.text = function(newText) {
    if (newText) {
        this.each(element => element.innerText = newText);
        return this;
    }
    return this.elements[0].innerText;
}
const $ = (e) => new jQuery(e);

if (Boolean(localStorage.getItem('yourcity'))) {
    $('#subdiv11').hide();
    $('#subdiv12').html('Теперь мы знаем ваш город. Это ' + localStorage.getItem('yourcity'));
    $('#subdiv12').show();
}

yourcity.value = localStorage.getItem('yourcity');
yourcity.oninput = () => localStorage.setItem('yourcity', yourcity.value);

$('#goaway').click(e => {
    localStorage.removeItem('yourcity');
    yourcity.value='';
});
