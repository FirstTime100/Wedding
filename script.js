const seatingChart = {
    'Ethan': 1,
    'Joel': 2,
    'Ruth': 3,
};

function findTable() {
    const name = document.getElementById("nameInput").value;
    const tableNumber = seatingChart[name];
    
    if (tableNumber) {
        document.getElementById("tableNumber").innerText = `Your table number is ${tableNumber}.`;
    } else {
        document.getElementById("tableNumber").innerText = `Name not found. Please check with the host.`;
    }
}
