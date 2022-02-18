import { differenceInYears, parseISO } from 'date-fns';

const CalcIdade = (param) => {
    // param = cliente.nascimento
    let idade = differenceInYears(new Date(), parseISO(param)).toString() 
    return idade
}
export default CalcIdade