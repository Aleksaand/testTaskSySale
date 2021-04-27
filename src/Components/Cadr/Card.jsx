import React from 'react';
import ControlledOpenSelect from '../SelectBlock/SelectBlock';
// import RadioButtons from '../RadioButtons/RadioButtons';
import { RadioButtonsControl } from '../RadioButtonsControl/RadioButtonsControl';
import { ButtonBox } from '../ButtonBox/ButtonBox';
import  style  from './Card.module.css';
// import image1 from './img/image.svg';
import libra from './img/libra.svg';

export const Card = (props) => {
    const [price, setPrice] = React.useState(100);
    const [count, setCount] = React.useState(1);
    const [state, setState] = React.useState({
        select: 'option1',
    });

    React.useEffect(
        () => {
        //   const total = price;
          switch (state.select) {
            case 'option1':
                setPrice(100);
                break;
            case 'option2':
                setPrice(200);
                break;
            case 'option3':
                setPrice(300);
                break;      
              default:
                  break;
          }
          console.log(price);
            // const subscription = props.source.subscribe();
        //   return () => {
        //     subscription.unsubscribe();
        //   };
        },
        // eslint-disable-next-line
        [state.select],
      );

    const handleOptionChange =  (changeEvent) => {
        setState({
            select: changeEvent.target.value
        });
      };

    const increment = () => {
        console.log('increment');
        setCount(count + 1);
    };

    const decrement = () => {
        if (count === 1) {
            return null;
        }
        setCount(count - 1);
        console.log('decrement');
    };
    // setPrice();
    
    return (
        <div className={style.box}>
            <div className={style.inner__box}>
                <div className={style.title__block}>
                    <div className={style.title__new}>NEW</div>
                    <div className={style.title__img}>
                        <img src={props.image1} alt="image1" />
                    </div>
                    <div className={style.title__libra}>
                        <img src={libra} alt="libra" />
                    </div>
                </div>
                <div className={style.title__content}>
                    <span>
                        Шампунь
                    </span>
                </div>
                <div className={style.content}>
                    <span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </span>
                </div>
                <div className={style.select}>
                    <ControlledOpenSelect />
                    <div className={style.price}>{count * price} грн</div>
                </div>
                <div className={style.radio}>
                    {/* <RadioButtons /> */}
                    <RadioButtonsControl 
                        state={state} 
                        handleOptionChange={handleOptionChange}
                    />
                </div>
                <div>
                    <ButtonBox count={count} increment={increment} decrement={decrement}/>
                </div>
                
            </div>
            
            
        </div>
    );
};