const nomenunavbar = (function () {
  var div__main = document.getElementById("main");
  div__main.classList.add("no__menuNavbar");
  
  return {
    init: function () {

    },
  };
})();

new CustomComponent("nomenunavbar", nomenunavbar.init);
