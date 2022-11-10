window.onload = ()=>{
    let form = document.querySelector('form')
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    form.style.left = (windowWidth/2 - parseInt(window.getComputedStyle(form).width)/2) + 'px';
    form.style.top = (windowHeight/2 - parseInt(window.getComputedStyle(form).height)/2) + 'px';
    let login = document.querySelector('.login');
    let overlay = document.querySelector('.overlay')
    let [...inputs] = form.elements;
    inputs.splice(2,1)
    let newArr =[];
    for(let i=0;i<inputs.length;i++){
        let element = inputs[i];

        for(let i=0;i<inputs.length - 1;i++){
            newArr.push(inputs[i].value)
        }
        element.onchange = function(e){
            newArr[i] = element.value;
            if(newArr.some(elem => elem.length == 0) == true){
                if(element.value.length == 0){
                    element.classList.add('error')
                }
                else{
                    element.classList.remove('error');
                }
                login.disabled = true;
            }
            else {
                element.classList.remove('error');
                login.disabled = false;
            }
        }
    }
    login.onclick = function(){
        overlay.classList.add('hide')
    }

}