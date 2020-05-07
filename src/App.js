import React, {Component, createContext, useState} from 'react';
import './App.css';
import CartList from "./components/CartList";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

import i from "./data";

export const AppContext = createContext();

const App = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(i);

    async function addItem(userName) {
        try {
            setError('');
            setLoading(true);
            const url = `https://api.github.com/users/${userName}`
            const res = await fetch(url);

            if(!res.ok) {
                setError('Unsuccessfully response');
                throw Error("Bad response");
            }

            let item = await res.json();

            if (
                item.login == userName && 
                items.find(v => v.login === item.login)
            ) {
            } else {
                setItems([item, ...items]);
            }


            //setItems((items) => {
                //if (
                    //item.login !== userName ||
                    //items.find(v => v.login === item.login)
                //) {
                    //return null;
                //}

                //return {
                    //items: [item, ...items]
                //}
            //})
        } catch (e) {
            setError(e.message);
            setTimeout(
                () => setError(''),
                3000
            )
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <AppContext.Provider value={{
            deleteItem: deleteItem
        }}>
            <div className="container">
                <Spinner loading={loading} />
                <Form addItem={addItem} />
                {loading && <h1>Loading ... </h1>}
                {error && <h1>{error}</h1>}
                <CartList items={items}/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
