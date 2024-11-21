import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Button() {
  const handleClick = () => {
    toast.success('Message successfully sent!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className='py-5 flex items-center justify-end gap-x-6'>
      <ToastContainer />
      <button
        type='button'
        onClick={handleClick}
        className='rounded-md bg-[#1f6feb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#4699d8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6feb]'
      >
        Send
      </button>
    </div>
  );
}

export default Button;
