import './App.scss';
import './assets/icons/style.css'
import Input from "./components/Input";
import React from "react";


class App extends React.Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            email: '',
        }
    }

    handleChange = (e) => {
        const {user,errors} = this.state
        user[e.target.name] = e.target.value
        errors[e.target.name] = ''
        this.setState({user})
    }


    registerUser = () => {
        console.log(this.state.user)
        if (this.validation()) {
            console.log('user registered')
        }
    }

    validation = () => {
        let isValidate = true
        const {user} = this.state
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
        }

        if (!user.firstName.trim().length) {
            isValidate = false
            errors.firstName = 'First name field is required'
        }
        if (!user.lastName.trim().length) {
            isValidate = false
            errors.lastName = 'Last name field is required'
        }
        if (!user.email.trim().length) {
            isValidate = false
            errors.email = 'Email field is required'
        }
        if (user.email.length && !this.validateEmail(user.email)) {
            isValidate = false
            errors.email = 'Incorrect email value'
        }
        this.setState({errors})
        return isValidate
    }

    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    handleChangeColor = (e)=>{
        console.log(e.target.value)
        document.body.style.backgroundColor =e.target.value
    }

    render() {
        const {errors} = this.state

        return <>

            <div className={'form'}>
                <select name="" id="">
                    <option value="">labe l1</option>
                    <option value="">labe l1</option>
                    <option value="">labe l1</option>
                    <option value="">labe l1</option>
                    <option value="">labe l1</option>
                </select>
                <input type="color" onChange={this.handleChangeColor}/>
                <div className={`G-input`}>
                    <label>
                        <input name={'firstName'}
                               placeholder={'firstName'}
                               onChange={this.handleChange}
                        />
                        {errors.firstName?<p className={'P-error'}>{errors.firstName}</p>:null}
                    </label>
                </div>
                <div className={`G-input`}>
                    <label>
                        <input name={'lastName'} placeholder={'lastName'}
                               onChange={this.handleChange}
                        />
                        {errors.lastName?<p className={'P-error'}>{errors.lastName}</p>:null}

                    </label>
                </div>
                <div className={`G-input`}>
                    <label>
                        <input name={'email'} placeholder={'email'}
                               onChange={this.handleChange}
                        />
                        {errors.email?<p className={'P-error'}>{errors.email}</p>:null}

                    </label>
                </div>
                <button onClick={this.registerUser}>Registration</button>
            </div>
            <div className='form'>
                <Input type={'number'}
                       placeholder={'(94) 00-00-00'}
                       label={'Phone Number'}/>
                <Input
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    className={'G-width-50'}
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    className={'G-width-50'}
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    className={'G-width-50'}
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    className={'G-width-50'}
                    placeholder={'First Name'}
                    label={'First Name'}/>

                <Input
                    className={'G-width-33'}
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    className={'G-width-33'}
                    placeholder={'First Name'}
                    label={'First Name'}/>
                <Input
                    className={'G-width-33'}
                    placeholder={'First Name'}
                    label={'First Name'}/>
                {/*<UserData />*/}
                {/*<DateInput />*/}
                {/*<AddressData />*/}
                {/*<Button />*/}
            </div>
        </>
    }
}

export default App;
