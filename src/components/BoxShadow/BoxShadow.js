import React, {useState} from 'react';
import '../../App.css';
const BoxShadow = () => {
    const[Hori, setHori]  = useState(0);
  const[Verti, setVerti]  = useState(0);
  const[Blur, setBlur]  = useState(0);
  const[BlurW, setBlurW]  = useState(10);
  const[Color, setColor] = useState('black')
  const[CheckOn, setCheckOn]  = useState(false);
    return (
        <div className="box-shadow">
            <div className="control">
        <div className="form_row">
          <label for="range">Horizontal</label>
          <input 
            type="range"
            id="range"
            name="range"
            min="-100"
            max="100"
            width="100%"
            value={Hori}
            onChange={(e) => setHori(e.target.value)}
          />
        </div>

        <div className="form_row">
          <label for="verti">Verttical</label>
          <input 
            type="range"
            id="verti"
            name="range"
            min="-100"
            max="100"
            width="100%"
            value={Verti}
            onChange={(e) => setVerti(e.target.value)}
          />
        </div>

        <div className="form_row">
          <label for="blur">Blur</label>
          <input 
            type="range"
            id="blur"
            name="range"
            min="0"
            max="100"
            width="100%"
            value={Blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>
        <div className="form_row">
          <label for="blur-width">Blur Width</label>
          <input 
            type="range"
            id="blur-width"
            name="range"
            min="0"
            max="100"
            width="100%"
            value={BlurW}
            onChange={(e) => setBlurW(e.target.value)}
          />
        </div>


        <div className="form_row">
          <label for="range">Color</label>
          <input 
            type="color"
            id="range"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="form_row">
          <label for="swithch">{CheckOn? "Inset" : 'Outer'}</label>
          <input type="checkbox" value={CheckOn} onChange={(e) => setCheckOn(!CheckOn)}/>
        </div>

      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${Hori}px ${Verti}px ${Blur}px ${BlurW}px ${Color} ${CheckOn? "inset" : ''}` }}>
            <p>
              box-shadow: {Hori}px {Verti}px {Blur}px {BlurW}px {Color} {CheckOn? "inset" : ''}
            </p>
        </div>
      </div>
        </div>
    )
}

export default BoxShadow
