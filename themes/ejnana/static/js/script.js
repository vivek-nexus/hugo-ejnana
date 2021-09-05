document.querySelector('#share-link').addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
    url: '{{ .Permalink }}'
        })
            .then(() => console.log('Share complete'))
            .error((error) => console.error('Could not share at this time', error))
    }
});