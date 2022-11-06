import { format } from 'date-fns';

const formatDate = (date: string | number | Date) =>
  format(new Date(date), 'dd/MM/yyyy - HH:mm');

export default formatDate;
