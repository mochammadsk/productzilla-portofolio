function CurrentDate() {
  const today = new Date();
  const dayNames = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const day = dayNames[today.getDay()];
  const date = today.getDate();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${day}, ${date} ${month} ${year}`;

  return (
    <span className='border border-[#9198a1] rounded-lg px-4'>
      <span className='text-sm text-[#9198a1] align-middle'>
        {formattedDate}
      </span>
    </span>
  );
}

export default CurrentDate;
