import Header from '../../components/Header';
import Content from '../../components/Content';
import Title from '../../components/Title';

function Experience() {
  return (
    <>
      <Header />
      <Title children='EXPERIENCE' />
      <main className='my-5 mx-10 px-8 flex gap-20 sm:flex-col sm:mx-0 sm:gap-10'>
        <div className='w-1/2 sm:w-full'>
          <Content
            job='Back End Developer | Ganesha Inovasi Teknologi'
            period='February 2024 - July 2024'
            desc='I developed an augmented reality (AR) web application using Node.js
            with MongoDB as the database. In this role, I created APIs and
            implemented user authentication via Google Auth, along with secure
            authorization using JSON Web Token (JWT). Additionally, I integrated
            encryption protocols with Argon2 and Bcrypt to ensure data security
            and managed database development for optimal performance.'
            link='~ Certificate'
            href='https://drive.google.com/file/d/15ISEdTB-m2MeMMflOulAoTdHlKT86EFp/view?usp=drive_link'
          />
        </div>

        <div className='w-1/2 sm:w-full'>
          <Content
            job='IT Support | PT. Masterdata Bali'
            period='January 2020 - March 2020'
            desc={`In this role, I actively supported technicians by troubleshooting computer hardware, printers, and Wi-Fi networks to ensure smooth operations. Additionally, I streamlined the company's computer and printer rental processes by managing and organizing rental administration, contributing to improved efficiency and service quality.In this role, I actively supported technicians by troubleshooting computer hardware, printers, and Wi-Fi networks to ensure smooth operations. Additionally, I streamlined the company's computer and printer rental processes by managing and organizing rental administration, contributing to improved efficiency and service quality.`}
            link='~ Certificate'
            href='https://drive.google.com/file/d/1SbwitK9kNpCObMx7Ab7wR7qbshYuY6Sq/view?usp=drive_link'
          />
        </div>
      </main>
    </>
  );
}

export default Experience;
