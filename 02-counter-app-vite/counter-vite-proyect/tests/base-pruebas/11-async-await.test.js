import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba en 11-async-await', () => {

    test('getImagen debe de retornar la url de una imagen', async() => {

        const url = await getImagen()
        
        expect( typeof url ).toBe( 'string' )

    })

})