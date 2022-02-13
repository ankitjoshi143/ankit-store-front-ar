import {ref as dataRef, get, set, update} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig';
import {vacationRental} from './templates/vacationRental'


async function pageInit(){
    const rentalRef = dataRef(db, 'rentals/');
    const rentalSnapShot = await get(rentalRef)
    const data = rentalSnapShot.val();
    // ES Modules For The Render Function
    // API Data Data Structure
    // {{}, {}, {}, {}}
    // Arrays of Objects...
    // Object.keys(obj)   Object.enteries(obj) Object.values(obj)
    // object['prop']
     Object.values(data).map(rental=>{
          const card = vacationRental(rental)
          document.body.append(card)
          
     })
}

pageInit()

