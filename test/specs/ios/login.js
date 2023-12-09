const username = "bob@example.com";
const password = "10203040";
const invalidUsername = "naufal@example.com";
const invalidPassword = "10203";

describe('LOGIN TEST', () => {
    beforeEach(async () => {
        await driver.$('~tab bar option menu').click();
        await sleep(1000);

        await driver.$('~menu item log in').click();
        await sleep(2000);
    });

    it('should not login with invalid credentials', async () => {
        await driver.$('~Username input field').setValue(invalidUsername);
        await sleep(1000);

        await driver.$('~Password input field').setValue(invalidPassword);
        await sleep(1000);

        await driver.$('~Return').click();
        await sleep(3000);

        await driver.$("~Login button").click();

        const errorMessage = await driver.$('~Provided credentials do not match any user in this service.');
        await errorMessage.waitForExist({ timeout: 5000 });
        expect(await errorMessage.getText()).toBe('Provided credentials do not match any user in this service.');
    });

    it('should login with valid credentials', async () => {
        await driver.$('~Username input field').setValue(username);
        await sleep(2000);

        await driver.$('~Password input field').setValue(password);
        await sleep(2000);

        await driver.$('~Return').click();
        await sleep(3000);

        await driver.$("~Login button").click();
        await sleep(3000);

        // Add any additional assertions or verifications for successful login if needed
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
