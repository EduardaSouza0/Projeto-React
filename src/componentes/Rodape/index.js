import './Rodape.css'

const Rodape = () =>{
    return(
        <header className= "rodapeDaPagina">
            <div className='redes' >
                <a href='https://www.instagram.com/_eduarda8_/?hl=pt-br'><img src="/imagens/fb.png" alt="ícone facebook"></img></a>
                <a href='https://twitter.com/toboquinha'><img src="/imagens/tw.png" alt="ícone Twitter"></img></a>
                <a href='https://www.instagram.com/_eduarda8_/?hl=pt-br'><img src="/imagens/ig.png" alt="Ícone Instagram"></img></a>
            </div>
            <div className='logo'>
            <img src="/imagens/logo.png" alt="Logo da organo"></img>
            </div>
        </header>
    )
}

export default Rodape