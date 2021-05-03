const fields= document.querySelectorAll("input");
console.log(fields)



const button = document.querySelector("button");
const customerName = fields[0];
const numberOfPeopleNode = fields[1];
const dateSelectedNode = fields[2]
const oneWayNode = fields[3]
const roundNode = fields[4]

console.log(customerName)
button.addEventListener("click",()=>{
    const custName = customerName.value;
    const numberOfPeople = numberOfPeopleNode.value;
    const dateSelected = dateSelectedNode.value;
    const oneWay = oneWayNode.checked;
    const round = roundNode.checked;

    if(custName!='' && numberOfPeople !='' && dateSelected !='' && ((oneWay==false && round == true) || (round == false && oneWay == true))){
            window.location = 'success.html';
    }else{
        window.location = 'failed.html';
    }
})