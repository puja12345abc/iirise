// Store
// localStorage.setItem("name",JONS.stringfy("value"))

// Retrive 
// localStorage.getItem("name");

// delete
// localStorage.removeItem("name");

function StoreData(){
    var myClass = {noofStudent: 20, totalAssignsub:100}
    localStorage.setItem("myData",JOSN.stringfy(myClass))
   alert ("Data added to LS successfully.")
   return
}

function RetriveData(){
     const dataFromLS =JONS.parse( localStorage.getItem("myData"))
     console.log(dataFromLS, "-data here")



}



