import React, { ReactNode } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

interface ModalProps {
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, ...props }) => (
  <div>
    <div>
      <div>{children}</div>
    </div>
  </div>
)

export default Modal
