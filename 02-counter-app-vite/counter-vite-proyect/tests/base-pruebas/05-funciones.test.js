import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const user = getUser();
        
        expect( user ).toStrictEqual({ uid: 'ABC123', username: 'El_Papi1502' });

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Fernando';
        const userActivo = getUsuarioActivo( nombre );

        expect( userActivo ).toStrictEqual({ uid: 'ABC567', username: nombre });

    });

});