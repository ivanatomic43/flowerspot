import { ReactNode } from 'react'

export interface FormProps {
  children: ReactNode;
  onSubmit: React.FormEventHandler
}

const Form = ({ children, onSubmit } : FormProps) : JSX.Element => {
  return (
   <>
    <form onSubmit={onSubmit} className="form-container">
      {children}
    </form>
   </>
  )
}

export default Form
