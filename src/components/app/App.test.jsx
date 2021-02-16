import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component that changes color', () => {
  it('display current color', async() => {
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
  it('it should undo to previous color', async() => {
    render(<App />);

   
    const current = screen.getByTestId('current');
    const undo = screen.getByTestId('undo');
   
    
   
    fireEvent.change(current, {
      target: {
        value: '#00FF00'
      }
    });
    
    fireEvent.click(undo);

    const display = await screen.findByTestId('display');  

    expect(display).toHaveStyle({
      
      backgroundColor: '#FF0000',
      

    });
  });
  it('it should redo what the undo done did', async() => {
    render(<App />);

   
    const current = screen.getByTestId('current');
    const redo = screen.getByTestId('redo');
    const undo = screen.getByTestId('undo');
    
   
    
   
    fireEvent.change(current, {
      target: {
        value: '#00FF00',
      }
    });
    
    fireEvent.click(undo);
    fireEvent.click(redo);

    const display = await screen.findByTestId('display');  

    expect(display).toHaveStyle({
      
      backgroundColor: '#00FF00',
      

    });
  });
});


