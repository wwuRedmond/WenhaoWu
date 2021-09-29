
  $( document ).ready(function() {
    
    project = [
        {
        img:"./assets/project_img/triviagame.png",
        link:"https://wenhaowu27.github.io/TriviaGame/",
        name:"Trivia Game",
        repolink: "https://github.com/wenhaowu27/TriviaGame"
        },
        {
        img: "./assets/project_img/CrystallCollectionGuessingGame.png",
        link: "https://wenhaowu27.github.io/unit-4-game/",
        name: "Crystal Collection",
        repolink: "https://github.com/wenhaowu27/unit-4-game"
        },
        {
          img: "./assets/project_img/4digits_Game.png",
          link:"https://wenhaowu27.github.io/4digit_game/",
          name: "Bulls & Cows",
          repolink: "https://github.com/wenhaowu27/4digit_game"
        },
        {
          img: "./assets/project_img/passwpordGenerator.png",
          link: "https://wenhaowu27.github.io/password_generator/",
          name: "Password Generator",
          repolink: "https://github.com/wenhaowu27/password_generator"
        },
        {
          img: "./assets/project_img/survey.jpg",
          link: "https://immense-beyond-03179.herokuapp.com/survey",
          name: "Friend Finder",
          repolink: "https://github.com/wenhaowu27/friend-finder"
        },
        {
          img: "./assets/project_img/bamazon_nodejs.jpg",
          link: "https://wenhaowu27.github.io/bamazon/",
          name: "Bamazon",
          repolink: "https://github.com/wenhaowu27/bamazon"
        },
        {
          img: "./assets/project_img/giftastic.png",
          link: "https://wenhaowu27.github.io/Giftastic/",
          name: "GiFtastic",
          repolink: "https://github.com/wenhaowu27/Giftastic"
        },
        {
          img: "./assets/project_img/liri_nodejs.jpg",
          link: "https://wenhaowu27.github.io/unit-10-liri-nodejs/",
          name: "Liri-NodeJs",
          repolink: "https://github.com/wenhaowu27/unit-10-liri-nodejs"
        },
        {
          img:"./assets/project_img/onecommunity.jpg",
          link:"https://one-community.herokuapp.com/",
          name:"One Community",
          repolink: "https://github.com/nicolerobertsb/ONECOMMUNITY"
          },
          {
          img:"./assets/project_img/reactbooksearch.jpg",
          link:"https://stark-anchorage-35537.herokuapp.com/",
          name:"React-Book Search",
          repolink: "https://github.com/wenhaowu27/react-book-search"
          },
          {
          img:"./assets/project_img/reactclickygame.jpg",
          link:"https://warm-mountain-34639.herokuapp.com/",
          name:"React-Clicky Game",
          repolink: "https://github.com/wenhaowu27/React-Clicky-Game"
          },
          {
          img:"./assets/project_img/Scrap_mongo_handlebars.jpg",
          link:"https://secure-hamlet-27486.herokuapp.com/",
          name:"All the News That's Fit to Scrape",
          repolink: "https://github.com/wenhaowu27/MongoDB"
          },
          {
          img:"./assets/project_img/Eat-Da-Burger.jpg",
          link:"https://peaceful-badlands-67350.herokuapp.com/",
          name:"Eat-The-Burger",
          repolink: "https://github.com/wenhaowu27/Eat-Da-Burger"
          },
          {
          img:"./assets/project_img/wonderkitchen.png",
          link:"https://wonderktich.herokuapp.com/login",
          name:"Wonder Kitchen",
          repolink: "https://github.com/wenhaowu27/wonderkitch/tree/master/wonder-kitch-api"
          },
          {
          img:"./assets/project_img/wordguessinggame.jpg",
          link:"https://wenhaowu27.github.io/Word-Guess-Game/",
          name:"Word Guessing Game",
          repolink: "https://github.com/wenhaowu27/Word-Guess-Game"
          },
          {
            img:"./assets/project_img/imageaggregator.png",
            link:"https://wenhaowu27.github.io/ImageAggregator/",
            name: "Image Aggregator",
            repolink: "https://github.com/wenhaowu27/ImageAggregator"
          }
      ]

      for (let i = 0; i < project.length; i++){     
        var newflip = $("<div>");
        var newcard = $("<div class='flip-card-inner'>");
        var newcardFront = $("<div class='flip-card-front'>");
        var newcardBack = $("<div class='flip-card-back newprojimg'>")
       //create image dynamically
        var newimg = $("<img>");
        newflip.addClass("flip-card project_img")
        newimg.addClass("newprojimg");
        newimg.attr("src", project[i].img);
        //attach image t0 flip side
        newcardBack.append(newimg);

        //create link dynamically
        var newLink = $("<a>").attr("href", project[i].link) ;
        var newText = $("<div>");      
        newText.text(project[i].name).css("color","white");
        var newRepoText = $("<a>");      
        newRepoText.text("GitHub Repo").css("color","white").css("text-align","center").css("margin-top","10px");
        newRepoText.attr("href", project[i].repolink)

   
        //attach link to image
        newimg.wrap(newLink)
        newcardFront.append(newText);
        newcardBack.append(newRepoText);
        newcard.append(newcardFront, newcardBack);
        newflip.append(newcard);
        $("#projects").append(newflip);
      
      } 

  });
  
  