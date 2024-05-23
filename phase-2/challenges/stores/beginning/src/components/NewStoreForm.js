import React, { useState } from "react"

function NewStoreForm({ setStores, stores }) {

    const [ newStore, setNewStore ] = useState({
        name: '',
        image: '',
        season: 1,
        episode: 1
    });

    const onChangeNewStore = event => {
        setNewStore({
            ...newStore,
            [event.target.name]: event.target.value
        });
    }

    const submitStore = (event) => {
        event.preventDefault();
        fetch('http://localhost:8085/stores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newStore)
        })
        .then(resp => resp.json())
        .then(newStoreInDb => setStores([newStoreInDb, ...stores]))
    }


    return(
        <form id="newStoreForm" onSubmit={submitStore} >
            <input type="text" name="name" placeholder="Store Name" value={newStore.name} onChange={onChangeNewStore} />
            <input type="text" name="image" placeholder="Image URL" value={newStore.image} onChange={onChangeNewStore} />
            <input type="number" name="season" placeholder="Season" value={newStore.season} onChange={onChangeNewStore} step="1" />
            <input type="number" name="episode" placeholder="Episode" value={newStore.episode} onChange={onChangeNewStore} step="1" />
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;