let params = new URLSearchParams(window.location.search);

let currentPlaying; // 현재 재생되고 있는 리스트 아이템의 index
let currentAudio; // 현재 재생되는 있는 리스트 아이템의 audio 태그

$(function () {

    $('.smallt').click(function () {
        window.location.href = $(this).attr('link');
    });

    // ===== List 생성하기 =====
    addItem('Kaze ni Naru', './musics/20104917.jpg', './musics/고양이의 보은  Kaze ni Naru.mp3');
    addItem('Song of the Baron', './musics/20104917.jpg', './musics/고양이의 보은 Song of the Baron.mp3');
    addItem('Waltz Katzen Blut', './musics/20104917.jpg', './musics/고양이의 보은 Waltz Katzen Blut.mp3');
    addItem('At the Crossroads', './musics/20104917.jpg', './musics/고양이의 보은 At the Crossroads.mp3');
    setPlayer(0); // 0번 곡으로 초기값 설정

    if (params != null) {
        currentPlayer = parseInt(params.get('song'));
    }
    setPlayer(currentPlayer);

    // ===== 재생 이벤트 등록 =====
    $('#prev').click(function () {
        setTimeout(function () {
            playPrev();
        },300);
    });
    $('#pause').click(function () {
        pauseAndPlay();
    });
    $('#next').click(function () {
        setTimeout(function () {
            playNext();

        },300);
    });

    //강제 음악 재생
    $('#pause').trigger('click');
    $('#next').click(function () {
        $('#pause').empty();
        let icon = $('<i class="icon fas fa-pause"></i>');
        $('#pause').append(icon);
    })
    $('#prev').click(function () {
        $('#pause').empty();
        let icon = $('<i class="icon fas fa-pause"></i>');
        $('#pause').append(icon);
    })

    // ===== 프로그래스바 채우기 ===== //0.1초마다 확인한다
    setInterval(function () {
        let progress = getProgress() * 100;
        $('.player-progress > div').css('width', progress + '%');
    }, 100)

    $('html body').keydown(function (e) {
        if (e.keyCode == 37) { //왼
            $('#prev').trigger('click');
        } else if (e.keyCode == 39) { //오
            $('#next').trigger('click');
        } else if (e.keyCode == 32) { //정지
            $('#pause').trigger('click');
        }
    });

    //메뉴 펼치기

    $(".menu_icon").click(function () {
        if ($(".menu").css("display") == "block") {

            $(".menu").animate({
                left: '75.104vw'
            })
        }

    });

    $(".x").click(function () {
        if ($(".menu").css("display") == "block") {
            $(".menu").animate({
                left: '100vw'
            })
        }
    });

    //메뉴 아이콘 애니메이션
    // $('.menu-icon div').mouseover(function () {
    //   $('.menu_icon div:first-child').css('left', '14px');
    //   $('.menu_icon div:last-child').css('left', '14px');
    // });
})



// ===== List에 아이템을 추가하는 함수(리스트 요소 순서대로 명칭이 적용됨) =====
function addItem(title, image, audio) {
    let newItem = $('#example_item').clone(true);
    newItem.removeProp('id');
    newItem.show();

    // 팀별로 리스트 아이템에 맞는 클래스 정보를 찾아서 교체해주기
    newItem.find('.item-title').html('<div class="play-item"><div class="playpause"></div>' + title + '</div>');
    newItem.find('.item-img').css('background-image', "url('" + image + "')");
    newItem.find('.item-audio > source').attr('src', audio);


    // 리스트 아이템 클릭시 이벤트 등록
    newItem.click(function () {
        currentAudio[0].pause(); // 재생중인 오디오 중지
        currentAudio[0].currentTime = 0; // 재생중인 오디오 위치 초기화
        $(this).find('.item-audio')[0].play(); // 선택된 오디오 재생

        setPlayer($(this).index()); // setPlayer 함수 호출 (플레이어로 정보 전달)
    })

    // 리스트에 아이템 추가
    $('#music_list').append(newItem);


}

