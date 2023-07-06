// test Counter component

import Counter from "../src/components/Counter";
import {fireEvent, render} from '@testing-library/react';

test('counter increments and decrements when the buttons are clicked', () => {
    const {container} = render(<Counter initialCount={10}/>)
    const incrementButton = container.querySelector('#incrementButton')
    const currentCount = container.querySelector('#currentCount')

    expect(currentCount).toHaveTextContent('10')
    fireEvent.click(incrementButton)
    expect(currentCount).toHaveTextContent('11')
})