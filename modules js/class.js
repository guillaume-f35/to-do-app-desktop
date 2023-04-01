// DEBUT classes task ----------------------------------------------------------------------------------

class Task {

    constructor(container, tab) {
        this.container = container;
        this.tab = tab;
        this.idInstance = 0;
        this.textContent = '';
    }

    // methode qui permet de créer une nouvelle tache
    task(textTask) {

        // id de la nouvelle tache 
        this.idInstance = this.tab.length-1;
        this.textContent = textTask;

        // création de la div qui contient 'task', 'check' et garbage
        let divNewCheck = document.createElement('div');
        divNewCheck.className = ('div-main-task');
        divNewCheck.setAttribute('id', this.idInstance)
        this.container.append(divNewCheck);

        // création des new tasks
        let newTask = document.createElement('div');
        newTask.className = 'div-text-task';
        newTask.setAttribute('alt', 'new task');
        newTask.innerText = this.textContent;
        divNewCheck.prepend(newTask);

        // création du bouton check 
        let check = document.createElement('img');
        check.className = 'new-img-check-menu-task';
        check.setAttribute('src', 'fichiers/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg');
        check.setAttribute('alt', 'logo check vide');
        divNewCheck.append(check);

        // création du bouton corbeille
        let garbage = document.createElement('img');
        garbage.className = 'new-img-garbage-menu-task red';
        garbage.setAttribute('src', 'fichiers/icons/delete_FILL0_wght400_GRAD0_opsz48.svg');
        garbage.setAttribute('alt', 'logo garbage');
        divNewCheck.append(garbage);  
    
    }
    
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
