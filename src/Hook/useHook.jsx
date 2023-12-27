import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProVider';

const useHook = () => {
 const Auth=useContext(AuthContext)
 return Auth
};

export default useHook;