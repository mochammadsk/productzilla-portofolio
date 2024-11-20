import Header from '../../components/Header';
import Title from '../../components/Title';
import Content from '../../components/Content';

function Project() {
  return (
    <>
      <Header />
      <Title children='PROJECT' />
      <main className='my-5 mx-10'>
        <div>
          <Content
            job='StayHub'
            period='October 2024 - Present'
            desc='This project, part of the MSIB - Kampus Merdeka program, involved developing StayHub, a comprehensive boarding house management website. StayHub streamlines essential tasks such as payment processing, room availability tracking, and occupant management, offering a seamless experience for property managers. The backend was built with Node.js and Express, the frontend with React.js, and MongoDB served as the database, ensuring a robust and scalable solution for effective property management.'
            link='~ Details'
            href='https://www.linkedin.com/in/mochammadsk/details/projects/'
          />

          <div className='my-5 flex gap-5'>
            <a href='https://github.com/mochammadsk/stayhub' target='_blank'>
              <img
                src='https://media.licdn.com/dms/image/sync/v2/D5627AQHLSUEtfdizYw/articleshare-shrink_160/articleshare-shrink_160/0/1731736640702?e=1732741200&v=beta&t=HN2Mw0qPD_pJgyUnVTVvyvx6JrYQXGVXra9E7FMYRtI'
                alt='stayhub-backend'
                className='rounded-md'
              />
            </a>
            <a
              href='https://github.com/deskastudio/stayhub-frontend'
              target='_blank'
            >
              <img
                src='https://media.licdn.com/dms/image/sync/v2/D5627AQHeJQLxK7lwig/articleshare-shrink_160/articleshare-shrink_160/0/1731736727069?e=1732701600&v=beta&t=cEk8RZWAdcmzeBOVrd0u1vk1c-D5laV907vVRTat8lA'
                alt='stayhub-frontend'
                className='rounded-md'
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
