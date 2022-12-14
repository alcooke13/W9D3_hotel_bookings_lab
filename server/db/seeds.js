use hotel;

db.dropDatabase();

db.bookings.insertMany([
    {name: "Jeff",
    email: "jeff@email.com",
    checkin_status: "checked-in"
},
{name: "Jane",
    email: "jane@email.com",
    checkin_status: "checked-out"
},
{name: "Jack",
    email: "jack@email.com",
    checkin_status: "checked-in"
}
]);

