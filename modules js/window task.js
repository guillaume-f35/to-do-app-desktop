
// DEBUT fonction task ----------------------------------------------------------------------------------

function windowTaches() {
    
    const divInputTask = document.querySelector('.div-input-add-task-menu-task')
    let tabTask = []; // declare le tableau des nouvelles taches
    
    // permet de savoir si il y a déjà une div"nouvelle tache" de créer lors de l'ouverture de 'Taches'
    if (divInputTask === null) {

        const inputAddTask = new InputTask(article) // créer l'input pour créer les nouvelles taches
        inputAddTask.inputAddTask();
        
    };

    
    // ajout d'une nouvelle tache grace au clic sur le bouton add nouvelle tache 
    const btnAddTask = document.querySelector('.btn-add-task-menu-task')

    btnAddTask.addEventListener('click', function(e) {
        addNewTask(tabTask)
    });

    // ajout d'une nouvelle tache grace au bouton 'enter'
    document.onkeydown = function (e) {
        if (e.code === 'Enter') {
            addNewTask(tabTask)
        };
    };

    //appel de la fonction gestion des boutons check et garbage
    btnsTask(tabTask);
    
};

// DEBUT fonction task ----------------------------------------------------------------------------------
