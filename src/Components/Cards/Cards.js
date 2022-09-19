import home from '../../assets/home.jpeg';
import { FaRegHeart, FaBath, FaRestroom, FaClipboard} from "react-icons/fa";
import './Cards.css';

const Cards = ({location, price, address, beds, size, bathroom}) => {
    const styleicon = {
        color: 'rebeccapurple',
        border: '1px solid silver',
        borderRadius: '20px',
        padding: '10px'
    }

    const styleicons = {
        color: 'rebeccapurple',
        padding: '0 2px'
    }
    return(
        <div className='cards'>
            <img src={home} alt='houses'/>

          <div className='cards_info'>
                <div className='house_rent'>
                    <p><span>${price}</span>/month</p>
                    <FaRegHeart style={styleicon}/>
                </div>

                <div className='house_loc'>
                <h4>{location}</h4> 
                <p>{address}</p>
                </div>

                <div className='house_info'>
                    <FaRestroom style={styleicons}/><span>{beds} Beds</span> 
                    <FaBath style={styleicons}/><span>{bathroom} Bathrooms</span> 
                    <FaClipboard style={styleicons}/><span> {size} m2</span>
                </div>
          </div>  
            
            
            
        </div>
    )
}

export default Cards;