import React, { createContext, ReactNode, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './styles.module.scss'

interface ModalsContext {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss: () => void
}

export const ModalContext = createContext<ModalsContext>({
  onPresent: () => {},
  onDismiss: () => {},
})

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalElement, setModalElement] = useState<ReactNode>()

  const handlePresent = (node: ReactNode) => {
    document.body.style.overflow = 'hidden'
    setModalElement(node)
    setIsOpen(true)
  }

  const handleClose = () => {
    setModalElement(undefined)
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <ModalContext.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleClose,
      }}
    >
      <CSSTransition in={isOpen} timeout={300} unmountOnExit classNames="fade">
        <div className={styles.wrapper}>
          <div className={styles.overlay} onClick={handleClose} />
          {React.isValidElement(modalElement) &&
            React.cloneElement(modalElement, {
              onDismiss: handleClose,
            })}
        </div>
      </CSSTransition>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
