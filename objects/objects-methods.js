let resturant = {
    name: 'ABC',
    guestCapacity: 75,
    guestCount: 0, 
    checkAvailabilty: function (partySize) {
        return partySize <= this.guestCapacity - this.guestCount
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

resturant.seatParty(72)
console.log(resturant.checkAvailabilty(4))
resturant.removeParty(5)
console.log(resturant.checkAvailabilty(4))
