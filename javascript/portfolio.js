const projects = 
[   {   title:    "OTTO",
        subtitle: "A Full-Stack Node.js Application",
        repo:     "https://github.com/Viridian1/CarApp", 
        about:    "OTTO is our 2nd group project.  Technologies used on the front end include HTML, CSS, JavaScript and jQuery.  The back end uses Node.js, Express.js and MySQL.  It is configured with conventional M-V-C and ORM abstractions."
    },
    {   title:    "Burgers",
        subtitle: "A Full-Stack Node.js Application",
        image:    "images/burgers.png",
        www:      "https://bmccutchanjr-burger.herokuapp.com",
        repo:     "https://github.com/bmccutchanjr/burger", 
        video:    "https://drive.google.com/file/d/1onIz9hobYicptweNtew0LWa7_f_tZ4h8/view", 
        about:    "Burger is a full-stack web application built with Node.js, Express and Express-Handlebars.    It implements a Model-View-Controller (MVC) paradigm that creates multiple layers of abstraction.  It also uses Object-Relational Modeling (ORM), another abstraction, to interact with a MySQL database."
    },
    {   title:    "Friend Finder",
        subtitle: "A Full-Stack Node.js Application",
        image:    "images/FriendFinder.png",
        www:      "https://bmccutchanjr-friend-finder.herokuapp.com",
        repo:     "https://github.com/bmccutchanjr/Friend-Finder", 
        video:    "https://drive.google.com/file/d/1e462xHRM0Mx5mfe6BUpX1Aj4CQUiKmm5/view", 
        about:    "Friend Finder is a full-stack web application built with Node.js and Express.  It models a 'dating' web site where visitors fill out a survey and are matched up with the user whose responses most closely match."
    },
    {   title:    "bAmazon",
        subtitle: "A Node.js Project",
        image:    "images/bAmazon.png",
        repo:     "https://github.com/bmccutchanjr/bAmazon", 
        video:    "https://drive.google.com/file/d/1e462xHRM0Mx5mfe6BUpX1Aj4CQUiKmm5/view", 
        about:    "bAmazon is a simple MySQL dastabase project which is implemented in three JavaScript files.  It models a simple on-line sales site with functionality for both the customer and management."
    },
    {   title:    "Word Guess",
        subtitle: "A Node.js Project",
        image:    "images/node-guess.png",
        repo:     "https://github.com/bmccutchanjr/Node-Word-Game", 
        video:    "https://drive.google.com/file/d/1e462xHRM0Mx5mfe6BUpX1Aj4CQUiKmm5/view", 
        about:    "Word Guess is a version of the well-known game 'hangman' demonstrating the use of modularization.  The application is spread across four files used to instantiate several JavaScript objects."
    },
    {   title:    "LIRI",
        subtitle: "A Node.js Project",
        image:    "images/liri.png",
        repo:     "https://github.com/bmccutchanjr/LIRI", 
        video:    "https://drive.google.com/file/d/1wN4MEgCLi1f_xqJMWUBEDKKm3Bo6zESZ/view",
        about:    "LIRI is a command line application written in JavaScript and using Node.js. It is a simple application that takes several command line parameters and searches one of three API's for upcoming concert events (using Bands In Town), a movie synopsis (using OMDB) or data on a song (using Spotify).  The data retreived is output to the console screen and simultaneously to a log file (called LIRI.log)."
    },
    {   title:    "Train Scheduler",
        subtitle: "A Firebase Project",
        image:    "images/trains.png",
        www:      "https://bmccutchanjr.github.io/Train-Schedule/",
        repo:     "https://github.com/bmccutchanjr/Train-Schedule", 
        about:    "Train Scheduler is a demonstration of database access with Firebase."
    },
    {   title:    "Fantastic .GIF",
        subtitle: "An API Application with jQuery",
        image:    "images/fantastic.png",
        www:      "https://bmccutchanjr.github.io/Fantastic-GIF/",
        repo:     "https://github.com/bmccutchanjr/Fantastic-GIF", 
        about:    "Fantastic .GIF is a demonstration of asynchronous operations in JavaScript utilizing the 'GIPHY' and 'Bands In Town' APIs.  jQuery is used to manipulate the DOM as well as to request data from the respective endpoints."
    },
    {   title:    "Totally Trivial Trivia",
        subtitle: "JavaScript timeouts and intervals with jQuery",
        image:    "images/trivia.png",
        www:      "https://bmccutchanjr.github.io/Trivia-Game/",
        repo:     "https://github.com/bmccutchanjr/Trivia-Game", 
        about:    "This is a trivia game, using jQuery."
    },
    {   title:    "Star Wars RPG",
        subtitle: "DOM Manipulation with jQuery",
        image:    "images/StarWarsRPG.png",
        www:      "https://bmccutchanjr.github.io/Word-Guess-Game/",
        repo:     "https://github.com/bmccutchanjr/Word-Guess-Game", 
        about:    "This is a simple RPG using jQuery to manipulate the DOM."
    },
    {   title:    "Word Guess Game",
        subtitle: "DOM manipulation with jQuery",
        image:    "images/wordguess.png",
        www:      "https://bmccutchanjr.github.io/Word-Guess-Game/",
        repo:     "https://github.com/bmccutchanjr/Word-Guess-Game", 
        about:    "This is a web-based version of the well known game 'hangman'.  The page uses jQuery to manipulate the DOM."
    }
];

