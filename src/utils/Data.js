const data =
{
    user:
    {
        name: "Suzi",
        surname: "Elebra",
        email: "hello@suzieleb.com",
        profilePhoto: "../utils/profilePhoto.jpg"
    },

    creditCard:
    [
        {
            type: "Business",
            no: "1310",
            company: "visa",
            color: "#00D44E",
            totalLimit: 600.00,
            totalSpent: 400.45,
            transactionsHistory:
            [
                {name: "Micheal Aden", info: "Sending Money", transaction: "+250.00", color: "#7A819D"},
                {name: "Apple", info: "13 Feb 2020", transaction: "-100.00", color: "#000000"},
                {name: "Melissa Dayz", info: "Sending Money", transaction: "-150.00", color: "#00EC50"},
                {name: "Adrian John", info: "Sending Money", transaction: "+200.00", color: "#000000"},

                {name: "Micheal Aden", info: "Sending Money", transaction: "+250.00", color: "#7A819D"},
                {name: "Apple", info: "13 Feb 2020", transaction: "-100.00", color: "#000000"},
                {name: "Melissa Dayz", info: "Sending Money", transaction: "-150.00", color: "#00EC50"},
                {name: "Adrian John", info: "Sending Money", transaction: "+200.00", color: "#000000"},
            ]
        },

        {
            type: "Premium",
            no: "1412",
            company: "visa",
            color: "#4E00FF",
            totalLimit: 300.00,
            totalSpent: 150.02,
            transactionsHistory:
            [
                {name: "Aden Joe", info: "Sending Money", transaction: "+150.00", color: "#3B3ED2"},
                {name: "Spotfy", info: "14 Feb 2020", transaction: "-15.99", color: "#00EC50"},
                {name: "Melissa Dayz", info: "Sending Money", transaction: "-150.00", color: "#00EC50"},
                {name: "Adrian John", info: "Sending Money", transaction: "+200.00", color: "#000000"},

                {name: "Aden Joe", info: "Sending Money", transaction: "+150.00", color: "#3B3ED2"},
                {name: "Spotfy", info: "14 Feb 2020", transaction: "-15.99", color: "#00EC50"},
                {name: "Melissa Dayz", info: "Sending Money", transaction: "-150.00", color: "#00EC50"},
                {name: "Adrian John", info: "Sending Money", transaction: "+200.00", color: "#000000"},
            ]
        },

        {
            type: "Platinum",
            no: "1211",
            company: "mastercard",
            color: "#17134B",
            totalLimit: 100.00,
            totalSpent: 72.27,
            transactionsHistory:
            [
                {name: "Uber", info: "14 Feb 2020", transaction: "-20.99", color: "#000000"},
                {name: "Aden Joe", info: "Sending Money", transaction: "+150.00", color: "#3B3ED2"},
                {name: "Spotfy", info: "14 Feb 2020", transaction: "-15.99", color: "#00EC50"},
                {name: "Elena Garbiel", info: "Sending Money", transaction: "+200.00", color: "#7A819D"},

                {name: "Uber", info: "14 Feb 2020", transaction: "-20.99", color: "#000000"},
                {name: "Aden Joe", info: "Sending Money", transaction: "+150.00", color: "#3B3ED2"},
                {name: "Spotfy", info: "14 Feb 2020", transaction: "-15.99", color: "#00EC50"},
                {name: "Elena Garbiel", info: "Sending Money", transaction: "+200.00", color: "#7A819D"},
            ]
        },

    ]
}

export default { data };
