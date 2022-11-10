window.onload = ()=>{
    let form = document.querySelector('form')
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    form.style.left = (windowWidth/2 - parseInt(window.getComputedStyle(form).width)/2) + 'px';
    form.style.top = (windowHeight/2 - parseInt(window.getComputedStyle(form).height)/2) + 'px';
    let register = document.querySelector('.register');
    let overlay = document.querySelector('.overlay')
    let [...inputs] = form.elements;
    inputs.splice(5,2);
    register.onclick = function(e) {
        let isValid = true;
        for(let i = 0; i<inputs.length;i++){
            if(inputs[0].value.length == 0 || inputs[1].value.length == 0 || inputs[2].value.length == 0 || inputs[3].value.length == 0 || inputs[4].value.length == 0){
                isValid = false;
                inputs[i].classList.add('error');
            }
            else if(inputs[3].value != inputs[4].value) {
                isValid = false;
                inputs[i].classList.remove('error');
                inputs[4].classList.add('error');
            }
            else{
                overlay.classList.add('hide');
                isValid = true;
                inputs[i].classList.remove('error');
                
            }

        }
        if(isValid == false) {
            e.preventDefault()
        }
        else {
            alert("Registration is completed");
        }
        
    }
}