export const TempLogin: React.FC = () => {

    return (
         <div className="login">
             <div className="text-container">
                 <h1>User Login</h1>
                 <div className="input-container">
                     <input type="text" placeholder="username" name="username" />
                 </div>
                 <div className="input-container">
                     <input type="password" placeholder="password" name="password"  />
                 </div>
                 <button className="login-button" >Login</button>
             </div>
         </div> 


    );
};
