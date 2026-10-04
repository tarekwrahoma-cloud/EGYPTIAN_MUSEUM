var admins = [
  {
    name: "abdaalh",
    mail: "abdallh@museum.com",
    pass: "12345678"
  },
  {
    name: "akram",
    mail: "akram@museum.com",
    pass: "12345678"
  },
  {
    name: "rahma",
    mail: "rahma@museum.com",
    pass: "12345678"
  },
  {
    name: "shahd",
    mail: "shahd@museum.com",
    pass: "12345678"
  },
  {
    name: "tarek",
    mail: "tarek@museum.com",
    pass: "12345678"
  }
];

localStorage.setItem("signin-host", JSON.stringify(admins));

function check(m, p) {
  var signin_host = JSON.parse(localStorage.getItem("signin-host")) || [];

  for (var i = 0; i < signin_host.length; i++) {
    if (m === signin_host[i].mail && p === signin_host[i].pass) {
      // تسجيل الدخول ناجح
      localStorage.setItem("currentAdmin", signin_host[i].name);
      window.location.href = "../../index.html";
      return;
      var addbtn=document.getElementById("egyptian-btn")
      addbtn.classList.replace("d-block","d-none")
    }
  }


}

// ربط الفورم بالفانكشن
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var mail = document.getElementById("loginEmail").value.trim();
  var pass = document.getElementById("loginPassword").value.trim();

  check(mail, pass);
});