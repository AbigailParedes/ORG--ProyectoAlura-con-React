import "./Footer.css"

const Footer = () =>{

    return <footer className="footer" style={{backgroundImage: "url(/img/footerBack.png)"}}> 

            <div className="redes">

            <a href="">
                    <img src="/img/facebook.png" alt="facebook" />
                </a>
                <a href="">
                    <img src="/img/instagram.png" alt="instagram" />
                </a>

                <a href="">
                    <img src="/img/twitter.png" alt="twitter" />
                </a>

               

            </div>

            <img src="/img/Logo.png" alt="org" />
            <strong>Desarrollado por Abigail Paredes</strong>
    </footer>

}


export default Footer