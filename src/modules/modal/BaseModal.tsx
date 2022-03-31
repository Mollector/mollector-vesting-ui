import React from 'react'
import cx from 'classnames'


const Modal = ({
  title,
  onDismiss,
  onBack,
  children,
  showModalHeader = false,
  headerBackground = 'transparent',
  minWidth = '320px',
  ...props
}) => (
  <div>
    {children}
  </div>
)


export default Modal
