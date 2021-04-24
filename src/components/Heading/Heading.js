import React,{useState} from 'react'
import '../../App.css';
const Heading = () => {
    const [HeadText,setHeadText] = useState('Dummy Heading');
    const [HeadFontSize,setHeadFontSize] = useState();
    const [FontWeight,setFontWeight] = useState();
    const [MarTop, setMarTop] = useState();
    const [MarBot, setMarBot] = useState();
    const [MarLeft, setMarLeft] = useState();
    const [MarRight, setMarRight] = useState();
    const [PadTop, setPadTop] = useState();
    const [PadBot, setPadBot] = useState();
    const [PadLeft, setPadLeft] = useState();
    const [PadRight, setPadRight] = useState();
    const [LineHeight, setLineHeight] = useState();
    const [Color, setColor] = useState();
    const [HedType, setHedType] = useState();


    const Heading = ({level, children, ...props}) => {
        return React.createElement(`h${level}`, props , children)
    }

    return (
        <div className="para_block">
            <div className="prop_div">

            <div className="form_row">
                    <label for="head">Heading Type</label>
                    <select value={HedType} onChange={(e) => setHedType(e.target.value)}>
                    <option value="none">None</option>
                        <option value="1">H1</option>
                        <option value="2">H2</option>
                        <option value="3">H3</option>
                        <option value="4">H4</option>
                        <option value="5">H5</option>
                        <option value="6">H6</option>
                    </select>
                </div>
            
                <div className="form_row">
                    <label for="head">Heading Text</label>
                    <input
                        type="text"
                        id="head"
                        value={HeadText}
                        onChange={(e) => setHeadText(e.target.value)}
                        placeholder="Any Dummy text"
                    />
                </div>

                <div className="form_row">
                    <label for="head">Heading Font Size</label>
                    <input
                        type="number"
                        id="head"
                        value={HeadFontSize}
                        onChange={(e) => setHeadFontSize(e.target.value)}
                        placeholder="Should be numaric value"
                    />
                </div>

                <div className="form_row">
                    <label for="head">Line Height</label>
                    <input
                        type="number"
                        id="head"
                        value={LineHeight}
                        onChange={(e) => setLineHeight(e.target.value)}
                        placeholder="Should be numaric value"
                    />
                </div>

                <div className="form_row">
                    <label for="head">Font Weight</label>
                    <select value={FontWeight} onChange={(e) => setFontWeight(e.target.value)}>
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                    </select>
                   
                </div>
                <div className="form_row">
                    <label for="head">Margin Top</label>
                    <input
                        type="number"
                        id="head"
                        value={MarTop}
                        onChange={(e) => setMarTop(e.target.value)}
                        placeholder="Should be numaric value"
                    /> 
                </div>
                <div className="form_row">
                    <label for="head">Margin Bottom</label>
                    <input
                        type="number"
                        id="head"
                        value={MarBot}
                        onChange={(e) => setMarBot(e.target.value)}
                        placeholder="Should be numaric value"
                    />  
                </div>
                <div className="form_row">
                    <label for="head">Margin Left</label>
                    <input
                        type="number"
                        id="head"
                        value={MarLeft}
                        onChange={(e) => setMarLeft(e.target.value)}
                        placeholder="Should be numaric value"
                    />   
                </div>
                <div className="form_row">
                    <label for="head">Margin Right</label>
                    <input
                        type="number"
                        id="head"
                        value={MarRight}
                        onChange={(e) => setMarRight(e.target.value)}
                        placeholder="Should be numaric value"
                    /> 
                </div>


                


                <div className="form_row">
                    <label for="head">Padding Top</label>
                    <input
                        type="number"
                        id="head"
                        value={PadTop}
                        onChange={(e) => setPadTop(e.target.value)}
                        placeholder="Should be numaric value"
                    /> 
                </div>
                <div className="form_row">
                    <label for="head">Padding Bottom</label>
                    <input
                        type="number"
                        id="head"
                        value={PadBot}
                        onChange={(e) => setPadBot(e.target.value)}
                        placeholder="Should be numaric value"
                    />  
                </div>
                <div className="form_row">
                    <label for="head">Padding Left</label>
                    <input
                        type="number"
                        id="head"
                        value={PadLeft}
                        onChange={(e) => setPadLeft(e.target.value)}
                        placeholder="Should be numaric value"
                    />   
                </div>
                <div className="form_row">
                    <label for="head">Padding Right</label>
                    <input
                        type="number"
                        id="head"
                        value={PadRight}
                        onChange={(e) => setPadRight(e.target.value)}
                        placeholder="Should be numaric value"
                    /> 
                </div>
                <div className="form_row">
                    <label for="head">Font Color</label>
                    <input
                        type="color"
                        id="head"
                        value={Color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="Should be numaric value"
                    /> 
                </div>

            </div>
            <div className="prop_out">
                <Heading level={`${HedType}`} style={{
                    fontSize: `${HeadFontSize}px`, 
                    fontWeight: `${FontWeight}`, 
                    marginTop: `${MarTop}px`, 
                    marginBottom: `${MarBot}px`, 
                    marginLeft: `${MarLeft}px`, 
                    marginRight: `${MarRight}px`,
                    paddingTop: `${PadTop}px`, 
                    paddingBottom: `${PadBot}px`, 
                    paddingLeft: `${PadLeft}px`, 
                    paddingRight: `${PadRight}px`,
                    lineHeight: `${LineHeight}px`,
                    color: `${Color}`
                }}>{HeadText}</Heading>
                <p>
                
                    
                    font-size: {HeadFontSize}px;<br/>
                    font-weight: {FontWeight};<br/>
                    line-height: {LineHeight}px;<br/>
                    margin-top: {MarTop}px;<br/>
                    margin-bottom: {MarBot}px;<br/>
                    margin-left:{MarLeft}px;<br/>
                    margin-right: {MarRight}px;<br/>
                    padding-top: {PadTop}px;<br/>
                    padding-bottom: {PadBot}px;<br/>
                    padding-left:{PadLeft}px;<br/>
                    padding-right: {PadRight}px;<br/>
                    color: {Color}
                </p>
            </div>
        </div>
    )
}

export default Heading
