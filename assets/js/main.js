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
            $html.classList.remove("nav-open");
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
  },

  chartHandler: function() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  },
  introHandler: function() {
    introJs().start();
  }
};
