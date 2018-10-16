import { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputs: props.inputs
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submit(this.state.inputs)
        this.props.reset && this.setState({ inputs: this.props.inputs })
        this.props.toggle()
    }

    render(){
        return this.props.render({
            inputs: this.state.inputs,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
        })
    }
}