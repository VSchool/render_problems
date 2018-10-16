import React, { Fragment } from 'react'
import Toggle from './shared/Toggle'
import Form from './shared/Form'
import NameForm from './NameForm'

const App = () => {
    return (
        <div className="container">
            <Toggle render={({ toggle, isToggled }) =>
                <Fragment>

                    <button onClick={ toggle }>
                        { isToggled ? "Close" : "Edit" }
                    </button>

                    { isToggled && 
                        <Form 
                            inputs={{ name: '', age: '' }}
                            submit={inputs => alert(`My name is ${inputs.name} and I am ${inputs.age}!`)}
                            render={props => <NameForm {...props}/>}
                            toggle={ toggle }
                            reset
                        />
                    }

                </Fragment>
            }/>
        </div>
    )
}

export default App