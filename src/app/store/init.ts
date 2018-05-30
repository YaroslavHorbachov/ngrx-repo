export const InitStateCounter: IInitStateCounter = {
    counter: 10
};
export interface IInitStateCounter {
    counter: number;
}
export const InitAuthState = {
    name: 'Test',
    surname: 'Example'
};
export interface IInitAuthState {
    name: string;
    surname: string;
}
