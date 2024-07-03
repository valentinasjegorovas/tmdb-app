import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '2rem',
        }}
      >
        Page doesn't exist
      </p>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '2rem',
        }}
        to="/"
      >
        Back to the main page
      </Link>
    </div>
  );
};

export default Page404;
