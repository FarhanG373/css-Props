import React, { Component } from 'react'
import '../../App.css';
export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ImgUrl: 'https://images.pexels.com/photos/3551201/pexels-photo-3551201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            ImgWidth: '',
            ImgHeight: '',
            ImgObject: '',
            ImgBorRadius: '',


        }
        this.ImageVal = this.ImageVal.bind(this);
    }
    ImageVal = (e) => {
        let nm = e.target.name;
        let vl = e.target.value;
        this.setState({[nm]:vl});
        console.log(vl);
    }
    
    render() {
        
        return (
            <div className="image_main">
                <div className="image_style">
                    <div className='form_row'>
                        <label>Image Url</label>
                        <input
                            type="text"
                            onChange={this.ImageVal}
                            name='ImgUrl'
                        />
                    </div>
                    <div className='form_row'>
                        <label>Image Width</label>
                        <input
                            type="number"
                            onChange={this.ImageVal}
                            name='ImgWidth'
                        />
                    </div>
                    <div className='form_row'>
                        <label>Image Height</label>
                        <input
                            type="number"
                            onChange={this.ImageVal}
                            name='ImgHeight'
                        />
                    </div>

                    <div className='form_row'>
                        <label>Image Object</label>
                        <input
                            type="text"
                            onChange={this.ImageVal}
                            name='ImgObject'
                        />
                    </div>
                    <div className='form_row'>
                        <label>Image Radius</label>
                        <input
                            type="number"
                            onChange={this.ImageVal}
                            name='ImgBorRadius'
                        />
                    </div>
                </div>
                <div className="image_out">
                    <div className="image_outer">
                        <img src={this.state.ImgUrl} alt="url"
                        style={{
                            width: `${this.state.ImgWidth}px`,
                            height: `${this.state.ImgHeight}px`,
                            objectFit: `${this.state.ImgObject}`,
                            borderRadius:`${this.state.ImgBorRadius}px`
                        }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
