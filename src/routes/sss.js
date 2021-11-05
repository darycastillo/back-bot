
return ( <div className="card">
<div className = "card-header"> { " " } {  error && < p className = "error" > { error } </p>} <h1> Sign Up </h1> { " " } </div>{" "} 
<div className = "card-body" > < form onSubmit = { handleSubmit } > <input type = "email" placeholder = "Email"onChange = { handleEmail } /> {" "} 
< input type = "password" placeholder = "Password" onChange = { handlePassword }/>{" "} 
<input
    type = "password"
    placeholder = "Confirm Password"
    onChange = { handleConfirmPassword } />{" "} 
    <input type = "submit"value = "Sign Up" />
        </form>{" "} 
        <p > { " " } Do you already have an account ? <Link to = "/login"> Login </Link>{" "} </p> 
        </div> </div>
);