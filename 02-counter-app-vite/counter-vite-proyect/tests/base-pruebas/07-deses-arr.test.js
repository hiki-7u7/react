import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('Evaluar los valores de retornaArreglo', () => {

        const [ letter, number ] = retornaArreglo();

        expect( typeof letter ).toBe( 'string' );
        expect( typeof number ).toBe( 'number' );

    });

});