import moment from 'moment';

export const formatDate = (
  value: string,
  format: string = 'MM/DD/YYYY HH:MM',
) => {
  if (value) {
    return moment(value).format(format);
  }
};
