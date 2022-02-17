function solve(arr, sortBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (const item of arr) {
        let [destination,price,status] = item.split('|');

        tickets.push(new Ticket(destination, Number(price), status));
    }
    if (sortBy === 'price') {
        tickets.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
        tickets.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    return tickets;
}



solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
