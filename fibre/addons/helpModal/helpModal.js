const helpModal = (function () {  
	return {
	  init: function () {   
		// Insert new btn to toolsbar
			const toolsbar = document.getElementById("toolstoolbar");
			const btnhelpModal = document.getElementById("btnhelpModal");
			toolsbar.insertAdjacentElement("beforeend", btnhelpModal);
	  },
	};
  })();
  
  new CustomComponent("helpModal", helpModal.init);