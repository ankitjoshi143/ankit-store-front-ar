import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {carRead} from './templates/carsRead'


async function pageInit(){
    const carRef = dataRef(db, 'cars/');
    const carsSnapShot = await get(carRef)
    const data = carsSnapShot.val();
    // ES Modules For The Render Function
    // API Data Data Structure
    // {{}, {}, {}, {}}
    // Arrays of Objects...
    // Object.keys(obj)   Object.enteries(obj) Object.values(obj)
    // object['prop']
     Object.values(data).map(car=>{
          const card = carRead(car)
          document.body.append(card)
          
     })
}

pageInit()

