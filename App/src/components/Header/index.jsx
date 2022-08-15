import styles from "./Header.module.css"

import logo from "../../assets/CeunspLogo.png"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo da Ceunsp. Uma estrela vermelha, e um texto azul escrito Ceunsp" />
            <h1>Link Tree</h1>
        </header>
    )
}