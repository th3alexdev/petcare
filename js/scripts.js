
/* Nav */
    const nav = document.getElementById('nav-list')
    const btnToggle = document.getElementById('btn-toggle')

    btnToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-list--active')

        if(nav.classList.contains('nav-list--active')) {
            btnToggle.setAttribute('aria-label', 'Close Menu')
            
        } else {
            btnToggle.setAttribute('aria-label', 'Open Menu')
        }
    })

    window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop

        if (scroll > 1) {
            nav.classList.remove('nav-list--active')
        }
    })

    
/* PreLoader */
    let loader = document.getElementById('preloader')
    const disabledScroll = () => {
        window.scrollTo(0, 0)
    }
    
    window.addEventListener('load', () => {
        window.addEventListener('scroll', disabledScroll)
        setTimeout(() => {
            window.removeEventListener('scroll', disabledScroll)
            loader.classList.add('preloader--fade-out')
        }, 2500);
    })


/* Dark Mode */
    const toggleTheme = document.getElementById('toggle-theme');
    const toggleIcon = document.getElementById('toggle-theme--icon');
    
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if(toggleIcon.classList.contains('fa-moon')) {
            toggleIcon.classList.remove('fa-moon')
            toggleIcon.classList.add('fa-sun')
        } else {
            toggleIcon.classList.remove('fa-sun')
            toggleIcon.classList.add('fa-moon')
        }
    })