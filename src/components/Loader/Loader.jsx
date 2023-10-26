import { PuffLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PuffLoader color="#2eb7e9" size={50} />
    </LoaderWrapper>
  );
};

export default Loader;
