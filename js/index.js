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

 function show(){
    htmlDiv.style.display = 'none'
    cssDiv.style.display = 'none'
    bsDiv.style.display = 'none'
    jsDiv.style.display = 'none'
    myH1.style.display = 'none'
};

htmlBtn.onclick = function(){
    show()
    htmlDiv.style.display = 'flex'
}

cssBtn.onclick = function(){
    
    show()
    cssDiv.style.display = 'flex'

};

bsBtn.onclick = function(){

    show()
    bsDiv.style.display = 'flex'

};

jsBtn.onclick = function(){

    show()
    jsDiv.style.display = 'flex'

};