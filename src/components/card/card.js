import './card.css';
import './flip-transition.css'
import {Button} from '../Button/Button'
import '../../'

function Card({onClick}){
    return(
        <div className='card' onClick={onClick}>
            <div className='card-back'>
                <div className='icon1'>
                    <a href='https://www.linkedin.com/in/hassannadeemkhan' target="_blank" rel='noreferrer noopener'> 
                        <i class="fa fa-linkedin-square" style={{'color':'black'}}></i>
                    </a>
                </div>
                <div className='icon1'>
                    <a href='mailto: hassannadeemkhan@gmail.com' target="_blank" rel='noreferrer noopener'> 
                        <i class="material-icons" style={{"font-size":"48px", "color":"black"}}>mail</i>
                    </a>
                </div>
                <div className='resume'>
                    <a href="../../Hassan_Khan_Resume.pdf" target="_blank" rel="noreferrer noopener">
                        <Button>Resume</Button>
                    </a>
                </div>
            </div>
            <div className='card-front'>
                <h1>Hassan Khan</h1>
            </div>
        </div>
    )
}

export default Card;