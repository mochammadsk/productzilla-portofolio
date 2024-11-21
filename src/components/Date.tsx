function CurrentDate() {
  const today = new Date();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = dayNames[today.getDay()];
  const date = today.getDate();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${day}, ${date} ${month} ${year}`;

  return (
    <span className='border border-[#9198a1] rounded-lg h-9 py-1 px-4 lg:align-middle'>
      <span className='text-sm text-[#9198a1]'>{formattedDate}</span>
    </span>
  );
}

export default CurrentDate;
