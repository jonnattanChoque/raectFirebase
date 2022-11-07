import {format} from 'date-fns';
import {es} from 'date-fns/locale';

export const FormatedQuantity = (quantity) => {
    return new Intl.NumberFormat(
        'en-US', 
        { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }
    ).format(quantity);
};

export const FormatedDate = (date, formated = true) => {
    var milsToDate = new Date(parseInt(date, 10));
    
    if(formated) {
        return format(milsToDate, 'dd MMMM yyyy', {locale: es});
    } else {
        return milsToDate;
    }
};