var featured = 0;                       // The index of the "featured" slide

function initPos (centerSlide, currentSlide)
{   // This function returns the pixel location to to center the 'featured' slide in the center of
    // the viewport.  Other slides are positioned relative to this position.
    //
    // To center the slide, find the center of the view port and subtract 150 (the slides are 300px wide).
    //
    // The function takes two arguments...
    //   *  The index of the 'featured' slide (the slide in the center of the viewport)
    //   *  The index of the slide currently being positioned.  The physical off set can be determined
    //      by the difference in the two indices.

    var pageWidth = document.body.offsetWidth;
    var center = (pageWidth / 2) - 156;

    return center - ((currentSlide - centerSlide) * 400);
}

function attachButtons ()
{   // Place the navidation and link buttons on the featured slide

    // var left = initPos(0, 0);

    // var leftArrow = $(".project-button[value='next']");
    // leftArrow
    // .css ("left", (left - 15))
    // .css ("top", 265)
    // .css ("position", "absolute");

    // var rightArrow = $(".project-button[value='prev']");
    // rightArrow
    // .css ("left", (left + 290))
    // .css ("top", 265)
    // .css ("position", "absolute");
}

function makeSlides ()
{   // Add the "slides" to the slide show.  Slides are just a <div> with a border that holds the
    // image associated with each of the projects.  There are no links or other text in the slides.
    //
    // Since I can't make the more complicated rotisserie that I really want, I might as well refer
    // to it as a slide show (it pretty much is now).

    var pLength = projects.length;
    var slideShow = $("#slide-window");

    for (var i=0; i<pLength; i++)
    {   //
        var image = $("<img>");
        image
        .addClass ("slide-image")
        .attr ("src", projects[i].image)
        .css("left", - (i * 456));

        // var slide = $("<div>");
        // slide
        // .addClass ("project-slide")
        // .append (image)
        // .attr ("value", i)
        // // .css("left", 75 - (i * 500));
        // // .css("left", 75 - (i * 456));
        // .css("left", - (i * 456));

        slideShow
        // .prepend (slide);
        .prepend (image);
    }
}

function positionSlides ()
{   // This function is used to center the 'featured' slide in the center of the viewport and
    // position other slides relative to that.
    //
    // The function is called by a window event listener to re-center elements after a page resize
    // event as well as when the page is first loaded -- again to make sure the 'featured' slide
    // is properly centered.

    var pageWidth = document.body.offsetWidth;
    var center = pageWidth / 2;
    var firstLeft = center - 150;



}

function buildFeature ()
{   // Update the content of #feature-div

    // The slide show is animating -- or in other words, the featured slide is in the process of being
    // changed.  The content of #feature-div now refers to the slide that used to be featured, not the
    // slide currently featured.

    // first start by hiding #feature-div and #feature-nav

    $(".feature").css("display", "none");

    // configure the buttons

    if (projects[featured].www)
        $("#link-button").css("display", "inline");
    else
        $("#link-button").css("display", "none");

    if (projects[featured].repo)
        $("#repo-button").css("display", "inline");
    else
        $("#repo-button").css("display", "none");

    if (projects[featured].video)
        $("#video-button").css("display", "inline");
    else
        $("#video-button").css("display", "none");

    // set the text in #feature-head

    $("#feature-header").text(projects[featured].title)

    // set the contenst of #feature-text

    var p = $("<p>");
    p
    .css("text-align", "center")
    .text(projects[featured].subtitle)

    $("#feature-text")
    .empty()
    .html(projects[featured].about)
    .prepend(p);

    $(".feature")
    .css("opacity", 0.0)
    .css("display", "block")
    .animate({ "opacity": 1.0 }, 1000);
}

function shiftLeft ()
{   // There are two buttons on the page that perform this function.  One overlays the featured slide
    // in #slide-show and the other in in "feature-nav."

    if (featured != 0)
    {   // If featured === 0, the featured slide is the first element in projects[] and there is no
        // other slide to its left.  Do nothing.  Otherwise, shift ALL of the slides to the left

        // And also...
        //
        // The slides have shifted.  There is now a slide to the right of the featured
        // slide so we need to be able to navigate back to it.  Make the "prev"
        // button visible.

        $("#prev").css("display", "inline");
        
        featured--;

        // If the new featured slide is slide 0, there are no slides to the left.  Hide
        // the "next" button
        if (featured === 0) $("#next").css("display", "none");

        // prevent the script from responding to button clicks while the slides are in
        // motion
        // $(".project-slide")
        $(".slide-image")
        // .animate({left: "-=312"}, 1000);
        // .animate({left: "-=500"}, 1000);
        .animate({left: "-=456"}, 1000);

        // prevent the script from responding to button clicks while the slides are in
        // motion
        animationRunning = true;
        setTimeout (function ()
        {   animationRunning = false;
        }, 1010)

        buildFeature ();
    }
}

