import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '.';  // Atualize o caminho conforme necessário
import { useMyContext } from '@/Context/myContext';
import useModal from '@/Hooks/useModal';
import useInput from '@/Hooks/useInput';
import {jest, expect, beforeEach, describe, test} from '@jest/globals'

// Mock dos hooks
jest.mock('@/Context/myContext');
jest.mock('@/Hooks/useModal');
jest.mock('@/Hooks/useInput');

describe('Modal Component', () => {
  // Mock das funções e dados que serão retornados pelos hooks
  const mockedUseModal = useModal as jest.Mock;
  const mockedUseInput = useInput as jest.Mock;
  const mockedUseMyContext = useMyContext as jest.Mock;

  beforeEach(() => {
    mockedUseModal.mockReturnValue({
      brand: ['Toyota', 'Ford'],
      model: ['Corolla', 'Mustang'],
      year: ['2020', '2021'],
    });

    mockedUseInput.mockReturnValue({
      inputValue: "",
      setInputValue: jest.fn()
    })

    mockedUseMyContext.mockReturnValue({
      form: { marca: '', modelo: '', ano: '' },
      setForm: jest.fn(),
      setShowPrice: jest.fn(),
    });
  });

  test('renders all search inputs and the button', () => {
    render(<Modal />);
    
    expect(screen.getByLabelText(/marca/i)).not.toBeNull();
    expect(screen.getByLabelText(/modelo/i)).not.toBeNull();
    expect(screen.getByLabelText(/ano/i)).not.toBeNull();
    expect(screen.getByRole('button', { name: /consultar preço/i })).not.toBeNull();
  });

  test('button is disabled when form is incomplete', () => {
    render(<Modal />);
    
    const button = screen.getByRole('button', { name: /consultar preço/i }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  test('button calls setShowPrice when clicked', () => {
    const setShowPrice = jest.fn();
    mockedUseMyContext.mockReturnValueOnce({
      form: { marca: 'Toyota', modelo: 'Corolla', ano: '2020' },
      setForm: jest.fn(),
      setShowPrice,
    });

    render(<Modal />);
    
    const button = screen.getByRole('button', { name: /consultar preço/i });
    fireEvent.click(button);
    expect(setShowPrice).toHaveBeenCalledWith(true);
  });

  test('button is enabled when form is complete', () => {
    mockedUseMyContext.mockReturnValueOnce({
      form: { marca: 'Toyota', modelo: 'Corolla', ano: '2020' },
      setForm: jest.fn(),
      setShowPrice: jest.fn(),
    });

    render(<Modal />);
    
    const button = screen.getByRole('button', { name: /consultar preço/i }) as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });
});