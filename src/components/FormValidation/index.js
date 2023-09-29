import { useState } from "react";

const useForm = ()=>{
    const errors = {};

    const register = (name, validation)=>{
        console.log(name);
        console.log(validation);
    }
    const handleSubmit = (callback)=>{
        return (event)=>{
            event.preventDefault();
            callback();
        }
    }
    return {
        handleSubmit: handleSubmit,
        register: register,
        formState: {errors}
    }
}

const FormValidation = () => {
    
    const {handleSubmit, register, formState: {errors}} = useForm();
    console.log(errors);

    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <div className="formValidation">
            <h1>FormValidation</h1>
            <form>
                <div>
                    <label className="label">Name</label>
                    <input type="text" placeholder="Name"  name="name" {...register("name", {required: true})}/>
                    <input type="text" placeholder="Name"  name="age" {...register("age", {required: true})}/>
                </div>
                <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;