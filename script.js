let features = "menubar=no, scrollbars=yes, width=800, height=600, statuts=no, toolbar=no";
let buttonClose = document.getElementById('close');
let title = document.getElementById('title');
let p = document.getElementById('paragraph');
let modal = document.getElementById("modal");
let buttonOpen = document.getElementById('open');
let myWindow;
let myModalWindow = document.getElementById('modal-window')

//define title of modal window
function modalHead () {
    title.innerHTML = "Bonjour, bienvenue dans votre fenêtre modal de recherche";
}

//define texte and buttons in body of modal window
function modalBody () {
    p.innerHTML = "Veuillez entrer votre recherche dans le champ ci-dessous. Si vous ne trouvez pas votre bonheur," +
        "cliquez sur le bouton nommé plus de recherche.";
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    p.appendChild(input);
    input.style.marginTop = "1rem"

//button of modal window
    buttonOpen.addEventListener('click', function (){
        myWindow = window.open("https://google.fr", '', features)

        buttonClose.addEventListener('click', () =>{
            myWindow.close();
            //close all actions of the modal window
            modal.style.display = "none";
        });
    });
}

//define style of back when the modal window is present
function modalBack () {
    modal.style.display  ="block";
    modal.style.backgroundColor = "rgba(0,0,0,0.55)";
    modal.style.width = "100%";
    modal.style.height = "100vh";
}

//style of modal window

myModalWindow.style.backgroundColor = "white";
myModalWindow.style.width = "50%";
myModalWindow.style.height = "50vh";

modalHead()
modalBody()
modalBack();