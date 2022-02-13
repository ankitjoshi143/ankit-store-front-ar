
      var navCancel = document.getElementById("nav-cancel");
      var navBurger = document.getElementById("nav-burger");
      var nav = document.getElementById("nav");
      
      
      navBurger.addEventListener("click", function(){
        navBurger.classList.toggle("is-active");
        navCancel.classList.toggle("is-active");
        nav.classList.toggle("is-active");
      });
      navCancel.addEventListener("click", function(){
        navBurger.classList.toggle("is-active");
        navCancel.classList.toggle("is-active");
        nav.classList.toggle("is-active");
      });
    