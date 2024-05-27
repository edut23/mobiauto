import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '.';  // Atualize o caminho conforme necessário
import { useMyContext } from '../../Context/myContext';
import useModal from '../../Hooks/useModal';
import useInput from '../../Hooks/useInput';
import {jest, expect, beforeEach, describe, test} from '@jest/globals'

// Mock dos hooks
const mockedUseMyContext = jest.fn();
jest.mock('../../Context/myContext', () => {
  return {
    __esModule: true,
    default: mockedUseMyContext,
  };
});
const mockedUseModal = jest.fn();
jest.mock('../../Hooks/useModal', () => {
  return {
    __esModule: true,
    default: mockedUseModal,
  };
});
const mockedUseInput = jest.fn();
jest.mock('../../Hooks/useInput', () => {
  return {
    __esModule: true,
    default: mockedUseInput,
  };
});

describe('Modal Component', () => {
  // Mock das funções e dados que serão retornados pelos hooks

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
      form: { marca: '', modelo: '', ano: '', event: false },
      setForm: jest.fn(),
      setShowPrice: jest.fn(),
    });
  });

  test('renders all search inputs and the button', () => {
    render(<Modal />);
    
    expect(screen.getAllByTestId("marca")).not.toBeNull();
    expect(screen.getAllByTestId("modelo")).not.toBeNull();
    expect(screen.getAllByTestId("ano")).not.toBeNull();
    expect(screen.getByRole('button', { name: /consultar preço/i })).not.toBeNull();
  });

  test('button is disabled when form is incomplete', () => {
    render(<Modal />);
    
    const button = screen.getByRole('button', { name: /consultar preço/i }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });
});

