import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component that changes color', () => {
  it('changes color with undo and redo buttons', async() => {
    render(<App />);

    const before = screen.getByTestId('before');
    const current = screen.getByTestId('current');
    const after = screen.getByTestId('after');
    
    fireEvent.change(before, {
      target: {
        value: '#00FF00'
      }
    });
    fireEvent.change(current, {
      target: {
        value: '#FF0000'
      }
    });
    fireEvent.change(after, {
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
