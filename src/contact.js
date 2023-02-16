// contant page 




function contactload() {
    const div = document.createElement('div');
    const para = document.createElement('p');
    para.classList.add('info');

    const header = document.createElement('h1');
    header.textContent = "Contact";
    header.classList.add('title');

    para.textContent = "My house. Call 911.";
    // add image to the content div
    const img = document.createElement('img');
    img.src = "image7.jpg";
    img.alt = "pic";

    div.appendChild(img);
    div.appendChild(header);
    div.appendChild(para);
    return div;

}

function createContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    
    main.appendChild(contactload());
}
export default createContact;