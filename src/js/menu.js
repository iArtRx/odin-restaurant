import { createHeading, createPara } from "./helpers";

const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const pageTitle = createHeading("Menu page");
    menu.appendChild(pageTitle);

    const pageContent = createPara("This is the Menu page")
    menu.appendChild(pageContent);

    return menu;
}

const generateMenu = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(createMenu());
}

export default generateMenu;