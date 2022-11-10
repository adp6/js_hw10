window.onload = ()=>{
    let form = document.querySelector('form')
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    form.style.left = (windowWidth/2 - parseInt(window.getComputedStyle(form).width)/2) + 'px';
    form.style.top = (windowHeight/2 - parseInt(window.getComputedStyle(form).height)/2) + 'px';
    let login = document.querySelector('.login');
    let overlay = document.querySelector('.overlay')
    let [...inputs] = form.elements;
    for(let i=0;i<inputs.length;i++){
        let element = inputs[i];
        element.onchange = function(e){
            if(inputs[i].value.length == 0){
                element.classList.add('error')
                login.disabled = true;
            }
            else if(inputs[i].value.length > 0){
                element.classList.remove('error')
                login.disabled = false;
            }
        }
    }
    login.onclick = function(){
        overlay.classList.add('hide')
    }
}