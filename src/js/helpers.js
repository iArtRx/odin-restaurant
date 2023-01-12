// Helper functions to fill content of each page.

const createHeading = (text) => {
    const heading = document.createElement("h2");
    heading.textContent = text;
    return heading;
}

const createPara = (text) => {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

export { createHeading, createPara };