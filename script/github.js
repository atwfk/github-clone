$(document).ready(function(){
    $(".drop-1").click(function(){
        $(".show-1").fadeToggle(500)
        $(".show-2").fadeOut(500)
        $(".show-3").fadeOut(500)
    })
    $(".drop-1").on({
        mouseenter: function(){
            $(".show-1").fadeIn(500)
            $(".show-2").fadeOut(500)
            $(".show-3").fadeOut(500)
        }
    })
    $(".drop-2").click(function(){
        $(".show-2").fadeToggle(500)
        $(".show-1").fadeOut(500)
        $(".show-3").fadeOut(500)
    })
    $(".drop-2").on({
        mouseenter: function(){
            $(".show-2").fadeIn(500)
            $(".show-1").fadeOut(500)
            $(".show-3").fadeOut(500)
        }
    })
    $(".drop-3").click(function(){
        $(".show-3").fadeToggle(500)
        $(".show-1").fadeOut(500)
        $(".show-2").fadeOut(500)
    })
    $(".drop-3").on({
        mouseenter: function(){
            $(".show-3").fadeIn(500)
            $(".show-1").fadeOut(500)
            $(".show-2").fadeOut(500)
        }
    })
    $("#shape-1").on({
        mouseenter: function(){
            $(this).css({"transform":"scale(1.1)"});
            $("#box-1").css({"box-shadow": "0 1px 15px rgba(27,31,35,.15)"})
        },
        mouseleave: function(){
            $(this).css({"transform":"scale(1)"});
            $("#box-1").css({"box-shadow": "none"})
        }
    })
    $("#shape-2").on({
        mouseenter: function(){
            $(this).css({"transform":"scale(1.1)"});
            $("#box-2").css({"box-shadow": "0 1px 15px rgba(27,31,35,.15)"})
        },
        mouseleave: function(){
            $(this).css({"transform":"scale(1)"});
            $("#box-2").css({"box-shadow": "none"})
        }
    })
    $("#shape-3").on({
        mouseenter: function(){
            $(this).css({"transform":"scale(1.1)"});
            $("#box-3").css({"box-shadow": "0 1px 15px rgba(27,31,35,.15)"})
        },
        mouseleave: function(){
            $(this).css({"transform":"scale(1)"});
            $("#box-3").css({"box-shadow": "none"})
        }
    })
    $("#box-1").on({
        mouseenter: function(){
            $(this).css({"box-shadow": "0 1px 15px rgba(27,31,35,.15)"});
            $("#shape-1").css({"transform":"scale(1.1)"})
        },
        mouseleave: function(){
            $(this).css({"box-shadow": "none"});
            $("#shape-1").css({"transform":"scale(1)"})
        }
    })
    $("#box-2").on({
        mouseenter: function(){
            $(this).css({"box-shadow": "0 1px 15px rgba(27,31,35,.15)"});
            $("#shape-2").css({"transform":"scale(1.1)"})
        },
        mouseleave: function(){
            $(this).css({"box-shadow": "none"});
            $("#shape-2").css({"transform":"scale(1)"})
        }
    })
    $("#box-3").on({
        mouseenter: function(){
            $(this).css({"box-shadow": "0 1px 15px rgba(27,31,35,.15)"});
            $("#shape-3").css({"transform":"scale(1.1)"})
        },
        mouseleave: function(){
            $(this).css({"box-shadow": "none"});
            $("#shape-3").css({"transform":"scale(1)"})
        }
    })
})