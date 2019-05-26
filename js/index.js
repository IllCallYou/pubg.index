// 1.调用排行榜移入事件
rankingMove();
// 2.点击播放第一屏视频
play();
// 3.自动播放视频
autoplay();

// 1. 排行榜移入事件
function rankingMove() {
    var gameList = document.querySelectorAll('.game_list');
    var ranking = document.querySelectorAll('.ranking ul');
    // 前2个ul，li的移入事件
    for (var i = 0; i < 2; i++) {
        move(1, function () {
            ranking[i].addEventListener('mouseleave', function () {
                this.children[1].classList.add('game_active');
                this.children[1].children[0].classList.add('game1');
                this.children[1].children[1].classList.remove('hidden');
            })
        });
    }

    // 单独处理后面2个ul，li的移入事件
    for (var i = 2; i < ranking.length; i++) {
        if (i == 3) {
            move(0, function () {
                ranking[3].addEventListener('mouseleave', function () {
                    this.children[0].classList.add('game_active');
                    this.children[0].children[0].classList.add('game1');
                    this.children[0].children[1].classList.remove('hidden');
                })
            })
        } else if (i == 2) {
            move(1, function () {
                ranking[2].addEventListener('mouseleave', function () {})
            })
        }
    }

    // 封装移入事件
    function move(index, callback) {
        ranking[i].addEventListener('mouseenter', function () {
            for (var j = index; j < this.children.length; j++) {
                // 清除原有的类名
                this.children[j].classList.remove('game_active');
                this.children[j].children[0].classList.remove('game1');
                this.children[j].children[1].classList.add('hidden');
                this.children[j].addEventListener('mouseenter', function () {
                    this.classList.add('game_active');
                    this.children[0].classList.add('game1');
                    this.children[1].classList.remove('hidden');
                })
                this.children[j].addEventListener('mouseleave', function () {
                    this.classList.remove('game_active');
                    this.children[0].classList.remove('game1');
                    this.children[1].classList.add('hidden');
                })
            }
        })
        callback();
    }
}



// 第一屏视频播放
function play() {
    // 点击显示视频
    var playBtn = document.querySelector('.play_btn');
    var mainWrap = document.querySelector('.main-wrap');
    var close = document.querySelector('.close');
    // 点击显示视频播放
    playBtn.addEventListener('click', function () {
        mainWrap.style.display = 'block';
    })
    // 关闭视频播放
    close.addEventListener('click', function () {
        mainWrap.style.display = 'none';
        document.querySelector(".video").pause();
    })
}

// 自动播放视频
function autoplay() {
    var video = document.querySelectorAll('.autoplay');
    setInterval(function () {
        for (var i = 0; i < video.length; i++) {
            video[i].muted = false;
            video[i].play();
        }
    }, 2000)
}

