import React, {Component} from 'react';
import './App.css';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

const particlesOptions = {
	particles: {
		number: {
			value: 3,
			density: {
				enable: true,
				value_area: 8
			}
		}
	}
}

const app = new Clarifai.App({
	apiKey: process.env.REACT_APP_API_KEY
   });

class App extends Component {
	constructor(){
		super()
		this.state = {
			imageURL: '',
			box: []
		}
	}
	calculateFaceLocation = data => {
		const faces = data.outputs[0].data.regions
		return faces.map(face => {
			const clarifaiFace = face.region_info.bounding_box
			const image = document.getElementById('input-image')
			const width = Number(image.width)
			const height = Number(image.height)
			return {
				leftCol: clarifaiFace.left_col * width,
				topRow: clarifaiFace.top_row * height,
				rightCol: width - (clarifaiFace.right_col * width),
				bottomRow: height - (clarifaiFace.bottom_row * height)
			}
		})
	}
	displayFaceBox = box => {
		this.setState({box})
	}
	onButtonSubmit = input => {
		this.setState({imageURL: input})
		app.models
		.predict(
			Clarifai.FACE_DETECT_MODEL,
			input
		)
		.then( response => this.displayFaceBox( this.calculateFaceLocation(response) ) )
		.catch( err => console.log(err) )
	}
	render(){
		const {imageURL, box} = this.state
		return (
			<div className="App">
				<Particles className='particles' params={particlesOptions}/>
				<Logo/>
				<ImageLinkForm onButtonSubmit={this.onButtonSubmit} />
				<FaceRecognition imageUrl={imageURL} box={box} />
			</div>
		)
	}
}

export default App;
