import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {

    test('Debe evaluar los valores de usContext', () => {

        const nombre = 'Hiki';
        const edad = 17;

        const { nombreClave, anios } = usContext( nombre, edad );
        
        expect( typeof nombreClave ).toBe( 'string' );
        expect( typeof anios ).toBe( 'number' );

    });

});