import style from './Login.module.css'

const Login = () => {
    return <div className={style.login}>
        <div><b>Login:</b></div>
        <div>
            <input type="text" placeholder="Write your email" />
        </div>
        <div><b>Password:</b></div>
        <div>
            <input type="password" placeholder="Write your password" /></div>
        <div>
            <button onClick={() => alert("You entered!")}>Login</button> {" "}
            <button onClick={() => alert("You are successfully registering!")}>Registration</button>
        </div>
    </div>
}

export default Login;