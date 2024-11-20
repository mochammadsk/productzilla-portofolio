import Header from '../../components/Header';
import Button from '../../components/Button';
import profileImg from '../../assets/profile.jpg';

function Overview() {
  return (
    <>
      <Header />
      <main className='my-5 mx-10 px-8 flex sm:flex-col gap-20'>
        <div className='w-80 mt-3 justify-items-center'>
          <img
            src={profileImg}
            alt='profile'
            width={296}
            className='rounded-full'
          />
          <div className='my-2'>
            <h1 className='text-2xl leading-snug font-bold '>
              Mochammad Syahrul Kurniawan
            </h1>
            <p className='text-[#9198a1] text-xl'>mochammadsk</p>
            <p className='text-base my-4'>Back End Developer</p>
          </div>

          <div>
            <button className='bg-[#212830] border border-[#9198a1] rounded-md py-1 px-2 w-80'>
              <a
                href='https://docs.google.com/document/d/1C-Ws8lI2v6Nry-GS17e3CRpwLk9tPgjy/preview'
                target='_blank'
                className='text-sm font-bold'
              >
                Curriculum Vitae
              </a>
            </button>
          </div>
        </div>

        <div className='border my-7 px-8 rounded-md w-full text-justify'>
          <h1 className='text-2xl font-bold my-5'>Hi there 👋</h1>
          <p>
            I’m <strong>Syahrul</strong> from Singaraja, Bali. I’m a student at{' '}
            <strong>Universitas Pendidikan Ganesha</strong>. I’m currently in my
            7th semester and want to focus on a concentration in{' '}
            <strong>cyber security</strong> education. I have had several
            experiences in the field of cyber security such as participating in
            the <strong>Capture The Flag (CTF)</strong> competition and{' '}
            <strong>penetrating websites</strong>. I'm also interested in web
            development, especially on the <strong>back end developer</strong>{' '}
            side. Currently I'm studying the{' '}
            <strong>NodeJs, ExpressJs, & Typescript</strong>.
          </p>
          <h1 className='text-2xl font-bold my-5'>Contact me:</h1>
          <form action=''>
            <div className='col-span-full'>
              <label htmlFor='email' className='block  font-medium'></label>
              <div className='mt-2'>
                <textarea
                  id='email'
                  name='email'
                  rows={3}
                  className='block w-full rounded-md border border-[#9198a1] p-3 bg-[#212830] text-white focus:bg-[#15191f]'
                ></textarea>
              </div>
            </div>
          </form>
          <Button />
        </div>
      </main>
    </>
  );
}

export default Overview;
