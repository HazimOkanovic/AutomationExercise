import { randomText } from "../utilities/random";

const userName = randomText();

export const Constants = {
    email: userName + "@inboxkitten.com",
    userCreated: "User created!",
    userNotFound: "User not found!",
    userExists: "User exists!",
    blueJeans: "Blue jeans",
    blue: "Blue",
    yellow: "Yellow",
    password: "ThePassword",
    validEmail: "private.pitanje@outlook.com",
    loginError: "Your email or password is incorrect!",
    logout: "Logout",
    signupName: "Hazim",
    lastname: "Okanovic",
    address: "Rosulje 2",
    country: "United States",
    state: "BiH",
    city: "Vogosca",
    zipCode: "71320",
    mobileNumber: "872368263",
    signupSuccess: "Congratulations! Your new account has been successfully created!"
}

export const PagesURLs = {
    homePage: 'https://www.automationexercise.com',
    loginPage: '/login',
    signupPage: '/signup'
}

export const APIData = {
    createAccount: { "name": "Hazim", "email": userName + "@inboxkitten.com", "password": "ThePassword", "title": "Mr", "birth_date": "01-10-1992", "birth_month": "1", "birth_year": "1992", "firstname": "Hazim", "lastname": "Okanovic", "company": "Upwork", "address1": "Sahmani bb", "address2": "Vogosca 2", "country": "USA", "zipcode": "71320", "state": "BiH", "city": "Vogosca", "mobile_number": "61645461651" },
    validLogin: { "email": "private.pitanje@outlook.com", "password": "ThePassword" },
    invalidLogin: { "email": "private@outlook.com", "password": "ThePassword" },
    searchBlue: { "search_product": "blue" },
    searchYellow: { "search_product": "yellow" }
}

