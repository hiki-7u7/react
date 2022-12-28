const { render , screen } = require("@testing-library/react")
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp2 />', () => { 

    const title = 'Hola soy goku';
    const subtitle = 100
    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola soy Goku"', () => {

        render( <FirstApp title={ title }/>);       
        expect( screen.getByText(title) ).toBeTruthy();
 
    });

    test('debe de mostrar el mensaje en un h1', () => {

        render( <FirstApp title={ title }/>);       
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
 
    });

    test('debe de contener todos los subtitulos', () => {

        render( <FirstApp title={ title } subtitle={100} />);       
        expect( screen.getAllByText(subtitle).length ).toBe(3);
 
    })

});