describe('Main test file', () => {
    beforeEach(() => {
        console.log('Before each test...');
    });

    afterEach(() => {
       console.log('After each test...');
    });

    it('Fake test.', done => {
        const k:number = 10;
        expect(k).toBe(10);
        done();
    });
});