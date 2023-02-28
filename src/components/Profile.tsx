import Modal from '../common/Modal'

interface ProfileProps {
  onClose: () => void;
}

function Profile({onClose} : ProfileProps) : JSX.Element {

  const profileContent = (
    <div>
        
    </div>
  );

  return (
    <>
      <Modal onClose={onClose} hasForm={false} >
        User Profile
      </Modal>
    </>
  )
}

export default Profile
