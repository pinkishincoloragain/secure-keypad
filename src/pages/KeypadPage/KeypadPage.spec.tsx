import { fireEvent, render, screen } from '@testing-library/react';
import KeypadPage from '.';

describe('Keypad Page', () => {
  it('키패트 버튼을 클릭하면 입력 비밀번호가 증가한다.', () => {
    render(<KeypadPage />);

    const keypadButtons = screen.getAllByRole('button');

    fireEvent.click(keypadButtons[0]);
    fireEvent.click(keypadButtons[0]);

    const activePasswords = screen.getAllByTestId('password-active');
    const deactivePasswords = screen.getAllByTestId('password-deactive');

    expect(activePasswords.length).toEqual(2);
    expect(deactivePasswords.length).toEqual(3);
  });

  it('비밀번호 입력 수가 3 이하이면 숫자 키패드, 4 이면 영문 키패드가 보여진다.', () => {
    render(<KeypadPage />);

    const keypadButtons = screen.getAllByRole('button');
    expect(screen.getAllByText('1')).toBeTruthy();

    fireEvent.click(keypadButtons[0]);
    expect(screen.getAllByText('3')).toBeTruthy();

    fireEvent.click(keypadButtons[1]);
    expect(screen.getAllByText('5')).toBeTruthy();

    fireEvent.click(keypadButtons[2]);
    expect(screen.getAllByText('7')).toBeTruthy();

    fireEvent.click(keypadButtons[3]);
    expect(screen.getAllByText('H')).toBeTruthy();

    fireEvent.click(screen.getByTestId('keypad-delete-button'));
    expect(screen.getAllByText('4')).toBeTruthy();
  });

  it('비밀번호 입력 수가 1 이상이어야 키패드 내 delete 버튼이 보여진다.', () => {
    render(<KeypadPage />);

    expect(screen.queryByTestId('keypad-delete-button')).toBeNull();

    fireEvent.click(screen.getAllByRole('button')[0]);

    const deleteButton = screen.getByTestId('keypad-delete-button');
    expect(deleteButton).toBeTruthy();

    fireEvent.click(deleteButton);
    expect(screen.queryByTestId('keypad-delete-button')).toBeNull();
  });
});
