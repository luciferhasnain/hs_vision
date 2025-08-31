
        // Initialize AOS with error handling
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: false
                });
            }
        });

        // Initialize dark theme
        document.addEventListener('DOMContentLoaded', function() {
            document.body.setAttribute('data-theme', 'dark');
        });

        // Application Form Handling
        const applicationForm = document.getElementById('applicationForm');
        if (applicationForm) {
            applicationForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const fullName = document.getElementById('fullName').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const serviceType = document.getElementById('serviceType').value;
                const budget = document.getElementById('budget').value;
                const timeline = document.getElementById('timeline').value;
                const projectDescription = document.getElementById('projectDescription').value;
                const agreeTerms = document.getElementById('agreeTerms').checked;
                
                // Basic validation
                if (!fullName || !email || !phone || !serviceType || !budget || !timeline || !projectDescription) {
                    alert('Please fill in all required fields marked with *');
                    return;
                }
                
                if (!agreeTerms) {
                    alert('Please agree to the Terms of Service and Privacy Policy to continue.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // Phone validation (basic)
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
                    alert('Please enter a valid phone number.');
                    return;
                }
                
                // Get additional services
                const additionalServices = [];
                const checkboxes = ['seo', 'branding', 'analytics', 'ecommerce', 'maintenance', 'training'];
                checkboxes.forEach(id => {
                    if (document.getElementById(id).checked) {
                        additionalServices.push(document.querySelector(`label[for="${id}"]`).textContent);
                    }
                });
                
                // Simulate form submission
                const submitBtn = applicationForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing Application...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    // Create application summary
                    let summary = `Thank you ${fullName}! Your service application has been submitted successfully.\n\n`;
                    summary += `Application Details:\n`;
                    summary += `• Service: ${serviceType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}\n`;
                    summary += `• Budget: ${budget.replace('-', ' - $').replace('under', 'Under $').replace('over', 'Over $')}\n`;
                    summary += `• Timeline: ${timeline.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}\n`;
                    if (additionalServices.length > 0) {
                        summary += `• Additional Services: ${additionalServices.join(', ')}\n`;
                    }
                    summary += `\nWe'll review your application and contact you within 24 hours at ${email} or ${phone}.\n\n`;
                    summary += `Application ID: FN-${Date.now().toString().slice(-6)}`;
                    
                    alert(summary);
                    applicationForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Scroll to top of form
                    applicationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 3000);
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.25)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.15)';
            }
        });

        console.log('Fasioh Nexus website loaded successfully! 🚀');
