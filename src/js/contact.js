import { createHeading, createPara } from "./helpers";

const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const pageTitle = createHeading("Contact page");
    contact.appendChild(pageTitle);

    const pageContent = createPara("This is the Contact page")
    contact.appendChild(pageContent);

    return contact;
}

const generateContact = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(createContact());
}

export default generateContact;