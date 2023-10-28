import { randomText } from "../utilities/random";

const userName = randomText();

export const Constants = {
    email: userName + "@inboxkitten.com",
}

export const PagesURLs = {
    loginPage: '/login', 
}

export const APIData = {
    createAccount: {"name": "Hazim", "email": userName+"@inboxkitten.com", "password": "ThePassword", "title": "Mr", "birth_date": "01-10-1992", "birth_month": "1", "birth_year": "1992", "firstname": "Hazim", "lastname": "Okanovic", "company": "Upwork", "address1":"Sahmani bb", "address2": "Vogosca 2", "country": "USA", "zipcode": "71320", "state": "BiH", "city": "Vogosca", "mobile_number": "61645461651"}, 
    validLogin: {"email": "private.pitanje@outlook.com", "password":"ThePassword"}, 
    invalidLogin: {"email": "private@outlook.com", "password":"ThePassword"}, 
    searchBlue: {"search_product": "blue"}, 
    searchYellow: {"search_product": "yellow"}
}

