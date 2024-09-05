const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
const resultsSection = document.querySelector('.resultados-pesquisa');

const dragonBackgrounds = {
    balerion: './images/balerion.png',
    syrax: './images/syrax.png',
    arrax: './images/arrax.png',
    caraxes: './images/caraxes.png',
    seasmoke: './images/seasmoke.png',
    vermax: './images/vermax.png',
    vhagar: './images/vhagar.png'
};

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const resultsItems = resultsSection.querySelectorAll('.item-resultado');
    let hasVisibleItems = false;

    resultsItems.forEach(item => {
        const itemText = item.querySelector('h2').textContent.toLowerCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = 'block';
            hasVisibleItems = true;

            const backgroundUrl = dragonBackgrounds[itemText];
            if (backgroundUrl) {
                document.body.style.backgroundImage = `url(${backgroundUrl})`;
            }
        } else {
            item.style.display = 'none';
        }
    });

    if (hasVisibleItems) {
        resultsSection.style.visibility = 'visible';
        resultsSection.style.opacity = '1';
    } else {
        resultsSection.style.visibility = 'hidden';
        resultsSection.style.opacity = '0';
    }
}

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});