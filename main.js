// On ajoute un écouteur d'évènement sur le bouton pour appeler une fonction ajout
const addbtn = document.querySelector('#btn');
addbtn.addEventListener('click', addTask); // Add a task on click

// On crée la fonction d'ajout
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');

    
// *************************************************************************************

// On ajoute un écouteur d'évènement sur le bouton pour appeler une fonction suppression
const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() // Delete default task on click
{
    deleteTask(taskCard); // Target the right task
    console.log(compteur());
});

// On crée la fonction de suppression
function deleteTask(task)
{
    task.remove(); // Remove the task
}

// On ajoute l'écouteur d'évènement sur l'élèment cloné dans la fonction ajout, afin de faire fonctionnier le bouton suppression sur les nouvelles cards
function addTask()
{
    const newTask = taskCard.cloneNode(true) // Clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task" // Set new task text to "New Task"
    newDelBtn.addEventListener('click', function() // Add delete event listener to new task
    {
        deleteTask(newTask); // Target the new task
        console.log(compteur());
    });

    tasksContainer.appendChild(newTask) // Append new task to the tasks container
    console.log(compteur());
}

// *******************************************************************************************

// Compter le nombre de cards
    // Création de la fonction 
    function compteur()
    {
        // Cibler l'élèment html
        let Cartes =  document.getElementsByClassName('todoCard');
        // Compter le nombre d'élèments grâce à la propriété "length"
        let compteurCartes = Cartes.length;
        // Cibler l'élèment pour afficher le résultat
        let resultatCompteur = document.getElementById('resultatCompteur')
        // Mettre à jour le contenu de la class Resultat
        resultatCompteur.textContent = compteurCartes;
    }

    console.log(compteur());