import ReactDOM from "react-dom"
import { ReactNode } from "react"
export interface ModalProps {
  children?: ReactNode
  onClose: () => void
  modalTitle?: string
  onSubmit?: React.FormEventHandler
  hasForm: boolean
}

function Modal({
  children,
  onClose,
  modalTitle,
  onSubmit,
  hasForm,
}: ModalProps): JSX.Element {
  const content = (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalDialog">
          <div className="overlay" onClick={onClose} role="presentation" />
          <div className="dialog">
            <div className="content rounded-xl">
              <div className="modal-container bg-white p-5 rounded-xl">
                <h3 className="text-center text-black font-medium text-xl">
                  {modalTitle}
                </h3>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ModalContent = hasForm ? (
    <form onSubmit={onSubmit}>{content}</form>
  ) : (
    content
  )

  return ReactDOM.createPortal(ModalContent, document.body)
}

export default Modal
