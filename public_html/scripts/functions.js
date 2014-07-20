
/**
 * Class containing validations...
 * @returns {Validator}
 */
function Validator () {
    this.isValid=false;
}

/**
 * Validator Method to check if the field is not empty...
 * @param {type} stringToCheck
 * @returns {Boolean}
 */
Validator.prototype.isEmpty = function(stringToCheck) {
  return stringToCheck.trim().length===0;  
};

/**
 * Validator Method to check if the email is valid.
 * @param {type} email
 * @returns {Boolean}
 */
Validator.prototype.isValidEmail = function(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if ( reg.test(email) ) {
        return true; 
    }
    else {
        return false;
    }
};

Validator.prototype.markInputAsError = function(control) {
  $(control).css("border-color","red");
  $(control).attr("placeholder","You left me empty!");
};
/**
 * class to register and manager all event handler functions
 * @returns {EventHandlers}
 */
function EventHandlers () {
    
}

/**
 * Method to invoke the Contact form
 * @returns {undefined}
 */
EventHandlers.prototype.invokeContactForm = function() {
    //Invoke the mail function here...
    //admin@technoflairlab.com
    if ($("#mailer2").parent().css("display")==="block")
        return;
    $(".overlay").fadeIn(50,function(e) {
        $("#mailer").show();
            $(window).resize();
    });
};

EventHandlers.prototype.slideDownForm = function() {
  
  $(".illustrated_text_center").slideToggle("fast");
  $("#showForm_iConnect").text($("#showForm_iConnect").text()==="Show Query Form..."?"Hide Query Form...":"Show Query Form...");
  
};

/*EventHandlers.prototype.displayWorkInProgress = function (event) {
    
     $(".overlay").fadeIn(50,function(e) {
        $("#workInProgress").show();
            $(window).resize();
    });
    
};*/

/**
 * Method that submits query through mail
 * @returns {undefined}
 */
EventHandlers.prototype.submitQueryThroughMail = function() {
    //Start Validation
    var validator = new Validator();
    
    if (validator.isEmpty($("#queryFormName").val())) {
        validator.markInputAsError($("#queryFormName"));
        return;
    }
    if(validator.isEmpty($("#queryEmailID").val())) {
        validator.markInputAsError($("#queryEmailID"));
        return;
    }
    if(validator.isEmpty($("#referenceFrom").val())) {
        validator.markInputAsError($("#referenceFrom"));
        return;
    }
    if(validator.isEmpty($("#queryText").val())) {
        validator.markInputAsError($("#queryText"));
        return;
    }
    
    if(validator.isValidEmail($("#queryEmailID").val())===false) {
        validator.markInputAsError($("#queryEmailID"));
        $("#queryEmailID").val("Invalid Email!");
        return;
    }
    
    $(".overlay").hide();
};

/**
 * Method to close the contact form.
 * @returns {undefined}
 */
EventHandlers.prototype.closeContactForm = function() {
    $(".overlay").hide();
    $(".box-content-holder").css("display","none");
};

/**
 * Window Resize Listener.
 * @returns {undefined}
 */
EventHandlers.prototype.windowResize = function() {
    $(window).resize(function(){
    
        $('.box-content-holder').css({
            position:'absolute',
            left: ($(window).width() - $('.box-content-holder').outerWidth())/2,
            top: ($(window).height() - $('.box-content-holder').outerHeight())/2
        });

    });
};


/** 
 * Class to perform bootstrapping of the web-app
 *  
 **/

function Bootstrap() {
    this.handler = undefined;
    this.carousel = false;
    this.expandCollapse=false;
    this.menu=true;
    this.events=true;
}

/**
 * method to perform init of all things. Entry point of logic
 * @returns {undefined}
 */
Bootstrap.prototype.init = function (bs) {
    if (bs.menu)
       bs.initMenu(bs);
    if (bs.carousel)
        bs.initCarousel(bs);
    if (bs.expandCollapse)
        bs.initExpandCollapse(bs);
    if (bs.events) {
        bs.attachEventHandlers(bs);
        //run the window resize for the first time.
        bs.handler.windowResize(bs);
    }
    
    

};

/**
 * Method to init the Menu
 * @returns {undefined}
 */
Bootstrap.prototype.initMenu = function(bs) {
    //Init the menu
    $('#navigationMenu').smartmenus({
        markCurrentItem: true,
        markCurrentTree: true,
        keepHighlighted: true
    });
};

Bootstrap.prototype.attachEventHandlers = function(bs) {
    bs.handler.windowResize();
    //Add navigation menu click handlers 
    $('#navigationMenu').bind('click.smapi', function(e, item) {
            if ($(item).text()==="Contact Us!")
                bs.handler.invokeContactForm();
//            else if($(item).hasClass("wip"))
//                bs.handler.displayWorkInProgress(e);
    });
    //add close event on contact form.
//    $(".close").on("click",bs.handler.closeContactForm);
//    $("#submitQuery").on("click",{},bs.handler.submitQueryThroughMail);
    //add slide form to display ... 
    $("#showForm_iConnect").on("click",{},bs.handler.slideDownForm);
    //add invoke mail on the social inner.
//    $(".john-doe-123-ico").on("click",{},bs.handler.invokeContactForm);
};

/**
 * Method to init expand/collapse on a page, if its applicable.
 * @returns {undefined}
 */
Bootstrap.prototype.initExpandCollapse = function(bs) {
    //The Expand/Collapse Headers ...
    $(".accordion_header").bind("click", function(event) {
       $(this).next().addClass("current_accordion_item");
       $(".accordion_detail").not(".current_accordion_item").slideUp("slow");
       $(this).next().slideToggle("slow",function() {$(".accordion_detail").removeClass("current_accordion_item")}); 
    });
};

/**
 * Method to init Carousel
 * @returns {undefined}
 */
Bootstrap.prototype.initCarousel = function() {
    if ($('.flexslider').size()===0)
        return;
    $('.flexslider').flexslider({
            animation: "slide",
            controlsContainer: ".slider-holder",
            slideshowSpeed: 5000,
            directionNav: false,
            controlNav: true,
            animationDuration: 2000,
            before:function( slider ){
                    $('.img-holder').animate({'bottom' : '-30px'},300)
            },

            after:function( slider ){
                    $('.img-holder').animate({'bottom' : '0px'},300)
            }
    });
    
//    $('#navigationMenu ul').css("z-index",$(".slider-holder").css("z-index")+10);
};