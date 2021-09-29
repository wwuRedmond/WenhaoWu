
  $( document ).ready(function() {
    
    project = [
        {
        img: "./assets/project_img/CrystallCollectionGuessingGame.png",
        link: "https://wenhaowu27.github.io/unit-4-game/",
        name: "Crystal Collection"
        },
        {
          img: "./assets/project_img/passwpordGenerator.png",
          link: "https://wenhaowu27.github.io/password_generator/",
          name: "Password Generator"
        },
        {
          img: "./assets/project_img/survey.jpg",
          link: "https://immense-beyond-03179.herokuapp.com/survey",
          name: "Friend Finder"
        },
        {
          img: "./assets/project_img/bamazon_nodejs.jpg",
          link: "https://wenhaowu27.github.io/bamazon/",
          name: "Bamazon"
        },
        {
          img: "./assets/project_img/giftastic.png",
          link: "https://wenhaowu27.github.io/Giftastic/",
          name: "GiFtastic"
        },
        {
          img: "./assets/project_img/liri_nodejs.jpg",
          link: "https://wenhaowu27.github.io/unit-10-liri-nodejs/",
          name: "Liri-NodeJs"
        },
        {
          img: "./assets/project_img/4digits_Game.png",
          link:"https://wenhaowu27.github.io/4digit_game/",
          name: "Bulls & Cows"
        },
        {
          img:"./assets/project_img/onecommunity.jpg",
          link:"https://one-community.herokuapp.com/",
          name:"One Community"
          },
          {
          img:"./assets/project_img/reactbooksearch.jpg",
          link:"https://stark-anchorage-35537.herokuapp.com/",
          name:"React-Book Search"
          },
          {
          img:"./assets/project_img/reactclickygame.jpg",
          link:"https://warm-mountain-34639.herokuapp.com/",
          name:"React-Clicky Game"
          },
          {
          img:"./assets/project_img/Scrap_mongo_handlebars.jpg",
          link:"https://secure-hamlet-27486.herokuapp.com/",
          name:"All the News That's Fit to Scrape"
          },
          {
          img:"./assets/project_img/Eat-Da-Burger.jpg",
          link:"https://peaceful-badlands-67350.herokuapp.com/",
          name:"Eat-The-Burger"
          },
          {
          img:"./assets/project_img/triviagame.jpg",
          link:"https://wenhaowu27.github.io/TriviaGame/",
          name:"Trivia Game"
          },
          {
          img:"./assets/project_img/wonderkitchen.png",
          link:"https://wonderktich.herokuapp.com/login",
          name:"Wonder Kitchen"
          },
          {
          img:"./assets/project_img/wordguessinggame.jpg",
          link:"https://wenhaowu27.github.io/Word-Guess-Game/",
          name:"Word Guessing Game"
          },
          {
            img:"./assets/project_img/imageaggregator.png",
            link:"https://wenhaowu27.github.io/ImageAggregator/",
            name: "Image Aggregator"
          }
      ]

      for (let i = 0; i < project.length; i++){     
        var newflip = $("<div>");
        newflip.addClass("flip-card project_img")
        var newcard = $("<div class='flip-card-inner'>");
        var newcardFront = $("<div class='flip-card-front'>");
        var newimg = $("<img>");
        newimg.addClass("newprojimg");
        newimg.attr("src", project[i].img);
  
        newcardFront.append(newimg);
        var newcardBack = $("<div>");
        newcardBack.addClass("flip-card-back newprojimg");
        var newLink = $("<a>");
        newLink.text(">> " + project[i].name);
        newLink.attr("href",project[i].link).css("color","coral")      
        newcardBack.append(newLink);
        newcard.append(newcardFront, newcardBack);
        newflip.append(newcard);
        $("#projects").append(newflip);
      
      } 

  });
  
  