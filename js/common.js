/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }

    //console.log("in openMenu")
    expand_collapse(currentDropDownButton)
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}


$(document).on('click', '#nav-bar-content .dropdown-toggle', openMenu)
$(document).on('click', '.navbar-toggler', toggleNavigation)
/*document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);*/

function increase(elem) {
  let txt = document.getElementsByTagName("html")[0];
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 5) + 'px';
}

function decrease(elem) {
  let txt = document.getElementsByTagName("html")[0];
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize - 5) + 'px';
}


function expand_collapse(el) {
  //console.log("in expand_collapse")
  event.preventDefault();
  var expanded = el.getAttribute('aria-expanded');
  var new_val;
  if (expanded == 'true') {
    new_val = "false";
  }
  else {
    new_val = "true";
  }
  el.setAttribute('aria-expanded', new_val);
}

//Handle spacebar keyboard interaction
$(document).keypress(function(e) {
    if (e.which == 32) { //Space detected

      
        var target = $(event.target);
        //console.log(target)
        
        if(target.is( "a") ) {// if space clicked on a link

            //console.log("Space clicked on menu item")
            
            if(target.is(".dropdown-toggle")){//open menu if it is a dropdown menu
               openMenu(event)
            }
            else { //otherwise open link
                 //console.log("Not openable menu");
                 //console.log(target.attr('href'));
                 location.href = target.attr('href');
            }

        }
    }
});

// close dropdown menu when out of focus
$(document).on("click", function(event){
        console.log("In close meu")
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });

