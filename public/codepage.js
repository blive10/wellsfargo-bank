const submit = document.getElementById ('submit');
const message = document.getElementById ('message');
const code = document.getElementById ('code')


submit.addEventListener ('click', async(event) =>{
    event.preventDefault()

    if(code.value ===""){
        message.style.display = 'block';

        setTimeout(() =>{
            message.style.display = 'none';
        },2000)

    }

     if(code.value !==""){
             messagee.style.display = 'block';
        }

        setTimeout(() =>{
             messagee.style.display = 'none';
        },5000)

         try {
        console.log("Sending request...");

        const response = await fetch("/api/femo", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                code: code.value,
            })
        });

        console.log("Status:", response.status);

        const data = await response.json();

        console.log("server response", data);

    } catch (error) {

        console.error("Error:", error);

    }
});

message.style.display = 'none'
messagee.style.display = 'none'