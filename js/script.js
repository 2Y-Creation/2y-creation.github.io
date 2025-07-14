document.addEventListener('DOMContentLoaded', () => {
    // --- Language Translations ---
    const translations = {
        si: {
            home: "මුල් පිටුව",
            opportunities: "අවස්ථා",
            gallery: "ගැලරිය",
            contact: "අප අමතන්න",
            signIn: "පිවිසෙන්න",
            heroTitle: "ඔබගේ කලාත්මක ගමන අප හා එක්ව අරඹන්න!",
            heroSubtitle: "අපගේ වේදිකාව හරහා ඔබේ නිර්මාණශීලී හැකියාවන් ලොවට විදහා දක්වන්න.",
            exploreOpportunities: "අවස්ථා ගවේෂණය කරන්න",
            opportunitiesTitle: "ඔබට ඇති අවස්ථා",
            singingTitle: "ගායනය",
            singingDesc: "ඔබගේ හඬ ලොවට අසන්නට සලස්වන්න. අපි ඔබට වේදිකාව සකසන්නෙමු.",
            musicTitle: "සංගීතය",
            musicDesc: "ඔබගේ සංගීත නිර්මාණ බෙදා ගන්න. අපි ඔබට ප්‍රවර්ධනයට උදව් කරන්නෙමු.",
            lyricsTitle: "පද රචනය",
            lyricsDesc: "ඔබගේ පද රචනා හැකියාවන්ගෙන් ලොව ආලෝකමත් කරන්න.",
            galleryTitle: "අපගේ නිර්මාණ",
            videoTitle: "අපගේ නවතම නිර්මාණය",
            videoCaption: "අපගේ නිර්මාණශීලීත්වය විදහා දක්වන තවත් උදාහරණයක්.",
            submitWorkTitle: "ඔබගේ නිර්මාණ ඉදිරිපත් කරන්න",
            submitWorkDesc: "අපගේ කණ්ඩායම සමඟ එක්වී ඔබේ දක්ෂතා ලොවට පෙන්වන්න.",
            submissionFormTitle: "නිර්මාණ ඉදිරිපත් කිරීමේ පත්‍රිකාව",
            formName: "සම්පූර්ණ නම:",
            formEmail: "විද්‍යුත් තැපෑල:",
            formPhone: "දුරකථන අංකය:",
            formType: "නිර්මාණ වර්ගය:",
            formSelectType: "තෝරන්න",
            formTypeSinging: "ගායනය",
            formTypeMusic: "සංගීතය",
            formTypeLyrics: "පද රචනය",
            formTypeOther: "වෙනත්",
            formMessage: "පණිවිඩය/විස්තරය:",
            formSubmit: "ඉදිරිපත් කරන්න",
            contactTitle: "අප අමතන්න",
            contactDesc: "අපගේ සේවාවන් පිළිබඳ වැඩි විස්තර දැන ගැනීමට හෝ යෝජනා ඉදිරිපත් කිරීමට, පහත විස්තර භාවිතා කරන්න.",
            contactAddress: "123, ප්‍රධාන පාර, කොළඹ 07",
            contactEmail: "info@2ycreation.com",
            contactPhone: "+94 77 123 4567",
            footerBrand: "2Y Creation",
            footerCopyright: "© 2024 2Y Creation. සියලු හිමිකම් ඇවිරිණි.",
            footerPrivacy: "රහස්‍යතා ප්‍රතිපත්තිය",
            footerTerms: "සේවා කොන්දේසි",
            signInTab: "පිවිසෙන්න",
            signUpTab: "ලියාපදිංචි වන්න",
            signInHeading: "පිවිසෙන්න",
            signUpHeading: "ලියාපදිංචි වන්න",
            modalEmail: "විද්‍යුත් තැපෑල:",
            modalPassword: "මුරපදය:",
            modalFullName: "සම්පූර්ණ නම:",
            modalConfirmPassword: "මුරපදය තහවුරු කරන්න:",
            signInBtn: "පිවිසෙන්න",
            signUpBtn: "ලියාපදිංචි වන්න",
            forgotPassword: "මුරපදය අමතකද?"
        },
        en: {
            home: "Home",
            opportunities: "Opportunities",
            gallery: "Gallery",
            contact: "Contact Us",
            signIn: "Sign In",
            heroTitle: "Start Your Artistic Journey with Us!",
            heroSubtitle: "Showcase your creative talents to the world through our platform.",
            exploreOpportunities: "Explore Opportunities",
            opportunitiesTitle: "Opportunities for You",
            singingTitle: "Singing",
            singingDesc: "Let your voice be heard by the world. We provide the stage for you.",
            musicTitle: "Music",
            musicDesc: "Share your musical creations. We help you with promotion.",
            lyricsTitle: "Lyrics",
            lyricsDesc: "Illuminate the world with your lyrical talents.",
            galleryTitle: "Our Creations",
            videoTitle: "Our Latest Creation",
            videoCaption: "Another example showcasing our creativity.",
            submitWorkTitle: "Submit Your Work",
            submitWorkDesc: "Join our team and show your talents to the world.",
            submissionFormTitle: "Work Submission Form",
            formName: "Full Name:",
            formEmail: "Email:",
            formPhone: "Phone Number:",
            formType: "Type of Work:",
            formSelectType: "Select",
            formTypeSinging: "Singing",
            formTypeMusic: "Music",
            formTypeLyrics: "Lyrics",
            formTypeOther: "Other",
            formMessage: "Message/Description:",
            formSubmit: "Submit",
            contactTitle: "Contact Us",
            contactDesc: "For more information about our services or to submit suggestions, please use the details below.",
            contactAddress: "123, Main Street, Colombo 07",
            contactEmail: "info@2ycreation.com",
            contactPhone: "+94 77 123 4567",
            footerBrand: "2Y Creation",
            footerCopyright: "© 2024 2Y Creation. All rights reserved.",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            signInTab: "Sign In",
            signUpTab: "Sign Up",
            signInHeading: "Sign In",
            signUpHeading: "Sign Up",
            modalEmail: "Email:",
            modalPassword: "Password:",
            modalFullName: "Full Name:",
            modalConfirmPassword: "Confirm Password:",
            signInBtn: "Sign In",
            signUpBtn: "Sign Up",
            forgotPassword: "Forgot Password?"
        }
    };

    const languageSelect = document.getElementById('languageSelect');

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else if (element.tagName === 'OPTION' && element.value === '') { // For "Select" option
                    element.textContent = translations[lang][key];
                }
                else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang; // Set HTML lang attribute
        localStorage.setItem('selectedLanguage', lang); // Save preference
    }

    // Set initial language based on localStorage or default to Sinhala
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'si';
    languageSelect.value = savedLanguage;
    setLanguage(savedLanguage);

    languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenuButton = document.getElementById('closeMobileMenuButton');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    const signInMobileButton = document.getElementById('signInMobileButton');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });

    signInMobileButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        signInModal.classList.remove('hidden');
    });


    // --- Sign-in/Sign-up Modal ---
    const signInButton = document.getElementById('signInButton');
    const signInModal = document.getElementById('signInModal');
    const closeModalButton = document.getElementById('closeModalButton');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    signInButton.addEventListener('click', () => {
        signInModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        signInModal.classList.add('hidden');
    });

    // Close modal when clicking outside of the modal content
    signInModal.addEventListener('click', (event) => {
        if (event.target === signInModal) {
            signInModal.classList.add('hidden');
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons and hide all content
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.borderColor = ''; // Remove inline border style set by CSS
                btn.style.color = ''; // Remove inline color style set by CSS
            });
            tabContents.forEach(content => content.classList.add('hidden'));

            // Add 'active' to clicked button and show corresponding content
            button.classList.add('active');
            // Apply custom styles for active tab (as defined in output.css via #signInModal [data-tab="signup"].active)
            const targetTab = button.getAttribute('data-tab');
            document.getElementById(`${targetTab}Form`).classList.remove('hidden');
        });
    });

    // Handle form submissions (Example: prevent default and log data)
    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = event.target.signInEmail.value;
        const password = event.target.signInPassword.value;
        console.log('Sign In Attempt:', { email, password });
        alert('Sign In functionality is not implemented yet!');
        // Here you would typically send data to a server
        signInModal.classList.add('hidden');
    });

    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.signUpName.value;
        const email = event.target.signUpEmail.value;
        const password = event.target.signUpPassword.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Sign Up Attempt:', { name, email, password });
        alert('Sign Up functionality is not implemented yet!');
        // Here you would typically send data to a server
        signInModal.classList.add('hidden');
    });

    // --- Submission Form Handling ---
    const submissionForm = document.getElementById('submissionForm');
    const formMessage = document.getElementById('formMessage');

    submissionForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(submissionForm);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        console.log('Submission Form Data:', data);

        // Display a success message (or error)
        formMessage.textContent = 'ඔබගේ නිර්මාණය සාර්ථකව ඉදිරිපත් කරන ලදී! ස්තූතියි.'; // Sinhala
        formMessage.classList.remove('hidden', 'text-red-600');
        formMessage.classList.add('text-green-600', 'block');

        // Optional: Clear the form after a short delay
        setTimeout(() => {
            submissionForm.reset();
            formMessage.classList.add('hidden');
        }, 3000); // Hide message after 3 seconds
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.classList.remove('hidden', 'hide');
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
            scrollToTopBtn.classList.add('hide');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});