let timer = 5;
    let element = document.getElementById('timeElm');
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {

     if(timer ==0){
        element.style.display="none";
      }
      else {
        element.innerHTML = timer;
        timer--;
      }
    }

    let myDiv = document.getElementById("gifDiv"),

      show = function(){
        myDiv.style.display = "none";
        setTimeout(hide, 6000); 
      },

      hide = function(){
        myDiv.style.display = "block";
      };

    show();
  