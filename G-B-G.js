function generateGradient() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var output = document.getElementById('output');
    output.style.background = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
}   