const Btn = document.querySelector(".Btn");
const output = document.querySelector(".output");

Btn.addEventListener("click", function () {
  const inputFild = document.querySelector(".inputFild").value;

  const passwordLenth =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+=/.,<>?;:|";
  let password = "";
  for (let i = 0; i < inputFild; i++) {
    const random = Math.round(Math.random() * passwordLenth.length);
    const randomPass = passwordLenth[random];

    password += randomPass;
    output.innerHTML = password;
  }
  document.querySelector(".inputFild").value = "";
});
