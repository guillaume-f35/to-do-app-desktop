//fonctions globales ---------------------------------------------------------------------------------------

    // fonction suppression fenetre active 
    function deleteWindowActive() {
        while (article.firstChild) {
            article.removeChild(article.firstChild);
        };
    }


    // fonction qui ajoute une nouvelle tache apres l'avoir écrit dans l'input
    function addNewTask(tab) {

        // recuperation tu texte dans l'input
        let input = document.querySelector("#input-task");
        
        if (input.value !== '') {

            // création de la nouvelle tache
            let newInstanceClass = new Task(article, tab)
            tab.push(newInstanceClass)  
            tab[tab.length-1].task(input.value) 
            input.value = ''; // réinitialise l'input  

        }
        
     }


    //fonction qui gère les boutons check et garbage ++++changer article
     function btnsTask(tab) {

        article.addEventListener('click', function(e) {

            if (e.target.getAttribute('id') !== null) {
                let id = e.target.getAttribute('id')
                tab[id].btnCheckGarbage(e)
            }
    
            e.stopPropagation();
        })

     }
         