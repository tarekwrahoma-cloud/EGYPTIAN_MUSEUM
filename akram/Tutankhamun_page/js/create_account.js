document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const regName = document.getElementById("regName");
  const regEmail = document.getElementById("regEmail");
  const regPassword = document.getElementById("regPassword");
  const regAlert = document.getElementById("regAlert");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = regName.value.trim();
    const emailValue = regEmail.value.trim();
    const passwordValue = regPassword.value.trim();

    hideAlert();

    // 1. التحقق من الاسم
    if (nameValue.length < 3) {
      showAlert("يرجى إدخال اسم صحيح لا يقل عن 3 أحرف.", "danger");
      return;
    }

    // 2. التحقق من صيغة البريد
    if (!isValidEmail(emailValue)) {
      showAlert("يرجى إدخال بريد إلكتروني صحيح.", "danger");
      return;
    }

    // 3. التحقق من كلمة المرور
    if (passwordValue.length < 6) {
      showAlert("كلمة المرور يجب أن تتكون من 6 أحرف أو أرقام على الأقل.", "danger");
      return;
    }

    // حفظ المستخدم الحالي للجلسة
    const currentUser = {
      name: nameValue,
      email: emailValue
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    // حفظ البيانات في سجل حسابات المسجلين
    const registeredUser = {
      name: nameValue,
      email: emailValue,
      password: passwordValue
    };
    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

    showAlert("تم إنشاء الحساب بنجاح! جاري تحويلك للصفحة الرئيسية...", "success");
    registerForm.reset();

    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 1200);
  });

  function showAlert(message, type) {
    regAlert.className = `alert alert-${type} d-block`;
    regAlert.textContent = message;
  }

  function hideAlert() {
    regAlert.className = "alert d-none";
    regAlert.textContent = "";
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});