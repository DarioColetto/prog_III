let visile = true

function toggleMenu(){
    let menu = document.getElementById('myTopnav')
    if(visile){
        menu.classList.add('hide')
    }else{
        menu.classList.remove('hide')
    }
    visile = !visile
    
}