/*var msnry = new Masonry( '.gallery-grid', {
    columnWidth: 200,
    gutter: 10,
    itemSelector: '.gallery-item'
});*/

var $grid = document.querySelector('.gallery-grid');
    var msnry = new Masonry($grid, {
        itemSelector: '.gallery-item',
        gutter: 40,
        percentPosition: true
    });
    var $images = $grid.querySelectorAll('.gallery-item img');
    // $images.forEach(function (el) {
    //     el.addEventListener('load', function () {
    //         console.log("Image is loaded: " + el.getAttribute("src"));
    //         msnry.layout();
    //     });
    // });

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