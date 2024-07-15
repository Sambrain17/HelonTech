

//  Home section starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a')

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active')
  menuList.classList.toggle('active')
});

for(var i = 0; i < menuListItems.length; i++){
  menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
  menuBtn.classList.remove('active');
  menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
  if(window.scrollY > 120){
    homeSection.classList.add('active');
  }
  else{
    homeSection.classList.remove('active');
  }
}

// home section ends

// footer section starts
function toggleCategory(categoryId) {
  const categoryList = document.getElementById(categoryId);
  if (categoryList.style.display === 'block') {
    categoryList.style.display = 'none';
  } else {
    categoryList.style.display = 'block';
  }
}
// footer section ends

// courses section starts
function toggleCategory(categoryId) {
  const categoryList = document.getElementById(categoryId);
  if (categoryList.style.display === 'block') {
    categoryList.style.display = 'none';
  } else {
    categoryList.style.display = 'block';
  }
}
// courses section ends

// get-started section starts
function showRegistrationForm() {
  const form = document.getElementById('registration-form');
  form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}
// get-started section ends

// services section starts here
function toggleCategory(categoryId) {
  const categoryList = document.getElementById(categoryId);
  if (categoryList.style.display === 'block') {
    categoryList.style.display = 'none';
  } else {
    categoryList.style.display = 'block';
  }
}

// services section ends here

// Category-section starts
document.addEventListener('DOMContentLoaded', () => {
  console.log('Document is ready!');

  const categoryLinks = document.querySelectorAll('.category-link');
  const activityLinks = document.querySelectorAll('.activity-link');

  // Smooth scrolling
  categoryLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
          setActiveLink(categoryLinks, link);
      });
  });

  activityLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Set active link
  function setActiveLink(links, activeLink) {
      links.forEach(link => {
          link.parentElement.classList.remove('active-category');
      });
      activeLink.parentElement.classList.add('active-category');
  }
});

// Category-section ends



