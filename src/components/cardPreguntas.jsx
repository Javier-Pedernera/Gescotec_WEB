import { Link } from 'react-router-dom';
import '../sass/components/_CardPreguntas.scss'

const Card = ({ title, imageSrc, description, logo }) => {
    return (
        (logo ?
            <div className="card_Logo">
                <Link to="/servicios">
                    <div className='divLogo'>
                        {/* <p>Ver + servicios</p> */}
                    </div>
                </Link>
            </div> :
            <div className="card">
                <img src={imageSrc} alt={title} className="imagencardPreguntas" />
                <div className='text_rombo'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>)
    );
}

export default Card;