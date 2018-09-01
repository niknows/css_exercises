var heading = document.getElementById('main-heading');
var headingType = 
document.getElementById('heading-type');

headingType.addEventListener('keyup',function(){
  heading.innerText = headingType.value;
});
