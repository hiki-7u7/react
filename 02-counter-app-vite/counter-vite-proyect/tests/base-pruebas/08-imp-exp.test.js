import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe', () => {

        const id = 3;
        const heroe = getHeroeById( id );
        
        expect( heroe ).toStrictEqual( heroes.find( el => el.id === id ) );

    });

    test('getHeroesByOwner debe de retornar un arreglo de acuerdo al owner', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
    
        expect( heroes ).toStrictEqual( heroes.filter( el => el.owner === owner ));

    });

});