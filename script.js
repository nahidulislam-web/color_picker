var hexaNumber = document.getElementById('hexaNumber');
var cpr = document.getElementById('cpr');

cpr.addEventListener('input', function(){
    var inputColor = cpr.value;
    hexaNumber.value = inputColor;
    var title = document.getElementById('title');
    title.style.color = inputColor;
})
