import { Card } from '../Cadr/Card';
import  style  from './Main.module.css';
import image1 from '../img/image.svg';
import image2 from '../img/pantine.svg';
import image3 from '../img/sopsert.svg';

export const Main = () => {
    return (
        <div className={style.div}>
            
            <div className={style.item}>
                <Card image1={image1}/>
                <Card image1={image2}/>
                <Card image1={image3}/>
            {/* <Card1 />
            <Card2 /> */}
            
            </div>    
        </div>
    );
};