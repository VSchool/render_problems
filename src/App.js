import React, { Fragment } from 'react'
import Toggle from './shared/Toggle'
import Form from './shared/Form'
import NameForm from './NameForm'

const App = () => {
    return (
        <div className="container">
            <Toggle render={({ toggle }) =>                       
                <Fragment>

                    <button>                                     
                        {isToggled ? "Close" : "Edit"}
                    </button>

                    {isToggled &&
                        <Form
                            inputs={ name: "", age: "" }           
                            submit={inputs => {
                                alert(`My name is ${inputs.name} and I am ${inputs.age}!`)
                                toggle()
                            }}
                            render={props => <NameForm/>}          
                            reset
                        />
                    }

                </Fragment>
            } />
        </div>
    )
}

export default App