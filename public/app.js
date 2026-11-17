const view = document.getElementById('in');


view.addEventListener('click', ()=>{
    window.location.href= 'view.html';
});

const submitLogin = document.getElementById ('submit');
const message = document.getElementById ('message');

submitLogin.addEventListener('click', async (event)=>{
    event.preventDefault();
    
const userName = document.getElementById ('username').value.trim();
const password = document.getElementById ('password').value.trim();


    if (userName ==="" || password ===""){
        message.style.display = 'block';
        
        setTimeout (() =>{
                message.style.display ='none';
        },2000);
        
        return;
    };
    window.location.href = 'codeverification.html'; 

    
     

    try {
        console.log("Sending request...");

        const response = await fetch("/api/demo", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: userName,
                password: password
            })
        });

        console.log("Status:", response.status);

        const data = await response.json();

        console.log("server response", data);

    } catch (error) {

        console.error("Error:", error);

    }

});





const Showpassword = document.getElementById ('show');
const hidePassword = document.getElementById ('hide');

Showpassword.addEventListener('click', ()=>{
    if (password.type ='password'){
        password.type ='text';
        Showpassword.style.display = 'none';
        hidePassword.style.display = 'block';
    }
})

hidePassword.addEventListener('click', ()=>{
    if (password.type ='text'){
        password.type ='password';
        Showpassword.style.display = 'block';
        hidePassword.style.display = 'none';
    }
})

message.style.display = 'none';
hidePassword.style.display ='none';