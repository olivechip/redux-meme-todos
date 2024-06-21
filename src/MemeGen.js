import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTopText, setBottomText, setImage } from './memeSlice';
import Meme from './Meme';

const MemeGen = () => {
    const dispatch = useDispatch();
    const [ formValues, setFormValues] = useState({ 
        top: '',
        bottom: '',
        img: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        dispatch(setTopText(formValues.top));
        dispatch(setBottomText(formValues.bottom));
        dispatch(setImage(formValues.img));
        setFormValues({ top: '', bottom: '', img: '' });
    };

    return (
        <div>
            <h1>Meme Generator</h1>
            <form onSubmit={handleSubmit}>
                <input name="top" id="top" value={formValues.top} placeholder="Enter top text" onChange={handleChange}></input>
                <input name="bottom" id="bottom" value={formValues.bottom} placeholder="Enter bottom text" onChange={handleChange}></input>
                <input name="img" id="img" value={formValues.img} placeholder="Enter image URL" onChange={handleChange}></input>
                <button>Generate Meme</button>
            </form>
            <Meme />
        </div>
    )
}

export default MemeGen;