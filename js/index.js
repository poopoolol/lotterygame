$(() => {
    $('#data').empty()
        //先把開講畫面隱藏
    $('#opener').empty()
    $('#openerspecial').empty()
    $('.reset').on('click', () => {
        $('#data').empty()
        location.reload()
    })
    $('#clear').on('click', () => {
        $('#data').empty()
        location.reload()
    })
    $('#restart2').on('click', () => {
        $('#data').empty()
        location.reload()
    })
    var guessBall = []
    $('#input').on('click', () => {
            var itemNum = $(".item").length
            var n = $('#input-text').val()
            if (itemNum < 6) {
                if (n > 49) {
                    $('#dialogfail').modal('show')
                } else {
                    var $item = $('<img>').attr('class', 'item animated jello')
                        .attr('src', './ball/' + n + '.png')
                        .attr('style', 'animation-iteration-count:5')
                    var $col = $('<div>').attr('class', 'col').append($item)
                    guessBall.push(n)
                }
                $('#data').append($col)
                if (itemNum == 5) {
                    document.getElementById("submit").disabled = false
                }
            }
        })
        //生成球的變數
    var allBall = []
    var randomBall = []
    for (var i = 1; i <= 48; i++) {
        allBall.push(i)
    }

    //洗球
    function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    }
    allBall.sort(randomSort)
    for (var c = 0; c <= 6; c++) {
        randomBall[c] = allBall[c]
    }
    console.log(randomBall)
        //秘密按鈕
    $('.secret').on('click', () => {
            alert(randomBall)
        })
        //按下計算結果
    $('#gameset').on('click', (normalnum, specialnum) => {
            //計算相同的球數
            //計算有多少一般球相同
            var normalnum = 0
            for (f = 0; f < 6; f++) {
                for (g = 0; g < 6; g++) {
                    if (guessBall[f] == randomBall[g]) {
                        normalnum++
                    }
                }
            }
            //計算是否有special球
            for (f = 0; f < 6; f++) {
                if (guessBall[f] == randomBall[6]) {
                    normalnum += 10
                }
            }
            console.log(normalnum)
                //case寫法計算結果
            switch (normalnum) {
                default: $('#dialognoprice').modal('show')
                break
                case 3:
                        $('#dialog30').modal('show')
                    break
                case 4:
                        $('#dialog40').modal('show')
                    break
                case 5:
                        $('#dialog50').modal('show')
                    break
                case 6:
                        $('#dialog60').modal('show')
                    break
                case 12:
                        $('#dialog21').modal('show')
                    break
                case 13:
                        $('#dialog31').modal('show')
                    break
                case 14:
                        $('#dialog41').modal('show')
                    break
                case 15:
                        $('#dialog51').modal('show')
                    break
            }
        })
        //按下submit
    $('#submit').on('click', () => {
        if ((guessBall[0] == guessBall[1]) || (guessBall[0] == guessBall[2]) || (guessBall[0] == guessBall[3]) || (guessBall[0] == guessBall[4]) || (guessBall[0] == guessBall[5]) || (guessBall[1] == guessBall[2]) || (guessBall[1] == guessBall[3]) || (guessBall[1] == guessBall[4]) || (guessBall[1] == guessBall[5]) || (guessBall[2] == guessBall[3]) || (guessBall[2] == guessBall[4]) || (guessBall[2] == guessBall[5]) || (guessBall[3] == guessBall[4]) || (guessBall[3] == guessBall[5]) || (guessBall[5] == guessBall[4])) {
            $('#dialogrepeat').modal('show')
        } else {
            $('#dialogsuccess').modal('show')
            document.getElementById("revealBall1").disabled = false
            document.getElementById("revealBall2").disabled = false
            document.getElementById("revealBall3").disabled = false
            document.getElementById("revealBall4").disabled = false
            document.getElementById("revealBall5").disabled = false
            document.getElementById("revealBall6").disabled = false
            document.getElementById("revealBall7").disabled = false
            document.getElementById("gameset").disabled = false
        }

    })
    $('#revealBall1').on('click', () => {
            $openball = $('<img>').attr('class', 'open animated bounceInRight')
                .attr('src', './ball/back.png')
            document.getElementById("revealBall1").disabled = true
            $('#opener').append($openball)
                //按下開球
            $openball.on('click', function() {
                $(this).attr('src', './ball/' + randomBall[0] + '.png')
            })
        })
        //2
    $('#revealBall2').on('click', () => {
            $openball = $('<img>').attr('class', 'open animated lightSpeedIn')
                .attr('src', './ball/back.png')
            document.getElementById("revealBall2").disabled = true
            $('#opener').append($openball)
                //按下開球
            $openball.on('click', function() {
                $(this).attr('src', './ball/' + randomBall[1] + '.png')
            })
        })
        //3
    $('#revealBall3').on('click', () => {

            $openball = $('<img>').attr('class', 'open animated rubberBand')
                .attr('src', './ball/back.png')
            document.getElementById("revealBall3").disabled = true
            $('#opener').append($openball)
                //按下開球
            $openball.on('click', function() {
                $(this).attr('src', './ball/' + randomBall[2] + '.png')
            })
        })
        //4
    $('#revealBall4').on('click', () => {

            $openball = $('<img>').attr('class', 'open animated tada')
                .attr('src', './ball/back.png')
            document.getElementById("revealBall4").disabled = true
            $('#opener').append($openball)
                //按下開球
            $openball.on('click', function() {
                $(this).attr('src', './ball/' + randomBall[3] + '.png')
            })
        })
        //5
    $('#revealBall5').on('click', () => {
            $openball = $('<img>').attr('class', 'open animated bounceIn')
                .attr('src', './ball/back.png')
            document.getElementById("revealBall5").disabled = true
            $('#opener').append($openball)
                //按下開球
            $openball.on('click', function() {
                $(this).attr('src', './ball/' + randomBall[4] + '.png')
            })
        })
        //6
    $('#revealBall6').on('click', () => {

            $openball = $('<img>').attr('class', 'open animated fadeInRight')
                .attr('src', './ball/back.png')
            document.getElementById("revealBall6").disabled = true
            $('#opener').append($openball)
                //按下開球
            $openball.on('click', function() {
                $(this).attr('src', './ball/' + randomBall[5] + '.png')
            })
        })
        //special
    $('#revealBall7').on('click', () => {
        $openballspecial = $('<img>').attr('class', 'open animated bounceInRight special')
            .attr('src', './ball/back.png')
        document.getElementById("revealBall7").disabled = true
        $('#opener').append($openballspecial)
            //按下開球
        $openballspecial.on('click', function() {
            $(this).attr('src', './ball/' + randomBall[6] + '.png')
        })
    })

})