// DEBUT fonction principale ---------------------------------------------------------------------------------------

function main() {

    // detecte si un des boutons de la nav lateral est cliqué
    itemNavLateral.forEach((element) => 
    {
         element.addEventListener('click', function(e) {
 
             switch (e.target.getAttribute('id')) {
                case 'btn-taches':
                    deleteWindowActive()
                    windowTaches()
                    break;
                case 'btn-day':
                    deleteWindowActive()
                    break;
                 default:
                     console.log('autres boutons')
             };
 
             e.stopPropagation();
         });
     });
     
}

main()

// FIN fonction principale ---------------------------------------------------------------------------------------

// tempo

// script vers main
window.api.nomLiaison('world');

const essai = async () => {
   return await window.api.mainToRenderer()
} 
console.log(essai())
  










