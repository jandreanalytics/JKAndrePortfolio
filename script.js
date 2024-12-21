document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 30,          // Reduced from 60
                density: {
                    enable: true,
                    value_area: 800  // Reduced from 1500
                }
            },
            color: {
                value: '#3498db'
            },
            shape: {
                type: 'circle'      // Simplest shape for better performance
            },
            opacity: {
                value: 0.3,
                random: false,      // Disabled random opacity
                anim: {
                    enable: false   // Disabled opacity animation
                }
            },
            size: {
                value: 2,          // Smaller particles
                random: false,      // Disabled random size
                anim: {
                    enable: false   // Disabled size animation
                }
            },
            line_linked: {
                enable: true,
                distance: 150,      // Reduced from 200
                color: '#3498db',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8,        // Slower movement
                direction: 'none',
                random: false,      // Disabled random movement
                straight: false,
                out_mode: 'bounce',  // Changed to bounce to keep particles in view
                bounce: true,
                attract: {
                    enable: false   // Disabled attraction
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
                    enable: false   // Disabled click interactions
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 150,  // Reduced from 200
                    line_linked: {
                        opacity: 0.3
                    }
                }
            }
        },
        retina_detect: false       // Disabled retina detection
    });

    // Remove typing animation code

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected button and content
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

    // Smooth scrolling for navigation (modified to exclude resume link)
    document.querySelectorAll('nav a:not(.resume-nav-link)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Remove these sections:
    // Project data
    // const projects = [
    //     {
    //         title: 'Data Analysis Project 1',
    //         description: 'Description of your first project...',
    //         technologies: ['Python', 'Pandas', 'Matplotlib'],
    //         link: '#'
    //     },
    //     // Add more projects here
    // ];

    // Dynamically create project cards
    // const projectsGrid = document.querySelector('.projects-grid');
    // projects.forEach(project => {
    //     const projectCard = document.createElement('div');
    //     projectCard.className = 'skill-card';
    //     projectCard.innerHTML = `
    //         <h3>${project.title}</h3>
    //         <p>${project.description}</p>
    //         <div class="technologies">
    //             ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
    //         </div>
    //         <a href="${project.link}">Learn More</a>
    //     `;
    //     projectsGrid.appendChild(projectCard);
    // });

    // Remove the handleFormSubmit function and any related event listeners

    // Form handling
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

    // Remove the resume download handler since we're using HTML5 download attribute
    // Delete or comment out this section:
    /*
    const resumeLink = document.querySelector('.resume-nav-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            // Let the default download attribute handle the download
            // No need to preventDefault() or add additional handling
        });
    }
    */
});
