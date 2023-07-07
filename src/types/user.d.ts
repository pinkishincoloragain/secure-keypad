export type UserId = number;
export type Password = string;
export type Name = string;
export type BankName = string;
export type BankAccount = string;
export type PhoneNumber = string;

export interface User {
    userId: UserId;
    password: Password;
    name: Name;
    bankName: BankName;
    bankAccount: BankAccount;
    phoneNumber: PhoneNumber;
};

type Users = User[];