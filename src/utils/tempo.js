import { differenceInMonths, differenceInYears, format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const DataDDMMYYY = (param) => {
    return format(parseISO(param), "dd '/' MM '/' yyyy", { locale: ptBR })
}

export const DateDifferenceToday = (param) => {
    return differenceInMonths(new Date(), parseISO(param))
}

export const DateDifferenceAnotherDay = (paramA, paramB) => {
    return differenceInMonths(paramA, parseISO(paramB))
}

export const CalcIdade = (param) => {
    // param = cliente.nascimento
    let idade = differenceInYears(new Date(), parseISO(param)).toString() 
    return idade
}
