import { ReactNode } from 'react';

type ListProps = {
  icon: ReactNode;
  children: ReactNode;
};

type ListPropsIcon = {
  icon: ReactNode;
};

function ListHeader({ icon, children }: ListProps) {
  return (
    <li className='flex gap-2 py-1 px-2 hover:bg-[#15191f] cursor-pointer align-center'>
      <div>{icon}</div>
      <text className='text-sm'>{children}</text>
    </li>
  );
}

function ListHeaderIcon({ icon }: ListPropsIcon) {
  return <li className='cursor-pointer'>{icon}</li>;
}

export { ListHeader, ListHeaderIcon };
