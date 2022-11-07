import React, {useState} from 'react'

export default function OptionalRender() {

    const [access, setAccess] = useState(true);
    const [numberOfMessages, setNumberOfMessages] = useState(0);

    //LOGIN and LOGOUT
    const LoginButton = (props)=>{
        return(
            <button onClick={props.logInAction}>Log in</button>
        )
    }

    const LogoutButton = (props)=>{
        return(
            <button onClick={props.logOutAction}>Log out</button>
        )
    }



    const updateAccess=()=>{
        setAccess(!access);
    }

    const logInAction = ()=>{
        setAccess(true);
    }
    const logOutAction = ()=>{
        setAccess(false);
    }

    let optionalButton;

   /* if(access)
    {
        optionalButton= <button onClick={updateAccess}>Log out</button>
    }else{
        optionalButton= <button onClick={updateAccess}>Log in</button>
    }*/

    //Unread messages
    let addMessages = ()=>{
        setNumberOfMessages(numberOfMessages + 1);
    }
    if(access)
    {
        optionalButton= <LogoutButton logOutAction={logOutAction}></LogoutButton>
    }else{
        optionalButton=<LoginButton logInAction={logInAction}></LoginButton>
    }
  return (
    <div>
    {access && numberOfMessages>0 && <p>You have {numberOfMessages} unread messages</p>}
    {access && numberOfMessages === 0 && <p>There are no unread messages</p>}
    {/*numberOfMessages>0 && numberOfMessages===1 ? <p>You have {numberOfMessages} unread message</p> : <p>There are no unread messages</p>*/}
    {access && <button onClick={addMessages}>Add New Message</button>}
      {optionalButton}
    </div>
  )
}
