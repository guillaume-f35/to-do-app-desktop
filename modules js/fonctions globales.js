//fonctions globales ---------------------------------------------------------------------------------------

    // fonction suppression fenetre active 
    function deleteWindowActive() {

        while (article.firstChild) {
            article.removeChild(article.firstChild);

        };

        article.removeEventListener('click',deleteTask)

        resetTabTask()
        
    }


    // fonction qui ajoute une nouvelle tache apres l'avoir écrit dans l'input
    function addNewTask(tab, tab2) {

        // recuperation tu texte dans l'input
        let input = document.querySelector("#input-task");

        if (input.value !== '') {

            // création de la nouvelle tache
            let newInstanceClass = new Task(article, tab)
            tab.push(newInstanceClass)  
            tab[tab.length-1].task(input.value) 

            tab2[tab.length-1] = input.value;

            input.value = ''; // réinitialise l'input  

        }

     }

    // Fonction qui recrée les taches contenue dans le tableau "tabTextTask" 

    function addNewTasks(tab, tab2) {

        for (let i = 0; i < tab2.length; i++) {

            if (tab2[i] !== null) {
                let newInstanceClass = new Task(article, tab);
                tab.push(newInstanceClass); 
                tab[i].task(tab2[i]);  
            }
            
        }
    }

     //fonction qui permet de supprimer une tache
     function deleteTask(e) {
                
        if (e.target.className === 'new-img-garbage-menu-task red') {

            let id = e.target.parentNode.getAttribute('id');
            tabTask[id] = null; // indique que la tache à été supprimée mais ne change pas la taille du tableau
            tabBackupTask.splice(id, 1); // met à jours le tableau de sauvegarde
            e.target.parentNode.remove();

        }
        
    }

    
    // fonction qui permet de checker les taches
    function checkTask(e) {

        if (e.target.className === 'new-img-check-menu-task' || e.target.className === 'new-img-check-menu-task new-img-check-menu-task-active') {

            e.target.classList.toggle('new-img-check-menu-task-active');
            e.target.parentNode.firstChild.classList.toggle('line-through');

        }
        
    }

    // Fonction qui permet de réinitialiser les tableaux contenants les instances de la classe task
    function resetTabTask() {

        tabTask = []; 

    }



    // A VOIR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



         