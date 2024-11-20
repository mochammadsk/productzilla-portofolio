import { ReactNode } from 'react';

function Title({ children }: { children: ReactNode }) {
  return (
    <div className='relative my-10 justify-items-center'>
      <h1 className='text-3xl'>{children}</h1>
    </div>
  );
}

export default Title;
