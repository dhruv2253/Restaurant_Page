


function menuload() {
    const div = document.createElement('div');
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

    div.appendChild(img);
    div.appendChild(header);
    div.appendChild(para);
    return div;

}

function createMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(menuload());
}
export default createMenu;