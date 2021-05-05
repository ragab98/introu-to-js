//buttons
let htmlBtn = document.getElementById('html_btn'),
cssBtn = document.getElementById('css_btn'),
bsBtn = document.getElementById('bs_btn'),
jsBtn = document.getElementById('js_btn'),
 //divs
htmlDiv = document.getElementById('html'),
cssDiv = document.getElementById('css'),
bsDiv = document.getElementById('bootstrap'),
jsDiv = document.getElementById('js'),
myH1 = document.getElementById('header');

htmlBtn.onclick = function show(){
    htmlDiv.style.display = 'flex'
    cssDiv.style.display = 'none'
    bsDiv.style.display = 'none'
    jsDiv.style.display = 'none'
    myH1.style.display = 'none'
};

cssBtn.onclick = function(){
    htmlDiv.style.display = 'none'
    cssDiv.style.display = 'flex'
    bsDiv.style.display = 'none'
    jsDiv.style.display = 'none'
    myH1.style.display = 'none'

};

bsBtn.onclick = function(){
    htmlDiv.style.display = 'none'
    cssDiv.style.display = 'none'
    bsDiv.style.display = 'flex'
    jsDiv.style.display = 'none'
    myH1.style.display = 'none'

};

jsBtn.onclick = function(){
    htmlDiv.style.display = 'none'
    cssDiv.style.display = 'none'
    bsDiv.style.display = 'none'
    jsDiv.style.display = 'flex'
    myH1.style.display = 'none'

};