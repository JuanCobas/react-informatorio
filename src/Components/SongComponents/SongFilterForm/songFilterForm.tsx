import React, { useState } from "react";


type SongFilterProp = {
    inputValue: string;
    callback: (value: string) => void,
    updateURL:(filter:string) =>void
}

function SongFilterForm(prop : SongFilterProp){

    const [input, setInput ] = useState(prop.inputValue);
    

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        prop.callback(value.toLowerCase())
        prop.updateURL(value)
    }

    return (
        <>
            <form action="">
                <label htmlFor="nameInput">Filtrar por Nombre de cancion</label>
                <input value={input} onChange={handleChange} id="nameInput" type="text" />
            </form>
        </>
    )

}

export default SongFilterForm;