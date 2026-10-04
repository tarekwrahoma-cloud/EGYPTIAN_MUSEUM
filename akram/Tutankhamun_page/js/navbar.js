document.addEventListener('DOMContentLoaded', () => {

    // عناصر الـ Navbar
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    // أزرار قسم الـ Hero في الصفحة الرئيسية
    const heroAuthButtons = document.getElementById('heroAuthButtons');

    // قراءة بيانات المستخدم الحالي من localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // --- حالة المستخدم المسجل ---
        
        // 1. إخفاء أزرار تسجيل الدخول في الناف بار وإظهار معلومات المستخدم
        if (authButtons) {
            authButtons.classList.add('d-none');
        }
        
        if (userInfo) {
            userInfo.classList.remove('d-none');
            userInfo.classList.add('d-flex');
        }
        
        if (userNameDisplay) {
            userNameDisplay.textContent = currentUser.name || 'User';
        }

        // 2. إخفاء أزرار (Sign In / Create Account) في قسم الـ Hero بالصفحة الرئيسية
        if (heroAuthButtons) {
            heroAuthButtons.classList.add('d-none');
        }

    } else {
        // --- حالة الزائر ---
        
        // 1. إظهار أزرار تسجيل الدخول في الناف بار وإخفاء معلومات المستخدم
        if (authButtons) {
            authButtons.classList.remove('d-none');
        }
        
        if (userInfo) {
            userInfo.classList.add('d-none');
            userInfo.classList.remove('d-flex');
        }

        // 2. إظهار أزرار الـ Hero للزائر
        if (heroAuthButtons) {
            heroAuthButtons.classList.remove('d-none');
        }
    }

    // --- معالجة تسجيل الخروج ---
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // حذف بيانات الجلسة الحالية
            localStorage.removeItem('currentUser');
            
            // إعادة التوجيه للصفحة الرئيسية لتحديث الواجهة
            window.location.href = 'index.html';
        });
    }

});