document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 30,          
                density: {
                    enable: true,
                    value_area: 800  
                }
            },
            color: {
                value: '#3498db'
            },
            shape: {
                type: 'circle'      
            },
            opacity: {
                value: 0.3,
                random: false,      
                anim: {
                    enable: false   
                }
            },
            size: {
                value: 2,          
                random: false,      
                anim: {
                    enable: false   
                }
            },
            line_linked: {
                enable: true,
                distance: 150,      
                color: '#3498db',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8,        
                direction: 'none',
                random: false,      
                straight: false,
                out_mode: 'bounce',  
                bounce: true,
                attract: {
                    enable: false   
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: false   
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 150,  
                    line_linked: {
                        opacity: 0.3
                    }
                }
            }
        },
        retina_detect: false       
    });

    

    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        selectedButton.classList.add('active');
        selectedContent.classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    
    document.querySelectorAll('nav a:not(.resume-nav-link)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    

    
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                form.reset();
                submitButton.textContent = 'Message Sent!';
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitButton.textContent = 'Error! Try Again';
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 3000);
        }
    });

    
    
    /*
    const resumeLink = document.querySelector('.resume-nav-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            
            
        });
    }
    */
});
