import React from 'react';
import './ArticleLinkForm.css';

const ArticleLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
       <div> 
         <p className='f3'>
             {'This Alien will return articles in your knowledge base. Git it a try'}
        </p>  
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
            <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
            >Ask Alien</button>
            </div> 
        </div>   
       </div>
    );
}

export default ArticleLinkForm;