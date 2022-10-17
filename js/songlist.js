


let params = new URLSearchParams(window.location.search);
// let currentIndex = 0



$(function () {

    if (params != null) {
        currentIndex = parseInt(params.get('album'));
    }
    $('#next-arrow').click(function () {
        currentIndex++;

        if (currentIndex > 9) currentIndex = 0;
        // fromRight(cureentIndex)

        console.log(currentIndex);

        showListFromLeft(currentIndex);
    });

    $('#prev-arrow').click(function () {
        currentIndex--;

        if (currentIndex < 0) currentIndex = 9;
        // fromRight(cureentIndex)
        console.log(currentIndex);

        showListFromRight(currentIndex);
    });

    $('.song-link').click(function () {
        let clicked = $(this);
        setTimeout(function () {
            $('body > .contents').css('opacity', '0');
            $('body > footer').css('opacity', '0');
            $('body > .arrow-container').css('opacity', '0');
            $('body > header').css('opacity', '0');
        }, 400);
        setTimeout(function () {
            $('body > .background').css('opacity', '0');
        }, 600);
        setTimeout(function () {
            window.location.href = $(clicked).attr('link');
        }, 800);
        //window.location.href = $(this).attr('link');
    })

    showList(currentIndex);
});



function showList(_index) {
    $('.contents > div').hide();
    $('.contents > div').eq(_index).fadeIn(300);
    $('.contents > div').eq(_index).find('div').fadeIn(100);

    setTimeout(function () {
        $('body > .black').css('display', 'none');
        $('.background').css('opacity', '0.36');
        $('body > header').css('opacity', '1');
        $('.arrow-container').css('opacity', '1');
        $('footer').fadeIn();
    }, 200);

    setTimeout(function () {
        $('.contents > div').eq(_index).css('opacity', '1');
        $('.contents > div').eq(_index).find('obj').css('opacity', '0.3');
    }, 500);
    let backgroundImg = $('.contents > div').eq(_index).attr('background');
    $('.background').css('background-image', backgroundImg);
}

let toRotatePrev;
let toRotateNext;

function showListFromLeft(_index) {
    $('.contents > div').each(function () {
        if ($(this).css('display') == 'block') {
            toRotatePrev = $(this);
            toRotateNext = $('.contents > div').eq(_index);
            toRotatePrev.css('transform', 'rotate(-10deg)');
            toRotateNext.css('transform', 'rotate(170deg)');
            toRotatePrev.css('opacity', '1');
            toRotateNext.css('opacity', '1');
            setTimeout(function () {
                toRotatePrev.css('transform', 'rotate(+180deg)');
                toRotateNext.css('transform', 'rotate(360deg)');
            }, 400)
            toRotatePrev.hide();
            // toRotateNext.show();
        }
    })

    $('.contents > div').eq(_index).show();
    $('.contents > div').eq(_index).css('transform', 'rotate(180deg)');
    $('.contents > div').eq(_index).find('div').fadeIn(500);


    let backgroundImg = $('.contents > div').eq(_index).attr('background');
    $('.background').css('background-image', backgroundImg);
}

function showListFromRight(_index) {
    $('.contents > div').each(function () {
        if ($(this).css('display') == 'block') {
            toRotatePrev = $(this);
            toRotateNext = $('.contents > div').eq(_index);
            toRotatePrev.css('transform', 'rotate(10deg)');
            toRotateNext.css('transform', 'rotate(190deg)');
            toRotatePrev.css('opacity', '1');
            toRotateNext.css('opacity', '1');
            setTimeout(function () {
                toRotatePrev.css('transform', 'rotate(-180deg)');
                toRotateNext.css('transform', 'rotate(0deg)');
            }, 400)
            toRotateNext.show();
            toRotatePrev.hide();
        }
    })

    $('.contents > div').eq(_index).show();
    $('.contents > div').eq(_index).css('transform', 'rotate(180deg)');
    $('.contents > div').eq(_index).find('div').fadeIn(500);


    let backgroundImg = $('.contents > div').eq(_index).attr('background');
    $('.background').css('background-image', backgroundImg);
}


//////////클릭 이벤트///////////

$(function () {
    $('header a').click(function () {
        setTimeout(function () {
            $('body > .contents').css('opacity', '0');
            $('body > .background').css('opacity', '0');
            $('body > footer').fadeOut('slow');
            $('body > .arrow-container').fadeOut('slow');
            $('body > header').fadeOut('slow');
            //$('.contents').fadeOut(slow);
            //$('.background').fadeOut(slow);
        }, 400);
        setTimeout(function () {
            window.location.href = $(this).attr('link');
        }, 600);
        //window.location.href = $(this).attr('link');
    });

});

// $('header a').click(function () {
//     window.location.href = 'index.html';
// });