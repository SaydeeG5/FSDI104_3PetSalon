function displayCards(){
    let card="";
    //travel the array 
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
        <table class="pet">
            <tr class="tableContent">
                <th>Pet's Name_</th>
                <td>${pet.name}</td>
            </tr>
            <tr class="tableContent">
                <th>Age_</th>
                <td>${pet.age}</td>
            </tr>
            <tr class="tableContent">
                <th>Gender_</th>
                <td>${pet.gender}</td>
            </tr>
            <tr class="tableContent">
                <th>Service_</th>
                <td>${pet.service}</td>
            </tr>
            <tr class="tableContent">
                <th>Owner's Name_</th>
                <td>${pet.ownerName}</td>
            </tr>
            <tr class="tableContent">
                <th>Contact Number_</th>
                <td>${pet.contactPhone}</td>
            </tr>
            
        </table>
            `;
    }

     console.log(card);
     //create the HTML template for the cards 
    // //append the template on tne html 
     document.getElementById("pets").innerHTML=card;
}


// //{/* <h5>${pet.name}</h5>
// <p>Age: ${pet.age}</p>
// <p>Gender: ${pet.gender}</p>
// <p>Service: ${pet.service}</p>
// <p>Owner: ${pet.ownerName}</p>
// <p>Contact Number: ${pet.contactPhone}</p>
// //</div> *///}