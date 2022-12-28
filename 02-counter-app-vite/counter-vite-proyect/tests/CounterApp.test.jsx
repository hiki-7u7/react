import { fireEvent, getByText, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10

    test('debe match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100', () => {

        render(<CounterApp value={100}/>);
        expect( screen.getByText('100') ).toBeTruthy();

    });

    test('la funcion incrementer debe añadir +1', () => {

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    });

    test('la funcion decrementer debe añadir -1', () => {

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();

    });

    test('el boton Reset debe de volver al valor inicial', () => {

        render(<CounterApp value={ 300 }/>);

        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));

        expect(screen.getByText('300')).toBeTruthy();

    });



});