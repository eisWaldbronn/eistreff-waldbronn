const DOC_LINKS = document.links;
for (let i = 0; i < DOC_LINKS.length; i++) {
    if (DOC_LINKS[i].hostname !== window.location.hostname) {
        DOC_LINKS[i].target = '_blank';
    }
}
