import React ,{Component} from 'react'
import './Login.css'; //


class Login extends Component{

constructor(props){
super(props);
this.state = {
usuario: '',
password:''
};
this.handleLogin = this.handleLogin.bind(this);
this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
this.handleChangePassword = this.handleChangePassword.bind(this);
}
handleChangeUsuario(event) {
this.setState({usuario: event.target.value});
}

handleChangePassword(event) {
this.setState({password: event.target.value});
}

handleLogin(event) {
var that = this
try {
// URl del servicio 
fetch('http://localhost:3000/users/login', {
method: 'post',
body:JSON.stringify(this.state),
headers:{
'Content-Type': 'application/json'
}
}).then(function (response) {
return response.json(); //response.json() is resolving its promise. It waits for the body to load
}).then(function (responseData) {
var result = JSON.parse(JSON.stringify(responseData))
console.log(result)
if (result.status==="true"){
// Seteo del token en el localStorage
localStorage.setItem('token', result.data["token"]);
//Envio a la siguiente pagina
that.props.history.push("/registro")
}else{
alert('Usuario incorrecto');
}
}).catch(error => alert('Error en el servidor'));

}catch(e){
alert(e)
}


event.preventDefault();
}

render(){
     return (
     
     <form onSubmit={this.handleLogin.bind(this)}>
           <legend>Login</legend>
           <div className="input-field">
               <label>Usuario </label>
                <input type="text" placeholder="Usuario" value={this.state.usuario} onChange={this.handleChangeUsuario}/>
           </div>
           <div className="input-field">
                <label>Contraseña </label>
                <input type="text" placeholder="Contraseña" value={this.state.password} onChange={this.handleChangePassword}/>
           </div>
           <div className="input-field enviar">
                <input type="submit" value="Enviar" />
           </div>

      </form>

     );
     }
     }
     
     export default Login;
