var $grid = document.querySelector('.gallery-grid');
    var msnry = new Masonry($grid, {
        itemSelector: '.gallery-item',
        gutter: 40,
        percentPosition: true
    });
    var $images = $grid.querySelectorAll('.gallery-item img');
    

    Promise.all(
        Array.from($images).filter(img => !img.complete)
            .map(img => new Promise(resolve => { 
                img.addEventListener('load', resolve); 
                img.addEventListener('error', resolve);
            })
            )
    ).then(
        () => {
            console.log('images finished loading');
            msnry.layout();
        }
);