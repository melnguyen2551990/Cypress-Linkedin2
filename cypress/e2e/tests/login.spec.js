import LoginPage from "../pages/LoginPage";
import SecurePage from "../pages/SecurePage";


const loginPage = new LoginPage();
const securePage = new SecurePage();

describe('Login', () => {

    it('Login success fully', () => {
        loginPage.visitLogin();
        loginPage.typeUsername("nhungk110101@gmail.com");

        loginPage.typePassword("Annhien@12345");

        loginPage.clickLogin();
        securePage.getMessage().should((actual) => {
            expect(actual).to.have.string("You are required to enroll in Multi-Factor Authentication (MFA) for an extra layer of protection for your Heroku account.")
        })
    })
})