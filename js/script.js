$(document).ready(function(){

    $(".button_search").click(function(){
        $(".temp").empty();

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {query:$(".info_book").val()},
            headers : {Authorization:"KakaoAK 348b84456b142bba3b1ba938fee6cc06"}
          })
            .done(function( msg ) {
              $(".temp").append(msg.documents[0].title);
              $(".temp").append("<img src ='"+ msg.documents[0].thumbnail + "'/>");
            });



    });





});