const signupbutton = document.querySelector("#signupbutton")
signupbutton.addEventListener("click" , signup)

async function signup (){
    const namee = document.querySelector("#name")
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
   
    const data = {
        "name": `${namee.value}`,
        "email": `${email.value}`,
        "password": `${password.value}`
    }
    
    
    const response = await fetch("https://youtube-api-beta.vercel.app/user/signup", 
    
    {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data)
    })
    const getdata = await response.json() 

   console.log(getdata);
}
