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