function shiftRight ()
{   // There are two buttons on the page that perform this function.  One overlays the featured slide
    // in #slide-show and the other in in "feature-nav."

    if (featured != (projects.length - 1))
    {   // If featured === (projects.length - 1), the featured slide is the last element in projects[]
        // and there is no other slide to its right.  Do nothing.  Otherwise, shift ALL of the slides to
        // the right

        // And also...
        //
        // The slides are shifting and there is now a slide to the left of the featured
        // slide.  We need to be able to navigate back to it.  Make the "next"
        // button visible.

        $("#next").css("display", "inline");

        featured++;

        // If the new featured slide is slide 0, there are no slides to the left.  Hide
        // the "next" button
        if (featured === (projects.length - 1)) $("#prev").css("display", "none");

        // $(".project-slide")
        $(".slide-image")
        // .animate({left: "+=312"}, 1000);
        // .animate({left: "+=500"}, 1000);
        .animate({left: "+=456"}, 1000);

        // prevent the script from responding to button clicks while the slides are in
        // motion
        animationRunning = true;
        setTimeout (function ()
        {   animationRunning = false;
        }, 1010)

        buildFeature ();
    }
}

$("document").ready (function ()
{
    var animationRunning = false;                         // is the "slide show" animation running?
    buildFeature();

    $(".feature-button").on("click", function (event)
    {   // Generic listener for the buttons in the project-info <div>.

        event.preventDefault ();

        if (!animationRunning)
        {   // Is the animation running?
            //
            // I want to disable the #next and #prev buttons (maybe all of the buttons)
            // while the project icons are in the process of shifting.  It seems easier than trying to
            // manage repeated button clicks while the elements are movimg around the screen.

            switch (this.value)
            {   case "next":
                {   // If the featured slide is index 0, I don't want to shift left (there are no
                    // slides to the right of it)

                    // if (featured != 0)
                    // {   // shift all of the slides to the left

                    //     // And also...
                    //     //
                    //     // The slides have shifted.  There is now a slide to the right of the featured
                    //     // slide so we need to be able to navigate back to it.  Make the "prev"
                    //     // button visible.

                    //     $("#prev").css("display", "inline");
                        
                    //     featured--;

                    //     // If the new featured slide is slide 0, there are no slides to the left.  Hide
                    //     // the "next" button
                    //     if (featured === 0) $("#next").css("display", "none");

                    //     // prevent the script from responding to button clicks while the slides are in
                    //     // motion
                    //     $(".project-slide")
                    //     // .animate({left: "-=312"}, 1000);
                    //     .animate({left: "-=500"}, 1000);
            
                    //     // prevent the script from responding to button clicks while the slides are in
                    //     // motion
                    //     animationRunning = true;
                    //     setTimeout (function ()
                    //     {   animationRunning = false;
                    //     }, 1010)
                    // }
                    shiftLeft ();                    
                    break;
                }
                case "link":
                {   //
                    window.open (projects[featured].link, "_blank");
                    break;
                }
                case "repo":
                {   //
                    window.open (projects[featured].repo, "_blank");
                    break;
                }
                case "video":
                {   //
                    window.open (projects[featured].video, "_blank");
                    break;
                }
                case "prev":
                {   // If the featured slide is the last in the array, I don't want to shift right
                    // (there are no slides to the left of it)

                    // if (featured != (projects.length - 1))
                    // {   // shift all of the slides to the right

                    //     // And also...
                    //     //
                    //     // The slides are shifting and there is now a slide to the left of the featured
                    //     // slide.  We need to be able to navigate back to it.  Make the "next"
                    //     // button visible.

                    //     $("#next").css("display", "inline");

                    //     featured++;

                    //     // If the new featured slide is slide 0, there are no slides to the left.  Hide
                    //     // the "next" button
                    //     if (featured === (projects.length - 1)) $("#prev").css("display", "none");

                    //     $(".project-slide")
                    //     // .animate({left: "+=312"}, 1000);
                    //     .animate({left: "+=500"}, 1000);
            
                    //     // prevent the script from responding to button clicks while the slides are in
                    //     // motion
                    //     animationRunning = true;
                    //     setTimeout (function ()
                    //     {   animationRunning = false;
                    //     }, 1010)
                    // }
                    shiftRight ();
                    break;
                }
            }
        }
    })

    // $(window).resize (function ()
    // {   // event listener for window resize.

    //     positionSLides ();
    // })
    // $(".test")
    // .animate({left: "-=400"}, 1000);
    
    // var wait = setTimeout (function ()
    // {   // alert ("waiting");
    //     $("#red")
    //     .css("left", "900px");
    // }, 1010);
    
    // clearTimeout (wait);

    makeSlides ();
});
