import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component that changes color', () => {
  it('changes color with undo and redo buttons', async() => {
    render(<App />);

   
    const current = screen.getByTestId('current');
   
    
   
    fireEvent.change(current, {
      target: {
        value: '#FF0000'
      }
    });
    
    
    const display = await screen.findByTestId('display');  

    expect(display).toHaveStyle({
      
      backgroundColor: '#FF0000',
      

    });
  });
});
