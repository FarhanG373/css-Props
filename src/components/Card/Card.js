import React, { Component } from 'react'
import '../../App.css';
export default class Card extends Component {
    constructor(props){
        super(props);
        this.state= {
            CardBorRadius:'',
            cardBorStyle:'',
            cardBorWidth:'',
            cardBorColor:'',
            CardImg:'https://images.pexels.com/photos/3551201/pexels-photo-3551201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            cardImgObject:'cover',
            CardImgWid:'100',
            CardImgHei:'285',
            CardHeadText:'This is Heading',
            CardHeadAlign:'',
            CardHedMarTop:'0',
            CardHedMarBot:'0',
            CardHedMarLeft:'0',
            CardHedMarRight:'0',
            CardHedPadTop:'0',
            CardHedPadBot:'0',
            CardHedPadLeft:'0',
            CardHedPadRight:'0',
            CardHedFontSize:'20',
            CardHedFontWeight:'',
            CardHedLineHeight:'26',
            CardHedColor:'',
            CardHedParaText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            CardParaMarTop:'0',
            CardParaMarBot:'0',
            CardParaMarLeft:'0',
            CardParaMarRight:'0',
            CardParaPadTop:'0',
            CardParaPadBot:'0',
            CardParaPadLeft:'0',
            CardParaPadRight:'0',
            CardParaFontSize:'16',
            CardParaFontWeight:'',
            CardParaLineHeight:'22',
            CardParaAlign:'',
            CardParaColor:'',
            CardButText:'Learn more',
            CardButMarTop:'0',
            CardButMarBot:'0',
            CardButMarLeft:'0',
            CardButMarRight:'0',
            CardButPadTop:'0',
            CardButPadBot:'0',
            CardButPadLeft:'0',
            CardButPadRight:'0',
            CardButFontSize:'16',
            CardButFontWeight:'',
            CardButBG:'',
            CardButColor: '',
            CardButBorRadius:'',
            cardButBorStyle:'',
            cardButBorWidth:'',
            cardButBorColor:'',
            CardButAlign: ''

        }
        this.CardVal = this.CardVal.bind(this);
    }
    CardVal = (e) => {
        let nm = e.target.name;
        let val = e.target.value;
        this.setState({[nm]:val})
    }
    render() {
        return (
            <div className="card_main">
                <div className="card_setting">
                    <h2 style={{marginBottom: '20px', float: 'left', width: '100%', textTransform:'uppercase'}}>Card Style</h2>
                        <div className="form_row">
                            <label>Card Redius</label>
                            <input
                                type="number"
                                placeholder="Numeric value"
                                name='CardBorRadius'
                                onChange={this.CardVal}
                            />
                        </div>
                        <div className="form_row">
                            <label>Card Border Style</label>
                            <select name='cardBorStyle' onChange={this.CardVal}>
                            <option value="none" name='none'>none</option>
                                <option value="hidden" name='hidden'>hidden</option>
                                <option value="solid" name='solid'>solid</option>
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
                            <label>Card Border Width</label>
                            <input
                                type="number"
                                placeholder="Numeric value"
                                name='cardBorWidth'
                                onChange={this.CardVal}
                            />
                        </div>
                        <div className="form_row">
                            <label>Card Border Color</label>
                            <input
                                type="Color"
                                name='cardBorColor'
                                onChange={this.CardVal}
                            />
                        </div>
                        <hr/>
                        <h2 style={{marginBottom: '20px', float: 'left', width: '100%', textTransform:'uppercase'}}>Card Image Style</h2>
                        <div className="form_row">
                            <label>Card Image</label>
                            <input
                                type="text"
                                name='CardImg'
                                onChange={this.CardVal}
                                placeholder='Image url'
                            />
                        </div>
                        <div className="form_row">
                            <label>Card Image Object</label>
                            <select name='cardImgObject' onChange={this.CardVal}>
                            <option value="none" name='none'>none</option>
                                <option value="cover" name='cover'>cover</option>
                                <option value="content" name='content'>content</option>
                            </select>
                        </div>
                        <div className="form_row">
                            <label>Card Image Width</label>
                            <input
                                type="number"
                                name='CardImgWid'
                                onChange={this.CardVal}
                                placeholder='Image Width'
                            />
                        </div>
                        <div className="form_row">
                            <label>Card Image Height</label>
                            <input
                                type="number"
                                name='CardImgHei'
                                onChange={this.CardVal}
                                placeholder='Image Height'
                            />
                        </div>


                        <hr/>
                        <h2 style={{marginBottom: '20px', float: 'left', width: '100%', textTransform:'uppercase'}}>Card heading Style</h2>
                        <div className="form_row">
                            <label>Heading Text</label>
                            <input
                                type="text"
                                name='CardHeadText'
                                onChange={this.CardVal}
                                placeholder='Heading Text'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Font Size</label>
                            <input
                                type="number"
                                name='CardHedFontSize'
                                onChange={this.CardVal}
                                placeholder='Heading Text'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Line Heighte</label>
                            <input
                                type="number"
                                name='CardHedLineHeight'
                                onChange={this.CardVal}
                                placeholder='Heading Text'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Font Weight</label>
                            <select name='CardHedFontWeight' onChange={this.CardVal}>
                            <option value="bold" name='bold'>Bold</option>
                                <option value="normal" name='normal'>Normal</option>
                                
                            </select>
                        </div>
                        <div className="form_row">
                            <label>Heading Text Align</label>
                            <select name='CardHedAlign' onChange={this.CardVal}>
                                <option value="left" name='left'>Left</option>
                                <option value="center" name='center'>Center</option>
                                <option value="right" name='right'>Right</option>
                            </select>
                        </div>
                        <div className="form_row">
                            <label>Heading Margin top</label>
                            <input
                                type="number"
                                name='CardHedMarTop'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Margin Bottom</label>
                            <input
                                type="number"
                                name='CardHedMarBot'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Margin Left</label>
                            <input
                                type="number"
                                name='CardHedMarLeft'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Margin Right</label>
                            <input
                                type="number"
                                name='CardHedMarRight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Padding top</label>
                            <input
                                type="number"
                                name='CardHedPadTop'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Padding Bottom</label>
                            <input
                                type="number"
                                name='CardHedPadBot'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Padding Left</label>
                            <input
                                type="number"
                                name='CardHedPadLeft'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Padding Right</label>
                            <input
                                type="number"
                                name='CardHedPadRight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Heading Color</label>
                            <input
                                type="color"
                                name='CardHedColor'
                                onChange={this.CardVal}
                            />
                        </div>

                        <hr/>
                        <h2 style={{marginBottom: '20px', float: 'left', width: '100%', textTransform:'uppercase'}}>Card Paragraph Style</h2>
                        <div className="form_row" style={{width: '96%'}}>
                            <label>Paragraph Text</label>
                            <textarea
                                name='CardHedParaText'
                                onChange={this.CardVal}
                                style={{width: '100%', height: '80px',padding: '10px'}}
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Margin Top</label>
                            <input
                                type="number"
                                name='CardParaMarTop'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Margin Bottom</label>
                            <input
                                type="number"
                                name='CardParaMarBot'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Margin Left</label>
                            <input
                                type="number"
                                name='CardParaMarLeft'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Margin Right</label>
                            <input
                                type="number"
                                name='CardParaMarRight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Padding Top</label>
                            <input
                                type="number"
                                name='CardParaPadTop'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Padding Bottom</label>
                            <input
                                type="number"
                                name='CardParaPadBot'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Padding Left</label>
                            <input
                                type="number"
                                name='CardParaPadLeft'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Padding Right</label>
                            <input
                                type="number"
                                name='CardParaPadRight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Font Size</label>
                            <input
                                type="number"
                                name='CardParaFontSize'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Line Heighte</label>
                            <input
                                type="number"
                                name='CardParaLineHeight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Paragraph Font Weight</label>
                            <select name='CardParaFontWeight' onChange={this.CardVal}>
                            
                                <option value="normal" name='normal'>Normal</option>
                                <option value="bold" name='bold'>Bold</option>
                            </select>
                        </div>
                        <div className="form_row">
                            <label>Paragraph Text Align</label>
                            <select name='CardParaAlign' onChange={this.CardVal}>
                                <option value="left" name='left'>Left</option>
                                <option value="center" name='center'>Center</option>
                                <option value="right" name='right'>Right</option>
                            </select>
                        </div>
                        
                        
                        <hr/>
                        <h2 style={{marginBottom: '20px', float: 'left', width: '100%', textTransform:'uppercase'}}>Card Button Style</h2>

                        <div className="form_row">
                            <label>Button Text</label>
                            <input
                                type="text"
                                name='CardButText'
                                onChange={this.CardVal}
                                placeholder='Button text'
                            />
                        </div>

                        <div className="form_row">
                            <label>Button Margin Top</label>
                            <input
                                type="number"
                                name='CardButMarTop'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Margin Bottom</label>
                            <input
                                type="number"
                                name='CardButMarBot'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Margin Left</label>
                            <input
                                type="number"
                                name='CardButMarLeft'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Margin Right</label>
                            <input
                                type="number"
                                name='CardButMarRight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Padding Top</label>
                            <input
                                type="number"
                                name='CardButPadTop'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Padding Bottom</label>
                            <input
                                type="number"
                                name='CardButPadBot'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Padding Left</label>
                            <input
                                type="number"
                                name='CardButPadLeft'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Padding Right</label>
                            <input
                                type="number"
                                name='CardButPadRight'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Font Size</label>
                            <input
                                type="number"
                                name='CardButFontSize'
                                onChange={this.CardVal}
                                placeholder='Numeric value'
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Font Weight</label>
                            <select name='CardButFontWeight' onChange={this.CardVal}>
                            
                                <option value="normal" name='normal'>Normal</option>
                                <option value="bold" name='bold'>Bold</option>
                            </select>
                        </div>
                        <div className="form_row">
                            <label>Button Background</label>
                            <input
                                type="color"
                                name='CardButBG'
                                onChange={this.CardVal}
                            />
                        </div>
                        <div className="form_row">
                            <label>Button Font Color</label>
                            <input
                                type="color"
                                name='CardButColor'
                                onChange={this.CardVal}
                            />
                        </div>

                        <div className="form_row">
                            <label>Card Button Redius</label>
                            <input
                                type="number"
                                placeholder="Numeric value"
                                name='CardButBorRadius'
                                onChange={this.CardVal}
                            />
                        </div>
                        <div className="form_row">
                            <label>Card Button Border Style</label>
                            <select name='cardButBorStyle' onChange={this.CardVal}>
                            <option value="none" name='none'>none</option>
                                <option value="hidden" name='hidden'>hidden</option>
                                <option value="solid" name='solid'>solid</option>
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
                            <label>Card Button Border Width</label>
                            <input
                                type="number"
                                placeholder="Numeric value"
                                name='cardButBorWidth'
                                onChange={this.CardVal}
                            />
                        </div>
                        <div className="form_row">
                            <label>Card Button Border Color</label>
                            <input
                                type="Color"
                                name='cardButBorColor'
                                onChange={this.CardVal}
                            />
                        </div>

                        <div className="form_row">
                            <label>Card button Align</label>
                            <select name='CardButAlign' onChange={this.CardVal}>
                                <option value="left" name='left'>Left</option>
                                <option value="center" name='center'>Center</option>
                                <option value="right" name='right'>Right</option>
                            </select>
                        </div>


                </div>
                <div className="card_output">
                    <div style={{
                        borderRadius:`${this.state.CardBorRadius}px`,
                        borderStyle:`${this.state.cardBorStyle}`,
                        borderWidth:`${this.state.cardBorWidth}px`,
                        borderColor:`${this.state.cardBorColor}`,
                        overflow:'hidden',
                        maxWidth: '600px',
                        margin: '0 auto',
                        minWidth: '320px'
                    }}>
                        <div className="cardImg">
                            <img src={this.state.CardImg} alt="URl" style={{
                                objectFit:`${this.state.cardImgObject}`,
                                width:`${this.state.CardImgWid}%`,
                                height:`${this.state.CardImgHei}px`,
                            }}
                            />
                            <h3 style={{
                                marginTop:`${this.state.CardHedMarTop}px`,
                                marginBottom:`${this.state.CardHedMarBot}px`,
                                marginLeft:`${this.state.CardHedMarLeft}px`,
                                marginRight:`${this.state.CardHedMarRight}px`,
                                paddingTop:`${this.state.CardHedPadTop}px`,
                                paddingBottom:`${this.state.CardHedPadBot}px`,
                                paddingLeft:`${this.state.CardHedPadLeft}px`,
                                paddingRight:`${this.state.CardHedPadRight}px`,
                                fontSize:`${this.state.CardHedFontSize}px`,
                                fontWeight:`${this.state.CardHedFontWeight}`,
                                lineHeight:`${this.state.CardHedLineHeight}px`,
                                textAlign: `${this.state.CardHedAlign}`,
                                color:`${this.state.CardHedColor}`
                            }}>{this.state.CardHeadText}</h3>
                            <p style={{
                                marginTop:`${this.state.CardParaMarTop}px`,
                                marginBottom:`${this.state.CardParaMarBot}px`,
                                marginLeft:`${this.state.CardParaMarLeft}px`,
                                marginRight:`${this.state.CardParaMarRight}px`,
                                paddingTop:`${this.state.CardParaPadTop}px`,
                                paddingBottom:`${this.state.CardParaPadBot}px`,
                                paddingLeft:`${this.state.CardParaPadLeft}px`,
                                paddingRight:`${this.state.CardParaPadRight}px`,
                                fontSize:`${this.state.CardParaFontSize}px`,
                                fontWeight:`${this.state.CardParaFontWeight}`,
                                lineHeight:`${this.state.CardParaLineHeight}px`,
                                textAlign: `${this.state.CardParaAlign}`,
                                color:`${this.state.CardParaColor}`
                            }}>{this.state.CardHedParaText}</p>

                        <div style={{textAlign:`${this.state.CardButAlign}`}}>
                            <button style={{
                                marginTop:`${this.state.CardButMarTop}px`,
                            marginBottom:`${this.state.CardButMarBot}px`,
                            marginLeft:`${this.state.CardButMarLeft}px`,
                            marginRight:`${this.state.CardButMarRight}px`,
                            paddingTop:`${this.state.CardButPadTop}px`,
                                paddingBottom:`${this.state.CardButPadBot}px`,
                                paddingLeft:`${this.state.CardButPadLeft}px`,
                                paddingRight:`${this.state.CardButPadRight}px`,
                                fontSize:`${this.state.CardButFontSize}px`,
                                fontWeight:`${this.state.CardButFontWeight}`,
                                backgroundColor:`${this.state.CardButBG}`,
                                color:`${this.state.CardButColor}`,
                                borderRadius:`${this.state.CardButBorRadius}px`,
                        borderStyle:`${this.state.cardButBorStyle}`,
                        borderWidth:`${this.state.cardButBorWidth}px`,
                        borderColor:`${this.state.cardButBorColor}`,
                        }}>{this.state.CardButText}</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
