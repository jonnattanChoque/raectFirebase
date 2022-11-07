import { FormatedDate } from './Formated'

export const DateEquials = (date1, index, datas) => {
    if (index !== 0) {
        const now = FormatedDate(date1);
        const old = FormatedDate(datas[index - 1].date);
        return now === old;
    }
};