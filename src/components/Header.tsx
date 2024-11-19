import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faBookOpen,
  faCodeFork,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';
import { ListHeader, ListHeaderIcon } from './ListHeader';

function Header() {
  return (
    <header className='bg-[#010409] border-b border-[#9198a1]'>
      <ul className='list-none flex-col'>
        <div className='flex items-center p-4'>
          <ListHeaderIcon
            icon={
              <div className='border border-[#9198a1] rounded-lg py-1 px-2 justify-center w-8'>
                <FontAwesomeIcon icon={faBars} size='1x' color='#9198a1' />
              </div>
            }
          />
          <div className='mx-4'>
            <ListHeaderIcon
              icon={<FontAwesomeIcon icon={faGithub} size='2x' />}
            />
          </div>
          <li className='hover:bg-[#15191f] cursor-pointer rounded-lg py-1'>
            <strong className='text-sm'>mochammadsk</strong>
          </li>
        </div>

        <div className='flex px-3 mb-3'>
          <ListHeader icon={<FontAwesomeIcon icon={faBookOpen} />}>
            Overview
          </ListHeader>
          <ListHeader icon={<FontAwesomeIcon icon={faCodeFork} />}>
            Experience
          </ListHeader>
          <ListHeader icon={<FontAwesomeIcon icon={faTableList} />}>
            Project
          </ListHeader>
        </div>
      </ul>

      {/* <ul className='list-none flex py-2'>
        <ListHeader icon={<FontAwesomeIcon icon={faBookOpen} />}>
          Overview
        </ListHeader>
        <ListHeader icon={<FontAwesomeIcon icon={faCodeFork} />}>
          Experience
        </ListHeader>
        <ListHeader icon={<FontAwesomeIcon icon={faTableList} />}>
          Project
        </ListHeader>
      </ul> */}
    </header>
  );
}

export default Header;
