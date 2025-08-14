import dayjs from 'dayjs';

export function isOutRange(
  dateString?: string,
  minDate?: string,
  maxDate?: string
) {
  let lte, gte;
  if (minDate) {
    lte = dayjs(dateString).isBefore(minDate);
  }
  if (maxDate) {
    gte = dayjs(dateString).isAfter(maxDate);
  }
  return !!(lte || gte);
}
