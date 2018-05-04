var app = {
  salutationHandler: function() {},
  asideController: function() {
    var $html = document.getElementsByTagName("html")[0];
    var $aside = document.getElementsByClassName("aside__left")[0];
    var $body = document.getElementsByTagName("body")[0];
    var $toggler = document.getElementsByClassName("navbar-toggler")[0];
    var $initialised = false;

    function widthWatcher() {
      var msc = 0;

      if (!$initialised) {
        // Cloned aside
        var $asideClone = $aside.cloneNode(true);

        //create a new aside
        var $rightAside = document.createElement("ASIDE");
        $rightAside.className = "aside__right";

        $rightAside.innerHTML = $asideClone.innerHTML;

        // append RightSide to body
        $body.appendChild($rightAside);

        // add event listener
        $toggler.addEventListener("click", function(e) {
          var bodyClick = document.createElement("DIV");
          bodyClick.className = "body__overlay";
          if (msc === 0) {
            bodyClick.addEventListener("click", function(e) {
              $html.classList.remove("nav-open");
              bodyClick.remove();
            });
            $body.appendChild(bodyClick);
            $html.classList.add("nav-open");
            msc = 1;
          } else {
            $html.classList.remove('nav-open');
            bodyClick.remove();
            msc = 0;
          }
        });
        $initialised = true;
      }
    }

    // if windows width is less than or equal to 991px
    if (window.innerWidth <= 991) {
      widthWatcher();
    }

    window.addEventListener("resize", function() {
      if (window.innerWidth <= 991) {
        widthWatcher();
      }
    });
  }
};
