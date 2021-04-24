import React, { Component } from 'react'
import '../../App.css';
export default class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paraVal:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            paraHeight: '',
            FontSize: '',
            PadTop: '',
            PadBot: '',
            PadLeft: '',
            PadRight: '',
            MarTop: '',
            MarBot: '',
            MarLeft: '',
            MarRight: '',
            Color:''

        };
        this.paraValue = this.paraValue.bind(this);
      }

      paraValue = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      

    render() {
        return (
            <div className="para">
                <div className="para_value">
                    <div className="form_row">
                        <label for="range">Paragraph Text</label>
                        <textarea 
                        id="range"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        name='paraVal'
                        />
                    </div>

                    <div className="form_row">
                    <label for="head">Line Height</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='paraHeight'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Font Size</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='FontSize'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Padding Top</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='PadTop'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Padding Bottom</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='PadBot'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Padding Left</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='PadLeft'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Padding Right</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='PadRight'
                    />
                    </div>



                    <div className="form_row">
                    <label for="head">Margin Top</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='MarTop'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Margin Bottom</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='MarBot'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Margin Left</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='MarLeft'
                    />
                    </div>
                    <div className="form_row">
                    <label for="head">Margin Right</label>
                    <input
                        type="number"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='MarRight'
                    />
                    </div>

                    <div className="form_row">
                    <label for="head">Color</label>
                    <input
                        type="color"
                        id="head"
                        // value={this.state.value}
                        onChange={this.paraValue}
                        placeholder="Should be numaric value"
                        name='Color'
                    />
                    </div>





                </div>
                <div class="para_output">
                    <p style={{
                        lineHeight: `${this.state.paraHeight}px`, 
                        fontSize: `${this.state.FontSize}px`, 
                        paddingTop:`${this.state.PadTop}px`,
                        paddingBottom:`${this.state.PadBot}px`,
                        paddingLeft:`${this.state.PadLeft}px`,
                        paddingRight:`${this.state.PadRight}px`,
                        marginTop:`${this.state.MarTop}px`,
                        marginBottom:`${this.state.MarBot}px`,
                        marginLeft:`${this.state.MarLeft}px`,
                        marginRight:`${this.state.MarRight}px`,
                        color:`${this.state.Color}`
                        }}>{this.state.paraVal}</p>
                    <p>
                        line-height: {this.state.paraHeight}px;<br/>
                        font-size: {this.state.FontSize}px;<br/>
                        padding-top: {this.state.PadTop}px;<br/>
                        padding-bottom: {this.state.PadBot}px;<br/>
                        padding-left: {this.state.PadLeft}px;<br/>
                        padding-right: {this.state.PadRight}px;<br/>
                        margin-top: {this.state.MarTop}px;<br/>
                        margin-bottom: {this.state.MarBot}px;<br/>
                        margin-left: {this.state.MarLeft}px;<br/>
                        margin-right: {this.state.MarRight}px;<br/>
                        color: {this.state.Color}
                    </p>
                </div>
            </div>
        )
    }
}
