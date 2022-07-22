export default {
    Minimo: (valor: string, minimo: number) => {
        return valor.length >= minimo;
    },

    LetraMaiuscula: (valor: string) => {
        const regex = new RegExp('(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$');
        return regex.test(valor);
    },

    LetraMinuscula: (valor: string) => {
        const regex = new RegExp('[a-z]', 'g');
        return regex.test(valor);
    },

    Numero: (valor: string) => {
        const regex = new RegExp('[0-9]', 'g');
        return regex.test(valor);
    }
};