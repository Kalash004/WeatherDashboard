
$(".content").ready(() => {
    $(".animation").ready(() => {
        console.log($(".animation").html());
        $(".animation").hide().fadeIn(700);
    })
}) 


