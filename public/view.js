const view = document.getElementById ('view');
const key = document.getElementById ('key');
const message = document.getElementById('message');
const messagee = document.getElementById('messagee');



view.addEventListener ('click', ()=>{
    if (key.value === "5115"){
        window.location.href = "show.html"
    }

    if (key.value ===""){
        message.style.display ='block'

        setTimeout(() =>{
             message.style.display ='none'

        },2000)
    
    }

    else if (key.value !=="5115") {
        messagee.style.display ='block'

        setTimeout(() =>{
             messagee.style.display ='none'

        },2000)
        
    }

    

    



})

message.style.display = 'none';

messagee.style.display = 'none';