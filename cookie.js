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

area.value = localStorage.getItem('area');
area.oninput = () => localStorage.setItem('area', area.value);
