    // Change The Picture and Element Color when Color Options Are Clicked.
    //document.getElementById('span').click()
    //Decided to simpify component code using jquery
    
    $(".product-colors span").click(function () {
        $(".product-colors span").removeClass("active");
        $(this).addClass("active");   
        //Change image, etc Depending on the coor of the cicked eement
        if($(this).hasClass("black")){
          $(".imgBx img").attr('src', "assets/images/outfit1.png");
          $(".content h2").css("color", "white");
          $(".customize-container .details button").css("background", "green");
          $(".content h3").css("color", "white");
        }
        if($(this).hasClass("purple")){
          $(".imgBx img").attr('src', "assets/images/outfit2.png");
          $(".content h2").css("color", "purple");
          $(".customize-container .details button").css("background", "purple");
          $(".content h3").css("color", "purple");
  
        }
        if($(this).hasClass("darkBlue")){
          $(".imgBx img").attr('src', "assets/images/outfit3.png");
          $(".content h2").css("color", "rgb(9, 0, 139)");
          $(".customize-container .details button").css("background", "rgb(9, 0, 139)");
          $(".content h3").css("color", "rgb(9, 0, 139)");
        }
      });