// ===== Player에 정보 넣는 함수 =====
function setPlayer(index) {
    currentPlaying = index;
    currentAudio = $('#music_list > .item').eq(index).find('.item-audio');


    // 아이템에 들어가는 정보에 따라 변경
    let title = $('#music_list > .item').eq(index).find('.item-title').text();
    let image = $('#music_list > .item').eq(index).find('.item-img').css('background-image');

    $('.player-title').text(title)
    $('.player-img').css('background-image', image);



    if (title == 'Kaze ni Naru') {
        $('.circle_1').css('background-image', 'url("https://i.pinimg.com/originals/90/45/56/9045561529d8b445b4ba46139d30c395.gif")');
        $('.dark').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url("https://i.pinimg.com/originals/90/45/56/9045561529d8b445b4ba46139d30c395.gif")');
        $('.item-title').eq(0).css('color','white');
        $('.item-title').eq(1).css('color','#888');
        $('.item-title').eq(2).css('color','#888');
        $('.item-title').eq(3).css('color','#888');
        $('.item-title').eq(0).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/7L4rMpmt/Frame-19.png")');
        $('.item-title').eq(1).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(2).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(3).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
    } else if (title == 'Song of the Baron') {
        $('.dark').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url("https://i.pinimg.com/originals/5d/c0/88/5dc088f72b7f3b1227124f14a94705a6.gif")');
        $('.circle_1').css('background-image', 'url("https://i.pinimg.com/originals/5d/c0/88/5dc088f72b7f3b1227124f14a94705a6.gif")');
        $('.item-title').eq(0).css('color','#888');
        $('.item-title').eq(1).css('color','white');
        $('.item-title').eq(2).css('color','#888');
        $('.item-title').eq(3).css('color','#888');
        $('.item-title').eq(1).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/7L4rMpmt/Frame-19.png")');
        $('.item-title').eq(0).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(2).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(3).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
    } else if (title == 'Waltz Katzen Blut') {
        $('.circle_1').css('background-image', 'url("https://i.pinimg.com/originals/1b/2f/24/1b2f24dd108042c60756df803ebf92c8.gif")');
        $('.dark').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url("https://i.pinimg.com/originals/1b/2f/24/1b2f24dd108042c60756df803ebf92c8.gif")');
        $('.item-title').eq(0).css('color','#888');
        $('.item-title').eq(1).css('color','#888');
        $('.item-title').eq(2).css('color','white');
        $('.item-title').eq(3).css('color','#888');
        $('.item-title').eq(2).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/7L4rMpmt/Frame-19.png")');
        $('.item-title').eq(1).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(0).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(3).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
    } else if (title == 'At the Crossroads') {
        $('.circle_1').css('background-image', 'url("https://i.pinimg.com/originals/1a/b6/9a/1ab69a232d0b47b19ef85d61a32ff34f.gif")');
        $('.dark').css('background-image', 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),url("https://i.pinimg.com/originals/1a/b6/9a/1ab69a232d0b47b19ef85d61a32ff34f.gif")');
        $('.item-title').eq(0).css('color','#888');
        $('.item-title').eq(1).css('color','#888');
        $('.item-title').eq(2).css('color','#888');
        $('.item-title').eq(3).css('color','white');
        $('.item-title').eq(3).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/7L4rMpmt/Frame-19.png")');
        $('.item-title').eq(1).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(2).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
        $('.item-title').eq(0).find('.play-item > .playpause').css('background-image','url("https://i.postimg.cc/fyqzq07J/Frame-18.png")');
    }
    
}

// ===== 재생 컨트롤 함수 =====
function playPrev() {
    currentPlaying--;
    if (currentPlaying < 0) currentPlaying = $('#music_list > .item').length - 1;

    $('#music_list > .item').eq(currentPlaying).click();

}

function pauseAndPlay() {
    if (currentAudio[0].paused) currentAudio[0].play();
    else currentAudio[0].pause();
}

