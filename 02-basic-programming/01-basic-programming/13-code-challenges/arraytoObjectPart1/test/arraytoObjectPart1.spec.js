describe("UnitTests", function() {
    it("test1", function() {
        // Failure message:
        // deberia regresar { King : 'Freddie' }, para ['King', 'Kemal', 'Freddie']
        
        expect(transformFirstAndLast(['King', 'Kemal', 'Freddie'])).toEqual({ King : 'Freddie' });
    });

    it("test2", function() {
        // Failure message:
        // deberia regresar { Queen : 'Beyonce' }, para ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
        
        expect(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])).toEqual({ Queen : 'Beyonce' });
    });
});
