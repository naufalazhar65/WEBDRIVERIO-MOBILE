describe('UNIT TEST', () => {
    it('TEST_01', async () => {
        const el1 = await driver.$('~tab bar option menu');
        await el1.click();
        await sleep(1000); // Sleep for 1 second
    });

    it('TEST_02', async () => {
        const el2 = await driver.$('~menu item log in');
        await el2.click();
        await sleep(3000); // Sleep for 1 second

    });

    it('TEST_03', async () => {
        const el3 = await driver.$('~Username input field');
        await el3.setValue('bob@example.com');
        await sleep(3000); // Sleep for 1 second
    });

    it('TEST_04', async () => {
        const el5 = await driver.$('~Password input field');
        await el5.setValue('10203040');
        await sleep(3000); // Sleep for 1 second
    });

    it('TEST_05', async () => {
        const el6 = await driver.$('~Return');
        await el6.click();
        await sleep(3000); // Sleep for 1 second
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
