


function pageloader() {
    const div = document.createElement('div');
    const para = document.createElement('p');
    para.classList.add('info');

    const header = document.createElement('h1');
    header.textContent = "Welcome";
    header.classList.add('title');

    para.textContent = "Life is full of unexpected twists and turns, and navigating through it can be both challenging and rewarding. Every experience we have, whether good or bad, shapes us into the person we are today. We learn from our mistakes, celebrate our victories, and grow as individuals. But life is also fragile and fleeting, and we never know what tomorrow will bring. That's why it's important to live in the present and make the most of every moment. Cherish the people you love, pursue your passions, and create a life that brings you happiness and fulfillment.";
    // add image to the content div
    const img = document.createElement('img');
    img.src = "image7.jpg";
    img.alt = "pic";

    div.appendChild(img);
    div.appendChild(header);
    div.appendChild(para);
    return div;

}

function createHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(pageloader());
}
export default createHome;
