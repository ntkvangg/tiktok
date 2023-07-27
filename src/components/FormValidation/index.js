import { useState } from "react";
const FormValidation = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [formValid, setFormValid] = useState(false);

    const handleInputChange = (e) => {    
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if(e.target.name === "name"){
            if(e.target.value.length < 3){
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "Name must be at least 3 characters"
                });
            }else{
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: ""
                });
            }
        }else if(e.target.name === "email"){ 
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!regex.test(e.target.value)){
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "Email is invalid"
                });
            }else{
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: ""
                });
            }
        }else if(e.target.name === "password"){
            if(e.target.value.length < 6){
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "Password must be at least 6 characters"
                });
            } else if(e.target.value !== formData.confirmPassword){
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "Password must be match"
                });
            }else{
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "",
                    confirmPassword: ""
                });
            }
        }else if(e.target.name === "confirmPassword"){
            if(e.target.value.length < 6){
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "Password must be at least 6 characters"
                });
            }else if(e.target.value !== formData.password){
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "Password must be match"
                });
            }else{
                setErrorMessages({
                    ...errorMessages,
                    [e.target.name]: "",
                    password: ""
                });
            }
        }

        
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        for(let key in errorMessages){
            if(errorMessages[key] !== ""){
                formValid(true)
                return;
            }
        }
    };
    return (
        <div className="formValidation">
            <h1>FormValidation</h1>
            <form onSubmit={onSubmitForm}>
                <div>
                    <label className="label">Name</label>
                    <input type="text" placeholder="Name" onChange={handleInputChange} name="name"/>
                    {errorMessages.name ? <p className="text-error">{errorMessages.name}</p> : <></>}
                </div>
                <div>
                    <label className="label">Email</label>
                    <input type="text" placeholder="Email" onChange={handleInputChange} name="email"/>
                    {errorMessages.email ? <p className="text-error">{errorMessages.email}</p> : <></>}
                </div>
                <div>
                    <label className="label">Password</label>
                    <input type="password" placeholder="Password" onChange={handleInputChange} name="password"/>
                    {errorMessages.password ? <p className="text-error">{errorMessages.password}</p> : <></>}
                </div>
                <div>
                    <label className="label">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" onChange={handleInputChange} name="confirmPassword"/>
                    {errorMessages.confirmPassword ? <p className="text-error">{errorMessages.confirmPassword}</p> : <></>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;