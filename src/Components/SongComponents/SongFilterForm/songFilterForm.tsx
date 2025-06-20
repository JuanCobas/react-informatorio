import React, { useState } from "react";


type SongFilterProp = {
    callback: (value: string) => void,
}

function SongFilterForm(prop : SongFilterProp){

    const [input, setInput ] = useState('');
    

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        prop.callback(value.toLowerCase())
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