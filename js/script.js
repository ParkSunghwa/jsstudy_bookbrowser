$(document).ready(function(){

    $(".button_search").click(function(){
        $(".list").children().empty();

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {query:$(".info_book").val()},
            headers : {Authorization:"KakaoAK 348b84456b142bba3b1ba938fee6cc06"}
          })
            .done(function( msg ) {
              console.log(msg);

              for(i=0; i<=10; i++){
                $(".list").eq(i).children(".box_title").append(msg.documents[i].title);
              $(".list").eq(i).children(".box_thumbnail").append("<img src ='"+ msg.documents[i].thumbnail + "'/>");
              }
              // $(".list").eq(0).children(".box_title").append(msg.documents[0].title);
              // $(".list").eq(0).children(".box_thumbnail").append("<img src ='"+ msg.documents[0].thumbnail + "'/>");


              // for(i=0; i<=10; i++){
              //   $(".list:eq(1)").eq(0).$(".box_title").append(msg.documents[i].title);
              //   $(".list:eq(1)").eq(0).$(".box_thumbnail").append("<img src ='"+ msg.documents[i].thumbnail + "'/>");
              // }
              
            });



    });





});