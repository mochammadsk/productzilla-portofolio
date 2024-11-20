import { ReactNode } from 'react';

type ContentProps = {
  job: ReactNode;
  period: ReactNode;
  desc: ReactNode;
  link: ReactNode;
  href: string;
};

function Content({ job, period, desc, link, href }: ContentProps) {
  return (
    <>
      <h1 className='font-bold'>{job}</h1>
      <i className='leading-7'>{period}</i>
      <p className='text-justify'>{desc}</p>
      <a
        className='underline decoration-dotted'
        style={{ textUnderlineOffset: '4px' }}
        href={href}
        target='_blank'
      >
        {link}
      </a>
    </>
  );
}

export default Content;
