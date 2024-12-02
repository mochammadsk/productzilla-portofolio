import { ReactNode } from 'react';

type ListProps = {
  icon: ReactNode;
  children: ReactNode;
};

function ListHeader({ icon, children }: ListProps) {
  return (
    <li className='flex gap-1.5 p-2 hover:bg-[#15191f] cursor-pointer rounded-lg align-center items-center'>
      <div>{icon}</div>
      <p className='text-sm'>{children}</p>
    </li>
  );
}

function ListHeaderIcon({ icon }: { icon: ReactNode }) {
  return <span className='cursor-pointer'>{icon}</span>;
}

export { ListHeader, ListHeaderIcon };
