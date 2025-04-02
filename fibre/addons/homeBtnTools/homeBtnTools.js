const init = () => {
    // Delete init btn 
    const element = document.getElementById("iconhelp");
    element.remove();

    //
    const toolsbar = document.getElementById("toolstoolbar");
	const homeBtnTools = document.getElementById("homeBtnTools");
	toolsbar.insertAdjacentElement("beforeend", homeBtnTools);
}

new CustomComponent("homeBtnTools", init);
