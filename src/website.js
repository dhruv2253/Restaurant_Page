import createHome from "./pageloader";
import createContact from "./contact";
import createMenu from "./menu";

function createNavButtons() {
  
    const container = document.createElement('div');
    //home button
    const homeButton = document.createElement('button');
    homeButton.textContent= 'Home';
    homeButton.classList.add('navbut');

    //contact button
    const contactButton = document.createElement('button');
    contactButton.classList.add('navbut');
    contactButton.textContent= 'Contact';
    // menu button
    const menuButton = document.createElement('button');
    menuButton.classList.add('navbut');
    menuButton.textContent = 'Menu';
    
    homeButton.addEventListener("click", (e) => {
        if (homeButton.classList.contains("active")) return;
        setActive(homeButton);
        createHome();
      });
      
      contactButton.addEventListener("click", (e) => {
        if (contactButton.classList.contains("active")) return;
        setActive(contactButton);
        createContact();
      });
      
      menuButton.addEventListener("click", (e) => {
        if (menuButton.classList.contains("active")) return;
          setActive(menuButton);
          createMenu();
      });

    container.appendChild(homeButton);
    container.appendChild(menuButton);
    container.appendChild(contactButton);
    return container;

}

function setActive(buttonP) {
    const buttons = document.querySelectorAll(".navbut");
    buttons.forEach((button) => {
        if (button !== buttonP) {
           
            button.classList.remove("active");
        }

        
    })
    buttonP.classList.add("active");
}
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }
  
function initialize() {
    const content = document.getElementById("content");
    content.appendChild(createNavButtons());
    
    content.appendChild(createMain());
    setActive(document.querySelector(".navbut"));
    createHome();
}

export default initialize;