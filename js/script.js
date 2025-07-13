document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Switching Functionality ---
    const translations = {
        si: {
            pageTitle: "2Y Creation - නව දක්ෂතා සොයා ගැනීම",
            homeLink: "මුල් පිටුව",
            aboutLink: "අපි ගැන",
            opportunitiesLink: "අවස්ථා",
            mediaLink: "මාධ්‍ය",
            submissionsLink: "ඉදිරිපත් කිරීම්",
            contactLink: "අප අමතන්න",
            langOptionSI: "සිංහල",
            langOptionEN: "English",
            signInButton: "පිවිසෙන්න",
            heroHeading: "සංගීත ලෝකයට ඔබේ දොරටුව",
            heroParagraph: "2Y Creation ගායනය, තනු නිර්මාණය සහ පද රචනය යන අංශවල නව දක්ෂතා සොයා ගැනීමට සහ පෝෂණය කිරීමට කැපවී සිටී.",
            exploreOpportunitiesBtn: "අවස්ථා ගවේෂණය කරන්න",
            aboutHeading: "2Y Creation ගැන",
            aboutParagraph: "අභිලාෂකාමී කලාකරුවන්ට ඔවුන්ගේ කුසලතා ප්‍රදර්ශනය කිරීමට සහ කර්මාන්ත වෘත්තිකයන් සමඟ සම්බන්ධ වීමට වේදිකාවක් සැපයීමට අපි විශ්වාස කරමු. අපගේ මෙහෙවර වන්නේ නව හඬවල් සහ නිර්මාණශීලී මනසට සජීවී සංගීත කර්මාන්තයේ ඔවුන්ගේ ස්ථානය සොයා ගැනීමට උපකාර කිරීමයි.",
            opportunitiesHeading: "අප ලබා දෙන අවස්ථා",
            singersTitle: "ගායන ශිල්පීන් සඳහා",
            singersDescription: "නව ගීත සඳහා ඕඩිෂන් කරන්න, සංගීත රචකයන් සමඟ සහයෝගයෙන් කටයුතු කරන්න, ඔබේ හඬට සවන් දෙන්න.",
            composersTitle: "තනු නිර්මාණකරුවන් සඳහා",
            composersDescription: "ඔබේ මුල් තනු ඉදිරිපත් කර පද රචකයන් සහ ගායකයන් සමඟ සම්බන්ධ වන්න.",
            lyricistsTitle: "පද රචකයන් සඳහා",
            lyricistsDescription: "ඔබේ කාව්‍යමය වචන බෙදාගෙන සංගීත රචකයන් සහ ගායන ශිල්පීන් සමඟ සහයෝගයෙන් කටයුතු කරන්න.",
            learnMoreBtn: "තවත් දැනගන්න",
            mediaGalleryHeading: "අපගේ මාධ්‍ය ගැලරිය",
            imageGalleryTitle: "රූප ගැලරිය",
            videoGalleryTitle: "වීඩියෝ",
            visitYoutubeChannelBtn: "අපගේ YouTube චැනලයට පිවිසෙන්න",
            submissionsHeading: "ඔබේ නිර්මාණ ඉදිරිපත් කරන්න",
            submissionsParagraph: "ඊළඟ පියවර ගැනීමට සූදානම්ද? ඔබේ Portfolio, Demo හෝ පද රචනා ඉදිරිපත් කිරීමට පහත පෝරමය පුරවන්න.",
            submissionFormTitle: "නිර්මාණ ඉදිරිපත් කිරීමේ පෝරමය",
            submissionNameLabel: "නම:",
            submissionEmailLabel: "විද්‍යුත් තැපෑල:",
            submissionCategoryLabel: "වර්ගය:",
            selectCategoryOption: "වර්ගයක් තෝරන්න",
            categorySinger: "ගායකයා",
            categoryComposer: "තනු නිර්මාණකරු",
            categoryLyricist: "පද රචකයා",
            submissionMessageLabel: "පණිවිඩය/සම්බන්ධක (උදා: ඔබේ Portfolio, SoundCloud, Drive වෙත):",
            submissionFileUploadLabel: "ගොනුවක් Upload කරන්න (විකල්ප - උපරිම 10MB):",
            fileSizeWarning: "ගොනුවේ ප්‍රමාණය 10MB ඉක්මවයි. කරුණාකර කුඩා ගොනුවක් Upload කරන්න.",
            submitBtn: "ඉදිරිපත් කරන්න",
            contactHeading: "අප අමතන්න",
            contactParagraph: "ප්‍රශ්න තිබේද? අප හා සම්බන්ධ වන්න!",
            contactEmail: "විද්‍යුත් තැපෑල:",
            contactPhone: "දුරකථන:",
            footerCopyright: "© 2025 2Y Creation. සියලුම හිමිකම් ඇවිරිණි.",
            signupTab: "ලියාපදිංචි වන්න",
            signInTab: "පිවිසෙන්න",
            createAccountTitle: "නව ගිණුමක් සාදන්න",
            signupUsernameLabel: "පරිශීලක නාමය:",
            signupEmailLabel: "විද්‍යුත් තැපෑල:",
            signupPasswordLabel: "මුරපදය:",
            confirmPasswordLabel: "මුරපදය තහවුරු කරන්න:",
            signupBtn: "ලියාපදිංචි වන්න",
            signInAccountTitle: "ඔබේ ගිණුමට පිවිසෙන්න",
            signInUsernameLabel: "පරිශීලක නාමය හෝ විද්‍යුත් තැපෑල:",
            signInPasswordLabel: "මුරපදය:",
            signInSubmitBtn: "පිවිසෙන්න",
            signupSuccess: "ලියාපදිංචිය සාර්ථකයි! දැන් ඔබට පිවිසිය හැක.",
            signupError: "ලියාපදිංචිය අසාර්ථකයි. කරුණාකර නැවත උත්සාහ කරන්න.",
            signInSuccess: "සාදරයෙන් පිළිගනිමු!",
            signInError: "පිවිසීම අසාර්ථකයි. පරිශීලක නාමය/විද්‍යුත් තැපෑල හෝ මුරපදය වැරදියි.",
            submissionSuccess: "ඔබගේ ඉදිරිපත් කිරීම සාර්ථකව යවන ලදී!",
            submissionFailed: "ඉදිරිපත් කිරීම අසාර්ථකයි. කරුණාකර නැවත උත්සාහ කරන්න."
        },
        en: {
            pageTitle: "2Y Creation - Discovering New Talent",
            homeLink: "Home",
            aboutLink: "About Us",
            opportunitiesLink: "Opportunities",
            mediaLink: "Media",
            submissionsLink: "Submissions",
            contactLink: "Contact Us",
            langOptionSI: "Sinhala",
            langOptionEN: "English",
            signInButton: "Sign In",
            heroHeading: "Your Gateway to the Music World",
            heroParagraph: "2Y Creation is dedicated to discovering and nurturing new talent in singing, melody creation, and lyric writing.",
            exploreOpportunitiesBtn: "Explore Opportunities",
            aboutHeading: "About 2Y Creation",
            aboutParagraph: "We believe in providing a platform for aspiring artists to showcase their skills and connect with industry professionals. Our mission is to help new voices and creative minds find their place in the vibrant music industry.",
            opportunitiesHeading: "Opportunities We Offer",
            singersTitle: "For Singers",
            singersDescription: "Audition for new songs, collaborate with composers, and get your voice heard.",
            composersTitle: "For Melody Creators",
            composersDescription: "Submit your original melodies and connect with lyricists and singers.",
            lyricistsTitle: "For Lyricists",
            lyricistsDescription: "Share your poetic words and collaborate with composers and vocalists.",
            learnMoreBtn: "Learn More",
            mediaGalleryHeading: "Our Media Gallery",
            imageGalleryTitle: "Image Gallery",
            videoGalleryTitle: "Videos",
            visitYoutubeChannelBtn: "Visit Our YouTube Channel",
            submissionsHeading: "Submit Your Creations",
            submissionsParagraph: "Ready to take the next step? Fill out the form below to submit your portfolio, demo, or lyrics.",
            submissionFormTitle: "Submission Form",
            submissionNameLabel: "Name:",
            submissionEmailLabel: "Email:",
            submissionCategoryLabel: "Category:",
            selectCategoryOption: "Select a Category",
            categorySinger: "Singer",
            categoryComposer: "Melody Creator",
            categoryLyricist: "Lyricist",
            submissionMessageLabel: "Message/Links (e.g., to your Portfolio, SoundCloud, Drive):",
            submissionFileUploadLabel: "Upload File (Optional - Max 10MB):",
            fileSizeWarning: "File size exceeds 10MB. Please upload a smaller file.",
            submitBtn: "Submit",
            contactHeading: "Contact Us",
            contactParagraph: "Have questions? Get in touch with us!",
            contactEmail: "Email:",
            contactPhone: "Phone:",
            footerCopyright: "© 2025 2Y Creation. All Rights Reserved.",
            signupTab: "Sign Up",
            signInTab: "Sign In",
            createAccountTitle: "Create a New Account",
            signupUsernameLabel: "Username:",
            signupEmailLabel: "Email:",
            signupPasswordLabel: "Password:",
            confirmPasswordLabel: "Confirm Password:",
            signupBtn: "Sign Up",
            signInAccountTitle: "Sign In to Your Account",
            signInUsernameLabel: "Username or Email:",
            signInPasswordLabel: "Password:",
            signInSubmitBtn: "Sign In",
            signupSuccess: "Registration successful! You can now sign in.",
            signupError: "Registration failed. Please try again.",
            signInSuccess: "Welcome back!",
            signInError: "Sign In failed. Invalid username/email or password.",
            submissionSuccess: "Your submission has been sent successfully!",
            submissionFailed: "Submission failed. Please try again."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            // Check if the element is a <select> option, if so, update its text content
            if (element.tagName === 'OPTION' && element.closest('#languageSelect')) {
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'OPTION' && element.closest('#category')) {
                element.textContent = translations[lang][key];
            }
            else {
                element.textContent = translations[lang][key];
            }
        });

        // Specific handling for select box default option (if needed, otherwise data-key covers it)
        const categorySelect = document.getElementById('category');
        if (categorySelect) {
            const currentSelectedOption = categorySelect.querySelector('option:checked');
            if (currentSelectedOption && currentSelectedOption.value === "") {
                 currentSelectedOption.textContent = translations[lang].selectCategoryOption;
            }
        }
       
        document.title = translations[lang].pageTitle || document.title;
        localStorage.setItem('selectedLanguage', lang); // Save selected language
    }

    // Initialize language on page load
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'si'; // Default to Sinhala
        setLanguage(savedLanguage);
        languageSelect.value = savedLanguage; // Set dropdown value
        languageSelect.addEventListener('change', (event) => {
            setLanguage(event.target.value);
        });
    }

    // --- 2. Scroll-to-Top Button Functionality ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.classList.add('show');
            scrollToTopBtn.classList.remove('hide');
        } else {
            scrollToTopBtn.classList.add('hide');
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    });

    // --- 3. Sign-in/Sign-up Modal Functionality ---
    const signInModal = document.getElementById('signInModal');
    const signupFormContainer = document.getElementById('signupFormContainer');
    const signinFormContainer = document.getElementById('signinFormContainer');
    const signupTabBtn = document.querySelector('[data-tab="signup"]');
    const signinTabBtn = document.querySelector('[data-tab="signin"]');

    window.openSignInModal = function() {
        signInModal.classList.remove('hidden');
        showForm('signup'); // Default to signup form when modal opens
    };

    window.closeSignInModal = function() {
        signInModal.classList.add('hidden');
        // Clear form fields on close
        document.getElementById('signupForm').reset();
        document.getElementById('signinForm').reset();
        document.getElementById('signupStatus').textContent = '';
        document.getElementById('signinStatus').textContent = '';
    };

    window.showForm = function(formType) {
        if (formType === 'signup') {
            signupFormContainer.style.display = 'block';
            signinFormContainer.style.display = 'none';
            signupTabBtn.classList.add('active');
            signinTabBtn.classList.remove('active');
        } else {
            signupFormContainer.style.display = 'none';
            signinFormContainer.style.display = 'block';
            signupTabBtn.classList.remove('active');
            signinTabBtn.classList.add('active');
        }
    };

    // Handle signup form submission (client-side validation example)
    const signupForm = document.getElementById('signupForm');
    const signupStatus = document.getElementById('signupStatus');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            signupStatus.textContent = "මුරපද නොගැලපේ!"; // Passwords do not match
            signupStatus.style.color = 'red';
            return;
        }
        // In a real application, send data to a backend server here
        console.log('Signup data:', { username, email, password });
        signupStatus.textContent = translations[localStorage.getItem('selectedLanguage') || 'si'].signupSuccess;
        signupStatus.style.color = 'green';
        signupForm.reset(); // Clear form
        // Optionally, switch to sign-in form after successful signup
        // setTimeout(() => showForm('signin'), 2000);
    });

    // Handle sign-in form submission (client-side example)
    const signinForm = document.getElementById('signinForm');
    const signinStatus = document.getElementById('signinStatus');
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameOrEmail = document.getElementById('signinUsername').value;
        const password = document.getElementById('signinPassword').value;

        // In a real application, send data to a backend server for authentication
        console.log('Sign-in data:', { usernameOrEmail, password });
        
        // Basic dummy authentication (replace with actual backend API call)
        if (usernameOrEmail === 'test' && password === 'password') {
            signinStatus.textContent = translations[localStorage.getItem('selectedLanguage') || 'si'].signInSuccess;
            signinStatus.style.color = 'green';
            signinForm.reset();
            setTimeout(() => closeSignInModal(), 1500); // Close modal after successful sign-in
        } else {
            signinStatus.textContent = translations[localStorage.getItem('selectedLanguage') || 'si'].signInError;
            signinStatus.style.color = 'red';
        }
    });

    // --- 4. Submission Form Functionality ---
    const submissionForm = document.getElementById('submissionForm');
    const fileUpload = document.getElementById('file_upload');
    const fileSizeWarning = document.getElementById('fileSizeWarning');
    const formStatus = document.getElementById('formStatus');
    const MAX_FILE_SIZE_MB = 10; // Max file size in MB

    window.validateFileSize = function() {
        if (fileUpload.files.length > 0) {
            const fileSize = fileUpload.files[0].size; // Size in bytes
            const fileSizeMB = fileSize / (1024 * 1024); // Convert to MB
            if (fileSizeMB > MAX_FILE_SIZE_MB) {
                fileSizeWarning.style.display = 'block';
                fileUpload.value = ''; // Clear the file input
            } else {
                fileSizeWarning.style.display = 'none';
            }
        }
    };

    submissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send form data to a backend server using fetch API or XMLHttpRequest
        const formData = new FormData(submissionForm);
        console.log('Submission Data:');
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Simulate successful submission
        formStatus.textContent = translations[localStorage.getItem('selectedLanguage') || 'si'].submissionSuccess;
        formStatus.style.color = 'green';
        submissionForm.reset();
        fileSizeWarning.style.display = 'none'; // Hide warning if present
        
        // In a real scenario, handle potential errors from the server
        /*
        fetch('/submit-endpoint', { // Replace with your actual backend endpoint
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formStatus.textContent = translations[localStorage.getItem('selectedLanguage') || 'si'].submissionSuccess;
                formStatus.style.color = 'green';
                submissionForm.reset();
                fileSizeWarning.style.display = 'none';
            } else {
                formStatus.textContent = translations[localStorage.getItem('selectedLanguage') || 'si'].submissionFailed + (data.message || '');
                formStatus.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            formStatus.textContent = translations[localStorage.getItem('selecteditoneal') || 'si'].submissionFailed;
            formStatus.style.color = 'red';
        });
        */
    });

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});