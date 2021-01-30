
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


function handleTicket(ticket,isIncrease){
    const ticketInput = document.getElementById(ticket +'-value');
    const ticketNumber = parseInt(ticketInput.value);
    let newTicketNumber = ticketNumber;
    if(isIncrease == true){
        newTicketNumber = ticketNumber + 1;
    }
    if(isIncrease == false && newTicketNumber>0){
        newTicketNumber = ticketNumber - 1;
    }
    document.getElementById(ticket + '-value').value = newTicketNumber;
    ticketPrices();
}

function ticketPrices(){
    const firstClassTicket = getInputValue('ticketFirstClass');
    const economyClass = getInputValue('ticketEconomy');
    
    const subtotalAmount = firstClassTicket*150 + economyClass*100;
    document.getElementById('subtotal').innerText ='$' + subtotalAmount;

    const taxAmount = Math.round(subtotalAmount*0.1);
    document.getElementById('tax').innerText = '$' + taxAmount;

    const totalAmount = subtotalAmount + taxAmount;
    document.getElementById('total').innerText = '$' + totalAmount;
    
}

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + '-value');
    const ticketCount = parseInt(ticketInput.value);

    return ticketCount;
}

