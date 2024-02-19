import React from "react";
function App()
{
    const [value,setValue] = React.useState('LocalStorage');

    const setData = () => {
        setValue('Value is Set');
        localStorage.setItem('name',"Saloni");
    }

    const getData = () => {
        <br />
        var a = localStorage.getItem('name');
        setValue('Value is :'+a);
    }

    const removeData = () => {
        <br />
        localStorage.removeItem('name');
        setValue('Value is Removed');
    }

    return(
        <div>
            <br />
            {value}
            <br />
            <button onClick={setData}>Set</button>
            <button onClick={getData}>Get</button>
            <button onClick={removeData}>Remove</button>
        </div>
    )
    }
export default App1;    
