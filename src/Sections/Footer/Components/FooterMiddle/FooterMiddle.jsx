


import './FooterMiddle.css';




const FooterMidlle = () => {

    return (
        <div className="footer-middle-container">
            <div className='footer-middle-left'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.3551647624204!2d4.325601115906278!3d50.82458496821642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c43f10f7e125%3A0xe644926db645fcd7!2sRue%20des%20Alli%C3%A9s%20303%2C%201190%20Forest!5e0!3m2!1sen!2sbe!4v1655725843214!5m2!1sen!2sbe" title="hi" className='map-size' style={{ border: 0, borderRadius: "20px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="footer-middle-right">
                <table>
                    <thead>

                        <tr>
                            <td className='schedule' colSpan="2">Horaire</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='day'>Lundi</td>
                            <td>09h00 - 17h00</td>
                        </tr>
                        <tr>
                            <td className='day'>Mardi</td>
                            <td>09h00 - 17h00</td>
                        </tr>
                        <tr>
                            <td className='day'>Mercredi</td>
                            <td>09h00 - 17h00</td>
                        </tr>
                        <tr>
                            <td className='day'>Jeudi</td>
                            <td>09h00 - 17h00</td>
                        </tr>
                        <tr>
                            <td className='day'>Vendredi</td>
                            <td>09h00 - 17h00</td>
                        </tr>
                        <tr>
                            <td className='day'>Samedi</td>
                            <td>Fermé</td>
                        </tr>
                        <tr>
                            <td className='day'>Dimanche</td>
                            <td>Fermé</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}




export default FooterMidlle;