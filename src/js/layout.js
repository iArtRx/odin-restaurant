// This file generates the layout of the website. It imports from other javascript files which contains the content of each tab.

import generateHome from "./home";
import generateMenu from "./menu";
import generateContact from "./contact";

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    return header;
}

const createNavbar = () => {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    // Create list and its items
    const navList = document.createElement("ul");
    navList.classList.add("nav-list");

    // An array of the nav items in the navbar.
    const navItems = [
        { name: "Home", id: "home" },
        { name: "Menu", id: "menu" },
        { name: "Contact", id: "contact"}
    ]
    
    // Key-id pair. Used to generate page depending on the id of the nav item.
    const tabPage = {
        "home" : generateHome,
        "menu" : generateMenu,
        "contact" : generateContact
    }

    // Creates list elements in the navbar and adds an onclick event listener 
    for (const navItem of navItems) {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        li.textContent = navItem.name;
        li.setAttribute("id", navItem.id);
        li.addEventListener("click", (e) => {
            setActiveTab(navList, li);
            const selectedTab = tabPage[li.id];
            selectedTab ? selectedTab() : null;
        });
        navList.appendChild(li);
    }
    navbar.appendChild(navList);   
    return navbar;
}

// Adds and remove acitive class depending if the tab is selected.
const setActiveTab = (navList, tab) => {
    Array.from(navList.children).forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");
}

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
    return main;
}

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    return footer;
}

const generatePage = () => {
    const content = document.querySelector(".content");
    const pageItems = [createHeader(), createNavbar(), createMain(), createFooter()];
    pageItems.forEach(item => content.appendChild(item));
}

const initialLoad = () => {
    generatePage();
    generateHome();
}

export default initialLoad;