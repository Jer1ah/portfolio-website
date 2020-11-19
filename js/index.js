const portfolioListItemController = (function(){
    const _listItems = document.querySelectorAll('.portfolio__listItem');
    const _overlayList = document.querySelectorAll('.overlay');

    for(let i = 0; i < _listItems.length; i++) {
        _listItems[i].addEventListener('mouseenter', () => {
            _overlayList[i].style.transform = 'scale(120)';
        });

        _listItems[i].addEventListener('mouseleave', () => {
            _overlayList[i].style.transform = 'scale(0)';
        });
    }
}());