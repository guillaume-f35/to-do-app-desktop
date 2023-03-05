// DEBUT classes task ----------------------------------------------------------------------------------

class Task {

    constructor(container, tab) {
        this.container = container;
        this.tab = tab;
        this.id = 0;
        this.textContent = '';
    }

    // methode qui permet de créer une nouvelle tache
    task(textTask) {

        // id de la nouvelle tache 
        this.id = this.tab.length-1;
        this.textContent = textTask;

        // création de la div qui contient 'task', 'check' et garbage
        let divNewCheck = document.createElement('div');
        divNewCheck.className = ('div-main-task');
        divNewCheck.setAttribute('id', this.id)
        this.container.append(divNewCheck);

        // création des new tasks
        let newTask = document.createElement('div');
        newTask.className = 'div-text-task';
        newTask.setAttribute('alt', 'new task');
        newTask.setAttribute('id', this.id)
        newTask.innerText = this.textContent;
        divNewCheck.prepend(newTask);

        // création du bouton check 
        let check = document.createElement('img');
        check.className = 'new-img-check-garbage-menu-task';
        check.setAttribute('src', 'fichiers/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg');
        check.setAttribute('alt', 'logo check vide');
        check.setAttribute('id', this.id)
        divNewCheck.append(check);

        // création du bouton corbeille
        let garbage = document.createElement('img');
        garbage.className = 'new-img-check-garbage-menu-task red';
        garbage.setAttribute('src', 'fichiers/icons/delete_FILL0_wght400_GRAD0_opsz48.svg');
        garbage.setAttribute('alt', 'logo garbage');
        garbage.setAttribute('id', this.id)
        divNewCheck.append(garbage);  
    
        return this.id;
    }

    
    // methode qui permet de créer l'animation des boutons check et garbage
    btnCheckGarbage(e) {

        let btn = e.target.getAttribute('alt');
            
            // check la tache
            if (btn === 'logo check vide') {
                e.target.parentNode.firstElementChild.classList.toggle('line-through') //selectionne le 1er enfant de l'élément parent ciblé
                e.target.classList.toggle('new-img-check-menu-task-active')
            } 
            
            // supprime la tache
            if (btn === 'logo garbage') {
                e.target.parentNode.remove(e.target);
            };

            // réinitialise le tableau à 0 si toutes les taches on été supprimé (a faire)

    };

    textTask() {
        return this.textContent;
    };
    
}

// FIN classes task ----------------------------------------------------------------------------------

// DEBUT classes insertion des nouvelles taches ----------------------------------------------------------------------------------

class InputTask {

    constructor(container) {
        this.container = container;
    }

    inputAddTask() {
 
         // création de la div fenetre Taches
        const divButtonAddTask = document.createElement('div');
        divButtonAddTask.setAttribute('class', 'div-input-add-task-menu-task')
        this.container.prepend(divButtonAddTask)
        
        // création de L'input "ajouter une tache"
        const addInput = document.createElement('input');
        addInput.className = 'input-new-task-menu-task';
        addInput.setAttribute('type', 'text' )
        addInput.setAttribute('alt', 'logo add check');
        addInput.setAttribute('id', 'input-task')
        addInput.setAttribute('placeholder', "Ajouter une tâche")
        divButtonAddTask.prepend(addInput);
        
        addInput.focus() // focus sur l'input à l'ouverture du menu
        
        // création du bouton 'Ajouter une tache'
        const newButtonAddTask = document.createElement('img');
        newButtonAddTask.className = 'btn-add-task-menu-task';
        newButtonAddTask.setAttribute('src', 'fichiers/icons/add_task_FILL0_wght400_GRAD0_opsz48.svg');
        divButtonAddTask.append(newButtonAddTask);
    }

};

// FIN classes insertion des nouvelles taches ----------------------------------------------------------------------------------
