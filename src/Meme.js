import { useSelector, useDispatch } from 'react-redux';
import { clear } from './memeSlice';
import './Meme.css';

const Meme = () => {
    const dispatch = useDispatch();
    const { top, bottom, img } = useSelector((state) => state.meme)

    const handleClick = () => {
        dispatch(clear());
    };

    return (
        <div>
            <div className="meme-container">
            { img ? (
                <div className="meme-wrapper">
                    <div className="meme-image-container">
                        <img src={img} alt="Generated Meme" className="meme-image" />
                    </div>
                <div className="meme-text-top">{top}</div>
                <div className="meme-text-bottom">{bottom}</div>
              </div>
            ) : (
                <p>No meme generated yet. Enter details and click 'Generate Meme'.</p>
            )}
            </div>
            <button onClick={handleClick}>Reset</button>
        </div>
    )
}

export default Meme;