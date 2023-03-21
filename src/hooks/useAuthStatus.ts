import { useEffect, useState, useRef } from "react"
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const useAuthStatus = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true)
  const [ currentUser, setCurrentUser] = useState<User | null>(null)
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setLoggedIn(true)
          setCurrentUser(auth.currentUser)
        } else {
          setLoggedIn(false);
          setCurrentUser(null)
        }
        setCheckingStatus(false);
      })
    }

    return () => {
      isMounted.current = false;
    }
  }, [isMounted]);

  return {loggedIn, checkingStatus, currentUser}
}


export { useAuthStatus}

