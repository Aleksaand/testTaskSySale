import React from 'react';
import './RadioButtonsControl.css';

export const RadioButtonsControl = (props) => {

    return (        
     <div className="radio-toolbar">
        <form>
            <div className="radio-box">
                <span className="radio">
                    <label className="labelradio">
                        <input 
                            type="radio" 
                            value="option1"
                            className="labelinput" 
                            checked={props.state.select === 'option1'}
                            onChange={props.handleOptionChange} 
                        />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 мл</span>
                    </label>
                </span>
            </div>
            <div className="radio-box">
                <span className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="option2" 
                            checked={props.state.select === 'option2'} 
                            onChange={props.handleOptionChange}   
                        />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200 мл</span>
                    </label>
                </span>
            </div>
            <div className="radio-box">
                <span className="radio">
                    <label>
                        <input 
                            type="radio" 
                            value="option3" 
                            checked={props.state.select === 'option3'} 
                            onChange={props.handleOptionChange}  
                        />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;300 мл</span>
                    </label>
                </span>
            </div>
        </form>

    </div>
        
        
        
        
        
        
        // <div>
        //     RadioButtonsControl
        //     <div>
        //         <label>
        //             <input 
        //                 type="radio" 
        //                 name="volume"
        //                 value="volume100"
        //                 // checked={props.status.volume100}
        //                 // onChange={props.handleChange}
        //             /> 100 мл
        //         </label>

        //         <br />

        //         <label>
        //             <input 
        //                 type="radio" 
        //                 name="volume"
        //                 value="volume200"
        //                 // checked={props.status.volume200}
        //                 // onChange={props.handleChange}
        //             /> 200 мл
        //         </label>
                
        //         <br />

        //         <label>
        //             <input 
        //                 type="radio" 
        //                 name="volume"
        //                 value="volume300"
        //                 // checked={props.status.volume300}
        //                 // onChange={props.handleChange}
        //             /> 300 мл
        //         </label>
        //     </div>
            
        // </div>
    );
};