import { createHeading, createPara } from "./helpers";

const createHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");

    const pageTitle = createHeading("Homepage");
    home.appendChild(pageTitle);

    const pageContent = createPara("This is the Homepage")
    home.appendChild(pageContent);

    return home;
}

const generateHome = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(createHome());
}

export default generateHome;