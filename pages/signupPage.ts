import { Locator, Page } from "@playwright/test";

export class SignupPage {
    readonly page: Page;
    readonly passwordInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly country: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.passwordInput = page.locator("//input[@data-qa='password']");
        this.firstNameInput = page.locator("//input[@data-qa='first_name']");
        this.lastNameInput = page.locator("//input[@data-qa='last_name']");
        this.addressInput = page.locator("//input[@data-qa='address']");
        this.country = page.locator("#country");
        this.stateInput = page.locator("//input[@data-qa='state']");
        this.cityInput = page.locator("//input[@data-qa='city']");
        this.zipInput = page.locator("//input[@data-qa='zipcode']");
        this.mobileNumberInput = page.locator("//input[@data-qa='mobile_number']");
        this.createAccountButton = page.locator("//button[@data-qa='create-account']");
    }

    async enterPassword(password: string) {
        await this.passwordInput.type(password);
    };

    async enterFirstName(firstName: string) {
        await this.firstNameInput.type(firstName);
    };

    async enterLastName(last_name: string) {
        await this.lastNameInput.type(last_name);
    };

    async enterAddress(address: string) {
        await this.addressInput.type(address);
    };

    async chooseCountry(country: string) {
        await this.country.selectOption(country);
    }

    async enterState(state: string) {
        await this.stateInput.type(state);
    };

    async enterCity(city: string) {
        await this.cityInput.type(city);
    };

    async enterZipCOde(zipCode: string) {
        await this.zipInput.type(zipCode);
    };

    async enterMobileNumber(mobileNumber: string) {
        await this.mobileNumberInput.type(mobileNumber);
    };

    async clickCreateAccount() {
        await this.createAccountButton.click();
    }
}