import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', () => {

    
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        
        const id = 2;
        const heroe = getHeroeById( id );
        getHeroeByIdAsync( id )
        .then(res => {
            
            expect( res ).toEqual( heroe );
            
            done();
        })
        
    });
    
    test('getHeroeByIdAsync debe de tirar un error', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
        .catch(error => {
            
            expect( error ).toEqual( 'No se pudo encontrar el héroe' );
            
            done();
        })
        
    })
    
    // test('getHeroeByIdAsync debe de retornar un heroe', () => {

    //     const id = 2;
    //     const heroe = getHeroeById( id );
    //     return getHeroeByIdAsync( id )
    //         .then(res => {

    //             expect( res ).toEqual( heroe );
    //         })

    // });
    
});