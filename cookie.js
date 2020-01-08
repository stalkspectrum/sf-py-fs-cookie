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
const $ = (e) => new jQuery(e);

yourcity.value = localStorage.getItem('yourcity');
yourcity.oninput = () => localStorage.setItem('yourcity', yourcity.value);

$('#goaway').click(e => {
    localStorage.removeItem('yourcity');
    yourcity.value='';
});
