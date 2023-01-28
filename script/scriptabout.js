const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const linkTag = document.getElementById('stylesheet');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
        linkTag.href = 'light-mode-about.css';
    } else {
        linkTag.href = 'dark-mode-about.css';
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        linkTag.href = 'light-mode-about.css';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        linkTag.href = 'dark-mode-about.css';
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
