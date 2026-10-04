document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contactForm');
    const contactName = document.getElementById('contactName');
    const contactEmail = document.getElementById('contactEmail');
    const contactMessage = document.getElementById('contactMessage');
    const charCounter = document.getElementById('charCounter');
    const submitBtn = document.getElementById('contactSubmitBtn');

    const maxLength = 500;

    // تعبئة تلقائية لبيانات الاسم والإيميل لو كان المستخدم مسجلاً
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        if (contactName && currentUser.name) contactName.value = currentUser.name;
        if (contactEmail && currentUser.email) contactEmail.value = currentUser.email;
    }

    // عداد الحروف للرسالة
    if (contactMessage && charCounter) {
        contactMessage.addEventListener('input', () => {
            const currentLength = contactMessage.value.length;
            charCounter.textContent = `${currentLength} / ${maxLength}`;

            if (currentLength >= maxLength) {
                charCounter.style.color = '#ff6b6b';
            } else if (currentLength > maxLength * 0.8) {
                charCounter.style.color = '#cda434';
            } else {
                charCounter.style.color = '#666';
            }
        });
    }

    // إظهار وإخفاء الأخطاء
    const showError = (inputElement, message) => {
        const formGroup = inputElement.closest('.form-group');
        const errorSpan = formGroup.querySelector('.form-error');
        
        inputElement.style.borderColor = '#ff6b6b';
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    };

    const clearError = (inputElement) => {
        const formGroup = inputElement.closest('.form-group');
        const errorSpan = formGroup.querySelector('.form-error');
        
        inputElement.style.borderColor = '';
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    };

    // التحقق من صحة البريد الإلكتروني والهاتف
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        if (!phone) return true;
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return phoneRegex.test(phone) && phone.length >= 8;
    };

    const inputs = contactForm ? contactForm.querySelectorAll('.form-input') : [];
    inputs.forEach(input => {
        input.addEventListener('input', () => clearError(input));
        input.addEventListener('change', () => clearError(input));
    });

    // معالجة إرسال النموذج
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const phoneInput = document.getElementById('contactPhone');
            const subjectInput = document.getElementById('contactSubject');
            const messageInput = document.getElementById('contactMessage');

            if (!nameInput.value.trim()) {
                showError(nameInput, 'Full name is required.');
                isValid = false;
            }

            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email address is required.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            if (phoneInput && phoneInput.value.trim() && !isValidPhone(phoneInput.value.trim())) {
                showError(phoneInput, 'Please enter a valid phone number.');
                isValid = false;
            }

            if (!subjectInput.value) {
                showError(subjectInput, 'Please select a subject.');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                showError(messageInput, 'Message cannot be empty.');
                isValid = false;
            } else if (messageInput.value.length > maxLength) {
                showError(messageInput, `Message exceeds max limit of ${maxLength} characters.`);
                isValid = false;
            }

            if (isValid) {
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Message Sent!`;
                    submitBtn.style.backgroundColor = '#4caf50';
                    submitBtn.style.color = '#fff';

                    contactForm.reset();
                    if (charCounter) charCounter.textContent = `0 / ${maxLength}`;

                    // تعبئة البيانات مجدداً لو كان مسجلاً
                    if (currentUser) {
                        if (contactName && currentUser.name) contactName.value = currentUser.name;
                        if (contactEmail && currentUser.email) contactEmail.value = currentUser.email;
                    }

                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnText;
                        submitBtn.style.backgroundColor = '';
                        submitBtn.style.color = '';
                    }, 3000);

                }, 1500);
            }
        });
    }

});