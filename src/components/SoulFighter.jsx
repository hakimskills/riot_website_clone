import Button from './Button';
import soulFighter from '../images/sf-brand-mark.png';
import './SoulFighter.css'
const SoulFighter =()=>{
return( 
    <div className='soul-fighter'>
    <img src={soulFighter} className='soul-fighter__image' alt='Soul Fighter Logo' />
    <h1 className='upFor' style={{fontWeight:'700',fontSize:'2rem'}}>Up for a fight?</h1>
    <p>You're invited to the Tournament of Souls.</p>
     <Button></Button>
    </div>
);


}
export default SoulFighter;