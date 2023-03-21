import { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useAuthStatus } from './useAuthStatus';

const useUserData = () => {

  const {currentUser} = useAuthStatus();

  const [userData, setUserData] = useState<DocumentData | undefined>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: ''
  })

  useEffect(() => {
    if (currentUser) {
      const getUserData = async () => {
        const userData = await getDoc(doc(db, 'users', currentUser.uid));

        if (userData.exists()){
          setUserData(userData.data());
        } else {
          console.log("Error");
        }
      }

      getUserData();
    }
  }, []);

  return { userData }
}

export { useUserData }