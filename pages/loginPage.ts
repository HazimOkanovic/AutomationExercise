import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly signUpName: Locator;
    readonly signUpEmail: Locator;
    readonly signUpButton: Locator;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.signUpName = page.locator("//input[@data-qa='signup-name']");
        this.signUpEmail = page.locator("//input[@data-qa='signup-email']");
        this.signUpButton = page.locator("//button[@data-qa='signup-button']");
        this.loginEmail = page.locator("//input[@data-qa='login-email']");
        this.loginPassword = page.locator("//input[@data-qa='login-password']");
        this.loginButton = page.locator("//button[@data-qa='login-button']");
        this.loginErrorMessage = page.locator('p', {hasText: 'incorrect'});
    }

    async enterSignUpName(name: string){
        await this.signUpName.type(name);
    }

    async enterSignUpEmail(email: string){
        await this.signUpEmail.type(email);
    }

    async enterLoginEmail(email: string){
        await this.loginEmail.type(email);
    }

    async enterLoginPassword(password: string){
        await this.loginPassword.type(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async clickSignUpButton(){
        await this.signUpButton.click();
    }
}