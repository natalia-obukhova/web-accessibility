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

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

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


document.querySelector('#nav-bar-faculties') // Select the menu element
    .addEventListener('click', function(event) { // Add event listener

    var expanded = this.getAttribute("aria-expanded");
    var new_val;
    if (expanded == 'true') {
      new_val = "false";
    }
    else {
      new_val = "true";
    }
    this.setAttribute('aria-expanded', new_val);
    console.log(this);
    console.log(this.parentNode.childNodes[3].childNodes[1].childNodes[1]);
    this.parentNode.childNodes[3].childNodes[1].childNodes[1].focus();
    this.addClass("dropup");
    event.preventDefault(); // Prevent default event handling
}, false);

document.querySelector('#nav-bar-faculties') // Select the menu element
    .addEventListener('blur', function(event) { // Add event listener
    this.setAttribute('aria-expanded', "false");
    console.log(this);
    console.log(this.parentNode.childNodes[3].childNodes[1].childNodes[1]);
    this.parentNode.childNodes[3].childNodes[1].childNodes[1].focus();
    event.preventDefault(); // Prevent default event handling
}, false);

document.querySelector('#nav-bar-education') // Select the menu element
    .addEventListener('click, space, hover', function(event) { // Add event listener

    var expanded = this.getAttribute("aria-expanded");
    var new_val;
    if (expanded == 'true') {
      new_val = "false";
    }
    else {
      new_val = "true";
    }
    this.setAttribute('aria-expanded', new_val);
    event.preventDefault(); // Prevent default event handling
}, false);

document.querySelector('#nav-bar-industry') // Select the menu element
    .addEventListener('click, space, hover', function(event) { // Add event listener

    var expanded = this.getAttribute("aria-expanded");
    var new_val;
    if (expanded == 'true') {
      new_val = "false";
    }
    else {
      new_val = "true";
    }
    this.setAttribute('aria-expanded', new_val);
    event.preventDefault(); // Prevent default event handling
}, false);

$("#nav-bar-faculties").keypress(function (e) {
  if (e.key === ' ' || e.key === 'Spacebar') {
    // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
    e.preventDefault();
    var expanded = this.getAttribute("aria-expanded");
    var new_val;
    if (expanded == 'true') {
      new_val = "false";
    }
    else {
      new_val = "true";
    }
    this.setAttribute('aria-expanded', new_val);
    console.log(this);
    this.parentNode.childNodes[3].childNodes[1].childNodes[1].focus();
    this.parentNode.childNodes[3].childNodes[1].childNodes[1].addClass("active");
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
  }
});
