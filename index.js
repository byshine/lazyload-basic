(function(lazyLoader) {

    var scrollHeightTotal = getScrollHeight();
    var windowHeight = null;
    var offsetTop = null;
    var scrolledHeight = null;
    var percentScrolled = null;
    var numberAdded = 0;

    lazyLoader.init = function() {
        listenOnScroll();
    };

    function listenOnScroll() {
        
        window.addEventListener('scroll', function(e) {
            windowHeight = document.documentElement.clientHeight;
            offsetTop = window.pageYOffset;
            scrolledHeight = windowHeight + offsetTop;
            percentScrolled = scrolledHeight / scrollHeightTotal * 100;

            if ( percentScrolled > 80 ) {
                var previousOffset = offsetTop;
                lazyLoader.addSampleData();
                window.scrollTo(0, previousOffset);
                scrollHeightTotal = getScrollHeight();
            }
        });
    }
    
    /* https://javascript.info/size-and-scroll-window */
    function getScrollHeight() {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    lazyLoader.addSampleData = function() {

        if ( numberAdded <= 50 ) {
            var body = document.getElementsByTagName('body')[0];
            var box = document.querySelector('.box');
            document.body.insertAdjacentHTML( 'beforeend', '<h2>Box #' + numberAdded++ + ' added</h2>');
            document.body.insertAdjacentHTML( 'beforeend', box.outerHTML);
        } 
    }

})( window.lazyLoader = window.lazyLoader || {} );

lazyLoader.init();








  
