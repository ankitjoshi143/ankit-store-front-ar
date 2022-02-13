/* 
          Vanilla JS Templating
          template string with markup that is pre styled
          setup the template.js file.
*/

function vacationRental({key, urlPath,carMake, carModel, yearMade }){
    const template = `
        <aside class="vacation-rentals">

            <figure>
                <img src="${urlPath}" width="160" alt="car image">
                <figcaption>
                  <h2>${carMake}</h2>
                  <h2>${carModel}</h2>
                  <h2>${yearMade}</h2>
                </figcaption>
            </figure>

            <footer>
                <button id="edit" data-key="${key}">edit</button>
                <button id="delete" data-key="${key}">delete</button>
            </footer>

        </aside>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addButtonControls(element)
    return element
}


function addButtonControls(rental){
    rental.querySelector('#edit').addEventListener('click', onEditRental)
    rental.querySelector('#delete').addEventListener('click', onRemoveRental)
}

function onEditRental(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onRemoveRental(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

export {vacationRental}