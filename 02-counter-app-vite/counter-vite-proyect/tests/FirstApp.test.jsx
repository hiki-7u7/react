const { render } = require("@testing-library/react")
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 


    const title = 'Hola, soy Goku';

    // test('debe de hacer match con el snapshot', () => {
        
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();

    // });

    test('debe de contener el texto "Hola, soy Goku"', () => {
        
        const { container, getByText } = render( <FirstApp title={ title } /> );

        expect( getByText(title) ).toBeTruthy();

    });

    test('el texto "Hola, soy Goku" debe de estar en una etiqueta h1', () => {
        
        const { container , getByTestId } = render( <FirstApp title={ title } /> );

        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });

});