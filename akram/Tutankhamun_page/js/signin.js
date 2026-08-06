document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const rememberMe = document.getElementById("rememberMe");
  const loginAlert = document.getElementById("loginAlert");

  // تعبئة البريد تلقائياً إذا تم حفظه سابقاً
  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail && loginEmail) {
    loginEmail.value = savedEmail;
    if (rememberMe) rememberMe.checked = true;
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    hideAlert();

    if (!emailValue || !passwordValue) {
      showAlert("يرجى إدخال البريد الإلكتروني وكلمة المرور.", "danger");
      return;
    }

    if (!isValidEmail(emailValue)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح.", "danger");
      return;
    }

    const storedUserData = localStorage.getItem("registeredUser");

    if (!storedUserData) {
      showAlert("هذا الحساب غير موجود، يرجى إنشاء حساب جديد.", "danger");
      return;
    }

    const userData = JSON.parse(storedUserData);

    // التحقق من صحة البريد وكلمة المرور
    if (userData.email !== emailValue || userData.password !== passwordValue) {
      showAlert("البريد الإلكتروني أو كلمة المرور غير صحيحة.", "danger");
      return;
    }

    // حفظ بيانات الجلسة الحالية
    const currentUser = {
      name: userData.name || emailValue.split("@")[0],
      email: emailValue
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (rememberMe && rememberMe.checked) {
      localStorage.setItem("rememberedEmail", emailValue);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    showAlert("تم تسجيل الدخول بنجاح! جاري تحويلك...", "success");
    loginForm.reset();

    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 1200);
  });

  function showAlert(message, type) {
    loginAlert.className = `alert alert-${type} d-block`;
    loginAlert.textContent = message;
  }

  function hideAlert() {
    loginAlert.className = "alert d-none";
    loginAlert.textContent = "";
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

