document.getElementById('ticketFirstClass-increase').addEventListener('click',function(){
    handleTicket('ticketFirstClass',true);
})

document.getElementById('ticketFirstClass-decrease').addEventListener('click',function(){
    handleTicket('ticketFirstClass',false);
})


document.getElementById('ticketEconomy-increase').addEventListener('click',function(){
    handleTicket('ticketEconomy',true);
})

document.getElementById('ticketEconomy-decrease').addEventListener('click',function(){
    handleTicket('ticketEconomy',false);
})


const handleTicket = (id,isIncrease) =>{
    console.log('ok');
    const firstClassTicketValue = document.getElementById(id +'-value').value;
    const ticketNumber = parseInt(firstClassTicketValue);
    let newTicketNumber = ticketNumber;
    if(isIncrease == true){
        newTicketNumber = ticketNumber + 1;
    }
    if(isIncrease == false && newTicketNumber > 0){
        newTicketNumber = ticketNumber - 1;
    }
    document.getElementById(id +'-value').value = newTicketNumber;
    ticketPrice();
}

const ticketPrice = () =>{
    const ticketFirstClassValue = getTicket('ticketFirstClass');
    const ticketEconomyClassValue = getTicket('ticketEconomy');

    const ticketSubtotal = ticketFirstClassValue*150 + ticketEconomyClassValue*100;
    document.getElementById('subtotal').innerText = '$' + ticketSubtotal;

    const taxAmount = (ticketSubtotal*.1);
    document.getElementById('tax').innerText = '$' + taxAmount;

    const totalAmount = ticketSubtotal - taxAmount;
    document.getElementById('total').innerText = '$' + totalAmount;
}

function getTicket(ticket){
    const currentValue = document.getElementById(ticket +'-value');
    const updateValue = parseInt(currentValue.value);

    return updateValue;

}