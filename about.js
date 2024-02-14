document.addEventListener('DOMContentLoaded', function() {
    // Function to animate team members on scroll
    function animateTeamMembers() {
        const teamMembers = document.querySelectorAll('.team-member');

        teamMembers.forEach(member => {
            const memberPosition = member.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (memberPosition < windowHeight / 1.2) {
                member.style.opacity = '1';
                member.style.transform = 'translateY(0)';
            }
        });
    }

    // Call the animation function on scroll
    window.addEventListener('scroll', animateTeamMembers);

    // Trigger the animation on page load
    animateTeamMembers();
});
