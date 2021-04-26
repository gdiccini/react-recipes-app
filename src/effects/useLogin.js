import { useEffect } from 'react';

export default function useLogin(userEmail, userPassword, setIsDisabled) {
  useEffect(() => {
    const handleUserValidation = () => {
      setIsDisabled(true);
      const emailValidation = new RegExp(/^[\w\d]+@[\w]+\.[\w]{2,3}/g);
      const passwordValidation = new RegExp(/^.{7,}/g);
      if (emailValidation.test(userEmail) && passwordValidation.test(userPassword)) {
        setIsDisabled(false);
      }
    };

    handleUserValidation();
  }, [userEmail, userPassword, setIsDisabled]);
}
