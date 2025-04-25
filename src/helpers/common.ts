export default class CommonHelper {
  public static formattedTimestamp = () => {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };

    return new Intl.DateTimeFormat('en-IN', options).format(date);
  };
}
