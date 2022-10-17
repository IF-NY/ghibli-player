$(function () {
    // $('.ani').click(function () {
    //     setTimeout(function () {
    //         $('body').fadeOut(300, function () {
    //             window.location.href = $(this).attr('link');
    //         })
    //     }, 1500);
    // });
    // $('.ani').click(function () {
    //     window.location.href = $(this).attr('link');
    // });


    setTimeout(function () {
        $('.ani5').css('transform', 'scale(1)');
        $('.ani6').css('transform', 'scale(1)');
    }, 300);

    setTimeout(function () {
        $('.ani1').css('transform', 'scale(1)');
        $('.ani10').css('transform', 'scale(1)');
    }, 500);

    setTimeout(function () {
        $('.ani2').css('transform', 'scale(1)');
        $('.ani9').css('transform', 'scale(1)');
    }, 700);

    setTimeout(function () {
        $('.ani8').css('transform', 'scale(1)');
        $('.ani3').css('transform', 'scale(1)');
    }, 900);

    setTimeout(function () {
        $('.ani4').css('transform', 'scale(1)');
        $('.ani7').css('transform', 'scale(1)');
    }, 1100);

    setTimeout(function () {
        $('.ani-info').slideDown(300);
    }, 1200);

    //애니메이션 리스트 호버 시 제목과 명대사 표시//
    $('.ani1').mouseover(function () {
        $('.ani-info h1').text('The Secret World of Arrietty');
        $('.ani-info p').text("I'll cheer up. Thanks to you, I have the courage to live.");
    });

    $('.ani').mouseout(function () {
        $('.ani-info h1').text('Ghibli Animation');
        $('.ani-info p').text(
            'Listen to the fantastic OST of 10 animations produced by Ghibli Studio.');
    });

    $('.ani2').mouseover(function () {
        $('.ani-info h1').text('The Princess Mononoke');
        $('.ani-info p').text("Survive, you are beautiful.");
    });

    $('.ani3').mouseover(function () {
        $('.ani-info h1').text('My Neighbor Totoro');
        $('.ani-info p').text('Smile like this, and the scary thing disappears.');
    });

    $('.ani4').mouseover(function () {
        $('.ani-info h1').text("Howl's Moving Castle");
        $('.ani-info p').text(
            "I've already run away enough. Now there's something I have to protect... it's you."
        );
    });

    $('.ani5').mouseover(function () {
        $('.ani-info h1').text("Kiki's Delivery Service");
        $('.ani-info p').text(
            "Kiki, don't pay too much attention to the appearance. The important thing is the mindset."
        );
    });

    $('.ani6').mouseover(function () {
        $('.ani-info h1').text("The Spiriting Away Of Sen And Chihiro");
        $('.ani-info p').text(
            "Sometimes you want to say, 'I don't like it, I want to go back.' but even if you're in pain, you endure it and wait for a chance."
        );
    });

    $('.ani7').mouseover(function () {
        $('.ani-info h1').text("Ponyo On the Cliff By the Sea");
        $('.ani-info p').text(
            "There's something called fate. Even if it's painful, it can't change fate.");
    });

    $('.ani8').mouseover(function () {
        $('.ani-info h1').text("Crimson Pig");
        $('.ani-info p').text("Pigs that don't fly are just pigs.");
    });

    $('.ani9').mouseover(function () {
        $('.ani-info h1').text("laputaCastle in the Sky");
        $('.ani-info p').text(
            "No matter how strong a weapon is and how many poor robots you dominate, you can't abandon the ground and live."
        );
    });

    $('.ani10').mouseover(function () {
        $('.ani-info h1').text("The Cat Returns");
        $('.ani-info p').text(
            "You have to live your time. You have to be yourself."
        );
    });

    $('.ani').click(function () {
        let clicked = $(this);
        // $('body').css('')
        $('.ani-list').animate({
            'gap': 0
        }, 300);
        $('.ani').animate({
            'margin-top': 0
        }, 300);
        setTimeout(function () {
            $('.ani').css('transform', 'scaleY(0)');
        }, 1000);
        setTimeout(function () {
            $('header').fadeOut(300);
            $('footer').fadeOut(300);
            $('.main').fadeOut(300);
            $('body').css('background-color', 'black');
        },1100);
        setTimeout(function () {
                window.location.href = $(clicked).attr('link');
        }, 1400);
    });


    

    // $('.ani').click(function(){
    //     window.location.href = $(this).attr('link');
    //     });
});