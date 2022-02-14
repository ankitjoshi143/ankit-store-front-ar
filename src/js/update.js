import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as databaseRef, set, get } from 'firebase/database';
import { db, storage } from "./libs/firebase/firebaseConfig";

const carForm = document.forms['carForm'];

async function pageInit() {
  const key = sessionStorage.getItem('key');
  // get data from RTD 
  const carRef = databaseRef(db, `cars/${key}`)
  // add data to the form
  const carSnapShot = await get(carRef)

  //formatter for the form 
  if (carSnapShot.exists()) {
    setFieldValues(carSnapShot.val())
  }

  carForm.addEventListener('submit', onUpdateCar)
}

function onUpdateCar(e) {
  e.preventDefault();

  updateCarData()
}

function setFieldValues({ yearCar, makeCar, modelCar, imageCar }) {
  carForm.elements['yearMade'].value = yearCar
  carForm.elements['carMake'].value = makeCar
  carForm.elements['carModel'].value = modelCar
  document.querySelector('#carUploadImage img').src = imageCar
}

async function updateCarData() {
  const carYear = carForm.elements['year'].value.trim()
  const carMake = carForm.elements['make'].value.trim()
  const carModel = carForm.elements['model'].value.trim()
  const file = carForm.elements['carImage'].files

  const key = sessionStorage.getItem('key');
  const carRef = databaseRef(db, `cars/${key}`);
  const carSnapShot = await get(carRef);

  if (file.length !== 0) {
    //format the storage for the new image
    // images/key/file.name storage path
    const imageRef = storageRef(storage, "path")
    
  }
  const key = sessionStorage.getItem('key');
  const dataRef = databaseRef(db, `rentals/${key}`)

  set(dataRef, {




  })
}

pageInit()