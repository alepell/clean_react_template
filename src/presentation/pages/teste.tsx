import React from 'react'
import Styles from './teste.scss'

const Teste: React.FC = () => {
  return (
    <div className={Styles.teste}>
      HELLO
      <header className={Styles.header}></header>
      <form className={Styles.form} action=""></form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Teste