$(function () {
    // 第二屏点击事件文字左移动画
    $('#section2 .cons2').click(function () {
        // 显示装备界面
        $(this).fadeOut(1000);
        $('#section2 .equip').fadeIn(2000);

        $('#section2 .s2_title').css({
            transition: 'all 0.5s',
            transform: 'translate(-220px,0)'
        });
        setTimeout(function () {
            $('#section2 .title1').css({
                transition: 'all 0.5s',
                transform: 'translate(-250px,0)'
            })
        }, 100);
        setTimeout(function () {
            $('#section2 .title2').css({
                transition: 'all 0.5s',
                transform: 'translate(-250px,0)'
            })
        }, 200);
        setTimeout(function () {
            $('#section2 .title_sub').css({
                transition: 'all 0.5s',
                transform: 'translate(-460px,0)'
            })
        }, 300);


        // 装备图片移动
        equipMove(7, 0, '.equip1', 82);
        equipMove(7, '-83px', '.equip2', 82);
        equipMove(3, '-166px', '.equip3', 82);
        equipMove(6, '-329px', '.equipA', 69);
        equipMove(4, '-399px', '.equipB', 69);
        equipMove(13, '-469px', '.equipC', 69);
        equipMove(13, '-535px', '.equipD', 69);
        equipMove(4, '-605px', '.equipE', 69);
        equipMove(10, '-675px', '.equipF', 69);
        equipMove(5, '-745px', '.equipG', 69);
    })

    // 第三屏武器动画
    $('#section3 .cons3').click(function () {
        $(this).fadeOut(1000);
        // 显示装备界面
        $('#section3 .weapon').fadeIn(2000);

        $('#section3 .s2_title').css({
            transition: 'all 0.5s',
            transform: 'translate(-220px,0)'
        });
        setTimeout(function () {
            $('#section3 .title1').css({
                transition: 'all 0.5s',
                transform: 'translate(-250px,0)'
            })
        }, 100);
        setTimeout(function () {
            $('#section3 .title2').css({
                transition: 'all 0.5s',
                transform: 'translate(-250px,0)'
            })
        }, 200);
        setTimeout(function () {
            $('#section3 .title_sub').css({
                transition: 'all 0.5s',
                transform: 'translate(-460px,0)'
            })
        }, 300);


        slide(0, 3000, '.weapon_top ');
        slide(0, 3500, '.weapon_bottom ');
    })

    // 改变装备图片的函数
    /**
     * @x    背景图片x轴的初始显示位置
     * @y    背景图片y轴的初始显示位置
     * @time 每次移动间隔的时间
     * @ele  要移动的元素
     */
    function step(x, y, time, ele) {
        setTimeout(function () {
            $(ele).css('background-position', x + 'px ' + y);
        }, time);
    }
    // 连续变化装备图片
    /**
     * @val  精灵图图标的个数
     * @y    背景图片y轴的初始显示位置
     * @ele  要改变背景位置的元素
     * @base 每次移动的距离
     */
    function equipMove(val, y, ele, base) {
        // temp x轴每次移动的距离
        var temp = 0;
        // time每次移动间隔的时间
        var time = 0;
        for (var i = 0; i < val; i++) {
            temp = (i + 1) * -base;
            time = (i + 1) * 200;
            // 调用改变图片位置的方法
            step(temp, y, time, ele);
        }
    }

    // 武器自动轮播
    function slide(count, time, ele) {
        clearInterval(timerID);
        var count = count;
        var i = 0;
        var tab = '';
        var eles = ''
        if (count >= 50) {
            clearInterval(timerID);
            return;
        }
        var timerID = setInterval(function () {
            count++;
            i++;
            if (i == 4) {
                i = 1;
            }
            tab = '.tab' + i; //tab3
            eles = ele + tab;
            $(eles).fadeIn(2000).siblings('div').fadeOut(200);
        }, time);

    }

    
    // 第二屏
    // 鼠标移入各个盒子移动装备图片
    $('.equip1').mouseenter(function () {
        equipMove(7, 0, '.equip1', 82);
    })
    $('.equip2').mouseenter(function () {
        equipMove(7, '-83px', '.equip2', 82);
    })
    $('.equip3').mouseenter(function () {
        equipMove(3, '-166px', '.equip3', 82);
    })
    $('.equipA').mouseenter(function () {
        equipMove(6, '-329px', '.equipA', 69);
    })
    $('.equipB').mouseenter(function () {
        equipMove(4, '-399px', '.equipB', 69);
    })
    $('.equipC').mouseenter(function () {
        equipMove(13, '-469px', '.equipC', 69);
    })
    $('.equipD').mouseenter(function () {
        equipMove(13, '-535px', '.equipD', 69);
    })
    $('.equipE').mouseenter(function () {
        equipMove(4, '-605px', '.equipE', 69);
    })
    $('.equipF').mouseenter(function () {
        equipMove(10, '-675px', '.equipF', 69);
    })
    $('.equipG').mouseenter(function () {
        equipMove(5, '-745px', '.equipG', 69);
    })

    // 第三屏
    $('.miaoju').mouseenter(function () {
        equipMove(5, '-812px', $(this), 60);
    })
    $('.qiangkou').mouseenter(function () {
        equipMove(3, '-932px', $(this), 60);
    })
    $('.woba').mouseenter(function () {
        equipMove(2, '-1052px', $(this), 60);
    })
    $('.weapon_top .danjia').mouseenter(function () {
        equipMove(3, '-872px', $(this), 60);
    })
    $('.weapon_bottom .danjia').mouseenter(function () {
        equipMove(3, '-1172px', $(this), 60);
    })
    $('.weapon_top .qiangtuo').mouseenter(function () {
        equipMove(2, '-992px', $(this), 60);
    })

    // 第四屏
    $('.weater-btn').click(function () {
        $(this).addClass('active');
        $('.terrain-btn').removeClass('active');
        // 显示天气
        $('.weater').fadeIn(1000).siblings('.terrain').fadeOut(200);
    })
    $('.terrain-btn').click(function () {
        $('.terrain-btn').addClass('active');
        $('.weater-btn').removeClass('active');
        // 显示地形
        $('.terrain').fadeIn(1000).siblings('.weater').fadeOut(200);
    })

    $('.weater li').mouseenter(function () {
        $(this).children('p').fadeOut(500);
        $(this).siblings('li').children('p').show();
        $(this).stop(true, false).animate({
            width: '56%'
        }, 1000).siblings('li').stop(true, false).animate({
            width: '22%'
        }, 1000);
    })
    $('.terrain li').mouseenter(function () {
        $(this).children('p').fadeOut(500);
        $(this).siblings('li').children('p').show();
        $(this).stop(true, false).animate({
            width: '40%'
        }, 1000).siblings('li').stop(true, false).animate({
            width: '15%'
        }, 1000);
    })


    // 第五屏
    $('.cons5').click(function () {
        $(this).fadeOut(200);
        $('.carrier').fadeIn(500);
        $('.imges').fadeIn(500).children('img').eq(0).fadeIn(500);
        $('.s2_title').animate({
            top: '150px',
            left: '580px'
        }, 600);
        $('.title2').animate({
            left: '385px',
            top: '0px'
        }, 800);
        $('.title_sub').animate({
            top: '250px',
            left: '820px'
        }, 1000);
    })
    $('.carrier li').each(function (index, ele) {
        $(ele).click(function () {
            // 改变按钮的样式
            $(this).children('i').addClass('active');
            $(this).siblings('li').children('i').removeClass('active');
            // 改变图片
            $('.imges img').eq(index).fadeIn(1000).siblings('img').hide(600);
        })
    })


    // 第六屏
    $('.cons6').on('mouseenter', function () {
        $('.video1').fadeIn(500);
    })
    $('.cons6').on('mouseleave', function () {
        $('.video1').fadeOut(300);
    })
    $('.cons7').on('mouseenter', function () {
        $('.video2').fadeIn(500);
    })
    $('.cons7').on('mouseleave', function () {
        $('.video2').fadeOut(300);
    })
    

    // 初始化fullpage
    $('#fullpage').fullpage({

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        verticalCentered: true,
        afterLoad(anchorLink, index) {
            // console.log(anchorLink, index);

            // 设置头部定位
            if (index > 1) {
                $('#top').slideUp(100);
                $('#nav').css('top', '0px');
            } else if (index == 1) {
                $('#top').slideDown(100);
                $('#nav').css('top', '42px');
            }

            // 设置小鼠标
            if (index >= 7) {
                $('#tips').fadeOut(100);
            } else {
                $('#tips').fadeIn(100);
            }

            // 设置左边导航栏样式
            switch(index) {
                case 1 : {
                    $('.left_nav b').css('color','#fff');
                    $('.left_nav div').fadeOut(200);
                    break;
                }
                case 2 : {
                    $('.left_nav b').eq(0).css('color','#e69800');
                    $('.left_nav b').eq(1).css('color','#fff');
                    $('.left_nav b').eq(2).css('color','#fff');
                    $('.left_nav b').eq(3).css('color','#fff');
                    $('.left_nav b').eq(4).css('color','#fff');
                    $('.left_nav div').eq(0).fadeIn(200);
                    $('.left_nav div').eq(1).fadeOut(200);
                    $('.left_nav div').eq(2).fadeOut(200);
                    $('.left_nav div').eq(3).fadeOut(200);
                    $('.left_nav div').eq(4).fadeOut(200);
                    break
                }
                case 3 : {
                    $('.left_nav b').eq(1).css('color','#e69800');
                    $('.left_nav b').eq(0).css('color','#fff');
                    $('.left_nav b').eq(2).css('color','#fff');
                    $('.left_nav b').eq(3).css('color','#fff');
                    $('.left_nav b').eq(4).css('color','#fff');
                    $('.left_nav div').eq(1).fadeIn(200);
                    $('.left_nav div').eq(0).fadeOut(200);
                    $('.left_nav div').eq(2).fadeOut(200);
                    $('.left_nav div').eq(3).fadeOut(200);
                    $('.left_nav div').eq(4).fadeOut(200);
                    break
                }
                case 4 : {
                    $('.left_nav b').eq(2).css('color','#e69800');
                    $('.left_nav b').eq(1).css('color','#fff');
                    $('.left_nav b').eq(0).css('color','#fff');
                    $('.left_nav b').eq(3).css('color','#fff');
                    $('.left_nav b').eq(4).css('color','#fff');
                    $('.left_nav div').eq(2).fadeIn(200);
                    $('.left_nav div').eq(1).fadeOut(200);
                    $('.left_nav div').eq(0).fadeOut(200);
                    $('.left_nav div').eq(3).fadeOut(200);
                    $('.left_nav div').eq(4).fadeOut(200);
                    break
                }
                case 5 : {
                    $('.left_nav b').eq(3).css('color','#e69800');
                    $('.left_nav b').eq(1).css('color','#fff');
                    $('.left_nav b').eq(2).css('color','#fff');
                    $('.left_nav b').eq(0).css('color','#fff');
                    $('.left_nav b').eq(4).css('color','#fff');
                    $('.left_nav div').eq(3).fadeIn(200);
                    $('.left_nav div').eq(1).fadeOut(200);
                    $('.left_nav div').eq(2).fadeOut(200);
                    $('.left_nav div').eq(0).fadeOut(200);
                    $('.left_nav div').eq(4).fadeOut(200);
                    break
                }
                case 6 : {
                    $('.left_nav b').css('color','#fff');
                    $('.left_nav div').fadeOut(200);
                    break;
                }
                case 7 : {
                    $('.left_nav b').css('color','#fff');
                    $('.left_nav div').fadeOut(200);
                    break;
                }
            }
        }
    });
})