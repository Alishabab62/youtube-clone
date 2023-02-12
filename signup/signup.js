const signupbutton = document.querySelector("#signupbutton");
signupbutton.addEventListener("click", signup);

async function signup() {
  const namee = document.querySelector("#name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  if (namee.value != "" && email.value != "" && password.value != "") {
    const data = {
      name: `${namee.value}`,
      email: `${email.value}`,
      password: `${password.value}`,
    };

    const response = await fetch(
      "https://youtube-api-beta.vercel.app/user/signup",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const getData = await response.json();

    console.log(getData);
    if (getData.message == "User created") {
      document.querySelector(".message").innerText =
        "Account Create Successfully";
      setTimeout(() => {
        document.querySelector(".message").innerText = "";
      }, 1500);
    } else if (getData.message == "Email already exists") {
      document.querySelector(".message").innerText = "User already exists";
      setTimeout(() => {
        document.querySelector(".message").innerText = "";
      }, 1500);
    } else {
      document.querySelector(".message").innerText = "Something went wrong";
      setTimeout(() => {
        document.querySelector(".message").innerText = "";
      }, 1500);
    }
  } else {
    document.querySelector(".message").innerText = "Enter all fields";
    setTimeout(() => {
      document.querySelector(".message").innerText = "";
    }, 1500);
  }
}
