// This scripts toggles the visibility of sections in a webpage.
// It adds event listeners to elements with the class 'magicVisible'.
// When clicked, it toggles the visibility of the corresponding section and changes the class of the clicked element.

function toggleSection(sectionId, event) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden');
        if (event.currentTarget.classList.contains('magicVisible')) {
            event.currentTarget.classList.remove('magicVisible');
            event.currentTarget.classList.add('magicInvisible');
        } else {
            event.currentTarget.classList.remove('magicInvisible');
            event.currentTarget.classList.add('magicVisible');
        }
    }
}