
describe('Prueba en demo.test.js', () => { 






    test("Esta prueba no debe fallar", () => {
    
        // 1. Inicializacion
    
            const message1 = 'Hola Mundo';
    
        // 2. Estimulo
    
            const message2 = message1.trim();
    
        // 3. Resultado
    
            expect( message1 ).toBe( message2 );
    
    });






})

