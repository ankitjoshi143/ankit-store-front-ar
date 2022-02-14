import { ref as databaseRef, set, get, remove } from 'firebase/database'
import { db, storage } from "./libs/firebase/firebaseConfig";

var deleteButton = document.getElementById("delete-confirm-button");
var cancelButton = document.getElementById("delete-cancel-button");

cancelButton.addEventListener('click', cancelButton =>{
  function cancelButton(){
    window.location.assign('index.html')
  }
  cancelButton()
})

deleteButton.addEventListener('click', pageInit => {
  function pageInit(){
  const key = sessionStorage.getItem('key');
  const dataRef = databaseRef(db, `cars/${key}`)
  remove(dataRef).then(()=>

    {

      window.location.assign('index.html')

    })
  }
  pageInit()
})