function playNext() {
    currentPlaying++;
    if (currentPlaying >= $('#music_list > .item').length) currentPlaying = 0;

    $('#music_list > .item').eq(currentPlaying).click();
}

function getProgress() {
    return currentAudio[0].currentTime / currentAudio[0].duration;
} //현재 재생시점                    //음원의 기리


//스킵 시 애니메이션
$(document).ready(function () {
    $('#next').click(function () {
        $('.circle_1')
            .animate({
                    opacity: "0"
                }, 0,
                function () {
                    $(this).delay(500)
                        .animate({
                            opacity: '1'
                        }, 300);
                });
        $('.dark').animate({
                opacity: "0"
            }, 0,
            function () {
                $(this).delay(600)
                    .animate({
                        opacity: '1'
                    }, 500);
            });
        $('.player-title').animate({
            opacity: "0"
        }, 0, function () {
            $(this)
                .animate({
                    opacity: '1'
                }, 1000);
        });
    });
});
//뒤로가기 시 애니메이션
$(document).ready(function () {
    $('#prev').click(function () {
        $('.circle_1')
            .animate({
                    opacity: "0"
                }, 0,
                function () {
                    $(this).delay(500)
                        .animate({
                            opacity: '1'
                        }, 300);
                });
        $('.dark').animate({
                opacity: "0"
            }, 0,
            function () {
                $(this).delay(600)
                    .animate({
                        opacity: '1'
                    }, 500);
            });
        $('.player-title').animate({
            opacity: "0"
        }, 0, function () {
            $(this)
                .animate({
                    opacity: '1'
                }, 1000);
        });
    });
});

$(function(){
    $('.menu_icon').hover(
      function(){
        $('.menu-bar1').animate({'margin-left': 10},200);
        $('.menu-bar2').animate({'margin-left': 0},200);
        $('.menu-bar3').animate({'margin-left': 16},200);
        $('.menu3 > i').animate({'right': 26},200);
      },
      function(){
        $('.menu-bar1').animate({'margin-left': 0},200);
        $('.menu-bar2').animate({'margin-left': 10},200);
        $('.menu-bar3').animate({'margin-left': 0},200);
        $('.menu3 > i').animate({'right': 0},200);
       }
    );

    $('#pause').click(function() {
        $(this).find('i').toggleClass('fa-play');
    });
      
  });

  $(function(){
    showList();
});


function showList(_index) {
    setTimeout(function () {
        $('body > #layer').css('opacity', '1');
    }, 200);
    setTimeout(function () {
        $('.circle_3').css('width', '67.708vw');
        $('.circle_3').css('opacity','1');
    }, 600);
    setTimeout(function () {
        $('.circle_2').css('width', '46.875vw');
        $('.circle_2').css('opacity','1');
    }, 800);
    setTimeout(function () {
        $('.circle_1').css('width', '67.708vw');
        $('.circle_1').css('opacity','1');
    }, 900);
    setTimeout(function () {
        $('.circle_3').css('width', '28.646vw');
        $('header').css('opacity','1');
        $('footer').css('opacity','1');
        $('.dark').css('opacity','1');
        $('#player').css('opacity','1');
        $('#layer h1').css('opacity','1');
    }, 1200);
}

//function showList(_index) {
    //setTimeout(function () {
        //$('body > #layer').css('opacity', '1');
    //}, 200);
    //setTimeout(function () {
        //$('.circle_3').css('opacity','1');
        //$('.circle_2').css('width', '46.875vw');
        //$('.circle_2').css('opacity','1');
        //$('.circle_3').css('width', '28.646vw');
        //$('.circle_1').css('width', '67.708vw');
        //$('.circle_1').css('opacity','1');
    //}, 800);
    //setTimeout(function () {
        //$('header').css('opacity','1');
        //$('footer').css('opacity','1');
        //$('.dark').css('opacity','1');
    //}, 1200);
//}