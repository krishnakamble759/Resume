document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.querySelector('.theme-switch input');
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // --- Project Modal ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const closeBtn = document.querySelector('.close');

    const projectDetails = {
        'project1': {
            title: 'Open-CV based Virtual Interactive Whiteboard',
            description: 'A Python application developed using OpenCV and other libraries to create a virtual interactive whiteboard that allows users to write or draw in the air using hand gestures.',
            tech: ['Python', 'OpenCV', 'Numpy']
        },
        'project2': {
            title: 'Personal Portfolio Website',
            description: 'An interactive personal portfolio website designed to showcase projects, skills, and professional experience. Built with a focus on responsive design and smooth user experience.',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        'project3': {
            title: 'Android App with AI',
            description: 'A mobile application developed using Android Studio, integrating AI-driven features to enhance user interaction and functionality.',
            tech: ['Android Studio', 'Java/Kotlin', 'AI APIs']
        },
        'project4': {
            title: 'Netflix Clone',
            description: 'A feature-rich Netflix clone built with Vite and pure JavaScript. Features a custom-built video player with advanced controls (speed, lock, volume, mobile gesture support), voice search functionality, dynamic content rendering ("Coming Soon", "Movies"), and a fully responsive SCSS-based design.',
            tech: ['HTML5', 'SCSS', 'JavaScript (ES6)', 'Vite', 'Bootstrap 5', 'Web Speech API']
        },
        'project5': {
            title: 'Salesforce Clone',
            description: 'A responsive, multi-page clone of the Salesforce website, featuring a multi-page structure (Products, Industries, Agentforce), intricate SCSS styling for a premium look, and dynamic navigation.',
            tech: ['HTML', 'SCSS/Sass', 'JavaScript', 'Vite', 'Bootstrap']
        },
        'project6': {
            title: 'VUB Engineering Limited',
            description: 'The official corporate website for VUB Engineering, a leading infrastructure firm. Developed with a focus on performance, responsiveness, and premium aesthetics using Vite and heavy customizations of Bootstrap and AOS animations.',
            tech: ['HTML5', 'Sass (SCSS)', 'JavaScript (ES6+)', 'Vite', 'Bootstrap 5', 'AOS']
        },
        'project7': {
            title: 'INAM Music Streaming App',
            description: 'A premium, responsive music streaming application built from scratch. Features include a fully custom audio player with synchronized lyrics, advanced playback controls (shuffle, repeat, seek), voice search functionality using the Web Speech API, and user authentication with sign-up/sign-in flows. The app uses localStorage for user sessions and provides categorized browsing (Latest, 90s, Bollywood).',
            tech: ['HTML5', 'Sass (SCSS)', 'JavaScript (ES6+)', 'Bootstrap 5', 'Web Speech API', 'LocalStorage']
        },
        'project8': {
            title: 'Flipkart Clone',
            description: 'A pixel-perfect, fully responsive clone of the Flipkart website. Features include a dynamic product catalog, detailed product pages, cart management with calculation logic, user authentication UI, and a premium design system built with SCSS and Bootstrap.',
            tech: ['HTML5', 'SCSS', 'JavaScript (ES6+)', 'Vite', 'Bootstrap 5', 'LocalStorage']
        },
        'project9': {
            title: 'Amazon Clone',
            description: 'A responsive e-commerce platform clone built with HTML, SCSS, and JavaScript. It features a complete product listing page with filtering logic, a functional cart system using local storage, dynamic product details pages, and simulated user authentication. The design is fully responsive and mimics the official Amazon UI.',
            tech: ['HTML5', 'SCSS', 'JavaScript (ES6+)', 'Vite', 'Bootstrap 5', 'LocalStorage']
        }
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectDetails[projectId];
            if (data) {
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;
                modalTechnologies.innerHTML = data.tech.map(t => `<li>${t}</li>`).join('');
                modal.style.display = 'block';
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Display welcome message
    console.log("Welcome to Krishna Pandit Kamble's Portfolio!");
});