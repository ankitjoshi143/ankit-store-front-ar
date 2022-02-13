/* 
          Vanilla JS Templating
          template string with markup that is pre styled
          setup the template.js file.
*/

function carRead({key, urlPath,carMake, carModel, yearMade }){
    const template = `
        <div  class="card cars-read border-dark rounded" style="width: 24rem;">
            <img class="card-img-top" src="${urlPath}" alt="car image">
            
            <ul class="list-group list-group-flush">
                
                  <li class="list-group-item"><h5>Year: ${yearMade}</h5></li> 
                  <li class="list-group-item card-header"><h5>Make: ${carMake}</h5></li>
                  <li class="list-group-item card-header"><h5>Model: ${carModel}</h5></li>                  
                  </ul>
                <div class="card-body">
                <a class="btn btn-primary" id="edit" data-key="${key}">Edit</a>
                <a class="btn btn-danger" id="delete" data-key="${key}">Delete</a>
            </div>

        </div>
    `
    const element = document.createRange().createContextualFragment(template).children[0]
    addButtonControls(element)
    return element
}


function addButtonControls(car){
    car.querySelector('#edit').addEventListener('click', onEditCar)
    car.querySelector('#delete').addEventListener('click', onRemoveCar)
}

function onEditCar(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('update.html')
}

function onRemoveCar(e){
    const key = e.target.dataset.key;
    sessionStorage.setItem('key', key)
    window.location.assign('delete.html')
}

export {carRead}