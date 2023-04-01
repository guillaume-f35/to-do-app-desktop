
// DEBUT fonction task ----------------------------------------------------------------------------------

function windowTaches() {
    
    //1 permet de savoir si il y a déjà une div"nouvelle tache" de créer lors de l'ouverture de 'Taches'
    const divInputTask = document.querySelector('.div-input-add-task-menu-task')

    if (divInputTask === null) {

        const inputAddTask = new InputTask(article) // créer l'input pour créer les nouvelles taches
        inputAddTask.inputAddTask();

        if (tabBackupTask.length > 1) {
            addNewTasks(tabTask, tabBackupTask) // créer les taches sauvegardés
        }  
        
    };

    
    //2 ajout d'une nouvelle tache grace au clic sur le bouton add nouvelle tache 
    const btnAddTask = document.querySelector('.btn-add-task-menu-task')

    btnAddTask.addEventListener('click', function(e) {

        addNewTask(tabTask, tabBackupTask); 

    });

    //3 ajout d'une nouvelle tache grace au bouton 'enter'
    document.onkeydown = function (e) {

        if (e.code === 'Enter') {

            addNewTask(tabTask, tabBackupTask);
            
        };
    };


    //4 supprime une tache
    article.addEventListener('click',deleteTask);

    //5 check une tache
    article.addEventListener('click',checkTask);
    
    console.log(tabTask);
    console.log(tabBackupTask);
};

// FIN fonction task ----------------------------------------------------------------------------------

