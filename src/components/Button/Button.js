import React, { Component } from 'react'
import '../../App.css';
export default class Button extends Component {
    constructor(props){
        super(props);
        this.state={
            ButBg:'',
            BtnBorWidth:'',
            BtnBorStyl:'',
            BtnColr:'',
            BtnBorColr:'',
            BtnBorRedius: '0',
            BtnFontSize: '',
            BtnLineHeight:'',
            BtnPadLR:'',
            BtnPadTB:''
        }
        this.BtnVal = this.BtnVal.bind(this);
    }

    BtnVal = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
        // console.log(value + name);
    }
    render() {
        return (
            <div className="BGuttonMain">
                <div className="ButtonSetting">
                <div className="form_row">
                    <label for="range">Button Background color</label>
                    <input
                        type="color" 
                        id="range"
                        onChange={this.BtnVal}
                        name='ButBg'
                    />
                </div>
                <div className="form_row">
                    <label for="range">Button Text color</label>
                    <input
                        type="color" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnColr'
                    />
                </div>
                <div className="form_row">
                    <label for="range">Button Border Width</label>
                    <input
                        type="number" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnBorWidth'
                    />
                </div>
                <div className="form_row">
                    <label for="range">Button Border Style</label>
                    <select name='BtnBorStyl' onChange={this.BtnVal}>
                        <option value="solid" name='solid'>solid</option>
                        <option value="none" name='none'>none</option>
                        <option value="hidden" name='hidden'>hidden</option>
                        <option value="dotted" name='dotted'>dotted</option>
                        <option value="dashed" name='dashed'>dashed</option>
                        <option value="double" name='double'>double</option>
                        <option value="groove" name='groove'>groove</option>
                        <option value="inset" name='inset'>inset</option>
                        <option value="outset" name='outset'>outset</option>
                        <option value="initial" name='initial'>initial</option>
                        <option value="inherit" name='inherit'>inherit</option>
                    </select>


                </div>



                

                <div className="form_row">
                    <label for="range">Button Border Color</label>
                    <input
                        type="color" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnBorColr'
                    />
                </div>

                <div className="form_row">
                    <label for="range">Button Border radius</label>
                    <input
                        type="range" 
                        id="range"
                        min="0"
                        max="200"
                        onChange={this.BtnVal}
                        name='BtnBorRedius'
                    />
                </div>

                <div className="form_row">
                    <label for="range">Button Font size</label>
                    <input
                        type="number" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnFontSize'
                    />
                </div>

                <div className="form_row">
                    <label for="range">Button Font Line height</label>
                    <input
                        type="number" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnLineHeight'
                    />
                </div>
                <div className="form_row">
                    <label for="range">Button top bottom padding</label>
                    <input
                        type="number" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnPadTB'
                    />
                </div>
                <div className="form_row">
                    <label for="range">Button left right padding</label>
                    <input
                        type="number" 
                        id="range"
                        onChange={this.BtnVal}
                        name='BtnPadLR'
                    />
                </div>


                </div>
                <div className="ButtonView">
                    <button
                    style={{
                        backgroundColor:`${this.state.ButBg}`,
                        color: `${this.state.BtnColr}`,
                        borderWidth: `${this.state.BtnBorWidth}px`,
                        borderStyle:`${this.state.BtnBorStyl}`,
                        borderColor: `${this.state.BtnBorColr}`,
                        borderRadius:`${this.state.BtnBorRedius}px`,
                        fontSize:`${this.state.BtnFontSize}px`,
                        lineHeight:`${this.state.BtnLineHeight}px`,
                        padding: `${this.state.BtnPadTB}px ${this.state.BtnPadLR}px`
                    }}
                    >Read More</button>

                    <br/><br/>
                    background-color: {this.state.ButBg}<br/>
                    color: {this.state.BtnColr}<br/>
                    border-width:{this.state.BtnBorWidth}px<br/>
                    border-style: {this.state.BtnBorStyl}<br/>
                    border-color: {this.state.BtnBorColr}<br/>
                    border-radius: {this.state.BtnBorRedius}px<br/>
                    font-size: {this.state.BtnFontSize}px<br/>
                    line-height: {this.state.BtnLineHeight}px<br/>
                    padding: {this.state.BtnPadTB}px {this.state.BtnPadLR}px<br/>
                </div>
            </div>
        )
    }
}
