import { ListHeader, ListHeaderIcon } from './ListHeader';
import CurrentDate from './Date';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faBookOpen,
  faCodeFork,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className='bg-[#010409] border-b border-[#9198a1]'>
      <div className='flex justify-between gap-3 px-4 pt-4 pb-2 sm:pt-2 sm:h-16'>
        <div className='flex items-center'>
          <ListHeaderIcon
            icon={
              <div className='border border-[#9198a1] rounded-lg py-1 px-2 justify-center w-8'>
                <FontAwesomeIcon icon={faBars} size='1x' color='#9198a1' />
              </div>
            }
          />
          <div className='ml-4 mr-2'>
            <a href='https://github.com/mochammadsk' target='_blank'>
              <ListHeaderIcon
                icon={<FontAwesomeIcon icon={faGithub} size='2x' />}
              />
            </a>
          </div>
          <div>
            <a className='hover:bg-[#15191f] cursor-pointer rounded-lg py-1 px-3'>
              <strong className='text-sm'>mochammadsk</strong>
            </a>
          </div>
        </div>

        <div className='gap-3 justify-items-end items-center lg:flex sm:hidden'>
          <CurrentDate />
          <span>
            <a href='https://www.linkedin.com/in/mochammadsk/' target='_blank'>
              <ListHeaderIcon
                icon={<FontAwesomeIcon icon={faLinkedin} size='2x' />}
              />
            </a>
          </span>
        </div>
      </div>

      <nav className='flex px-3.5 gap-1 mb-1'>
        <ListHeader icon={<FontAwesomeIcon icon={faBookOpen} size='sm' />}>
          <Link to='/'>Overview</Link>
        </ListHeader>
        <ListHeader icon={<FontAwesomeIcon icon={faCodeFork} size='sm' />}>
          <Link to='/experience'>Experience</Link>
        </ListHeader>
        <ListHeader icon={<FontAwesomeIcon icon={faTableList} size='sm' />}>
          <Link to='/project'>Project</Link>
        </ListHeader>
      </nav>
    </header>
  );
}

export default Header;
