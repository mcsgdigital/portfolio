import { v4 as uuidv4 } from 'uuid';
import '../../styles/Gallery.css';
import { useEffect, useState } from 'react';

function Gallery(props) {
  const [data, setData] = useState(null);

  const OnHandleClick = (obj) => {
    setData(obj);
  }

  const OnHandleClose = () => {
    setData(null);
  }

  useEffect(() => {}, [data])

    return (
      <>
        {
          data === null && <div className="gallery">
          {
              props.data.data.map((obj) => {
                  return <div key={uuidv4()} className='gallery-image'>
                    {(() => {
                      switch (props.data.type) {
                        case 'image':
                          return <img src={`./assets/banners/${obj.url}.${obj.extension}`} alt='gallery' />
                        case 'animated':
                          return <video src={`./assets/videos/${obj.url}.${obj.extension}`} controls />
                        case 'emails':
                          return <img src={`./assets/emails/${obj.url}/thumb.jpg`} alt='gallery' onClick={() => OnHandleClick(obj)}/>
                        case 'popups':
                          return <img src={`./assets/popups/${obj.url}/thumb.png`} alt='gallery' onClick={() => OnHandleClick(obj)}/>
                        case 'codes':
                          return <img src={`./assets/codes/${obj.url}.jpg`} alt='gallery' />
                        default:
                          return null
                      }
                    })()}
                  </div>
              })
          }
        </div>
        }
        
        {
          data && 
          <div className={`lightbox `+ props.data.class} onClick={() => OnHandleClose()}>
            <img src={`./assets/${props.data.type}/${data.url}/screenshot.${data.extension}`} alt='lightbox' />
          </div>
        }
      </>
    );
  }
  
  export default Gallery;