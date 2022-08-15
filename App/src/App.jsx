import { Header } from "./components/Header";

import styles from "./App.module.css";
import blackBoardLogo from "./assets/blackBoardIcon.png";
import carteirinhaLogo from "./assets/carteirinhaLogo.png";

export function App() {

    return (
        <>
            <Header/>
            <section>
                <main className={styles.main}>
                    <a className={styles.button} target="_blank" href="https://www.ceunsp.edu.br/aluno/"><button>Site da Instituição</button></a>
                    <a className={styles.button} target="_blank" href="https://novoportal.cruzeirodosul.edu.br/?empresa=ceunsp"><button>Portal do Aluno</button></a>
                    <a className={styles.blackBoardButton} target="_blank" href="https://bb.cruzeirodosulvirtual.com.br/"><button> <img height={60} src={blackBoardLogo} alt="" /> Black Board</button></a>
                    <a className={styles.carteirinhaButton} target="_blank" href="https://play.google.com/store/apps/details?id=com.inovatecnologia.carteirinha&hl=pt&gl=US"><button> <img height={40} src={carteirinhaLogo} alt="" /> Carteirinha</button></a>
                </main>

                <footer>Desenvolvido por <a href="https://github.com/luizfranzon">Luiz Franzon</a></footer>
            </section>
        </>
    )
}
