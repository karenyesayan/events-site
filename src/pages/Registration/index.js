import { useState } from "react"
import instance from "../../api/axios"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const Registration = ({ navigateTo }) => {
    const navigate = useNavigate()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const [newUserName, setNewUserName] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newUserPass, setNewUserPass] = useState("");
    const [newUserEwallet, setNewUserEwallet] = useState("");

    const id = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(2);

    let obj = {

        "name": newUserName,
        "email": newUserEmail,
        "pass": newUserPass,
        "ewallet": newUserEwallet
    }
    const submit = () => {
        instance.post("/users", { id: id(), ...obj });
        navigate('/myaccount');
        reset();

    }

    return (

        <div className={"upcoming"}>
            <title className={"login-registration"}>Registration</title>
            <form className={"form"} onSubmit={handleSubmit(submit)}>

                <div className={"group"}>
                    <label className={"label"}> Name
                        <input
                            className={"input"}
                            type={"text"}
                            {...register("name", { reguired: true })}
                            onChange={e => setNewUserName(e.target.value)}
                        />
                    </label>
                    <div>
                        {errors.name && <p style={{ color: "red" }}>Please enter your name</p>}
                    </div>
                </div>
                <div className={"group"}>
                    <label className={"label"}> Email
                        <input
                            className={"input"}
                            type={"email"}
                            {...register("email", { required: true })}
                            onChange={e => setNewUserEmail(e.target.value)}
                        />
                    </label>
                    <div>
                        {errors?.email && <p style={{ color: "red" }}>Please enter your email</p>}
                    </div>
                </div>

                <div className={"group"}>
                    <label className={"label"}> Password
                        <input
                            className={"input"}
                            type={"password"}
                            {...register("pass", { required: true, minLength: 4 })}
                            onChange={e => setNewUserPass(e.target.value)}
                        />
                    </label>
                    <div>
                        {errors?.pass && <p style={{ color: "red" }}>Please enter your password</p>}
                    </div>
                </div>
                <div className={"group"}>
                    <label className={"label"}> E-wallet
                        <input
                            className={"input"}
                            type={"number"}
                            {...register("ewallet", { required: true, })}
                            onChange={e => setNewUserEwallet(e.target.value)}
                        />
                    </label>
                    <div>
                        {errors?.ewallet && <p style={{ color: "red" }}>Please enter your password</p>}
                    </div>
                </div>

                <input className={"button"} type={"submit"} />

                <p className="p">Already have an account?</p>
                <center>
                    <button className={"button"} onClick={() => { navigate('/myaccount') }}
                    >LOGIN</button>
                </center>
            </form>

        </div>
    )
}

export default Registration;