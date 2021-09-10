document.querySelector('#share-link').addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: '{{ .Title }}',
            url: '{{ .Permalink }}'
        })
            .then(() => prompt('Successful share'))
            .catch((error) => prompt('Error sharing', error));
    }
});