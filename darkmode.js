document.addEventListener('DOMContentLoaded', function () {
    const html = document.getElementById('html');
    const themeToggle = document.getElementById('theme');
    const darkModeButton = document.getElementById('toggle3'); // Dark mode toggle button

    const darkModeToggle = () => {
        html.classList.toggle('dark-mode');
        if (html.classList.contains('dark-mode')) {
            themeToggle.href = 'dark-mode.css'; // Create a dark mode stylesheet
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            themeToggle.href = 'settings.css'; // Your original stylesheet
            localStorage.setItem('dark-mode', 'disabled');
        }
    };

    // Add event listener for dark mode toggle button
    darkModeButton.addEventListener('change', darkModeToggle);
});
