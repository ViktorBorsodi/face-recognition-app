import React, {Component} from 'react'
import './ImageLinkForm.css'

class ImageLinkForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }
    render(){
        return (
            <div>
                <p className='f3 center'>This Magic Brain will detect faces in your pictures. Paste the address of an image to the input field!</p>
                <div className='center'>
                    <div className='pa4 br3 shadow-5 center form'>
                        <input type="text" className='f4 pa2 w-70' onChange={ (e) => {this.setState({input: e.target.value})} } />
                        <button 
                            className='w-30 grow f4 pv2 dib white bg-light-purple'
                            onClick={ () => {this.props.onButtonSubmit(this.state.input)} }
                        >
                            Detect
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageLinkForm