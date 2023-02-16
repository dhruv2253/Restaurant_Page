
const content = document.querySelector('#content');

function menuload() {
    const para = document.createElement('p');
    para.classList.add('info');

    const header = document.createElement('h1');
    header.textContent = "Menu";
    header.classList.add('title');

    para.textContent = "Pizza. \n Other things"
    // add image to the content div
    const img = document.createElement('img');
    img.src = "image7.jpg";
    img.alt = "pic";

    content.appendChild(img);
    content.appendChild(header);
    content.appendChild(para);
    return content;

}

export default menuload;