import React, {Component, createContext} from 'react';
import './App.css';
import CartList from "./components/CartList";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

// import items from "./data";

export const AppContext = createContext();

export default class App extends Component {

    constructor() {
        super();
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    state = {
        error: "",
        loading: false,
        items: []
    }

    async addItem(userName) {
        try {
            this.setState({ error: "", loading: true });
            const url = `https://api.github.com/users/${userName}`
            const res = await fetch(url);

            if(!res.ok) {
                this.setState({ error: "Unsuccessfully response" });
                throw Error("Bad response");
            }

            const item = await res.json();
            this.setState(({ items }) => {
                if (
                    item.login !== userName ||
                    items.find(v => v.login === item.login)
                ) {
                    return null;
                }

                return {
                    items: [item, ...items]
                }
            })
        } catch (e) {
            this.setState({ error: e.message });
            setTimeout(
                () => this.setState({ error: "" }),
                3000
            )
            console.log(e);
        } finally {
            this.setState({ loading: false })
        }
    }

    deleteItem(id) {
        // if (!window.confirm("Are you sure to delete item ? ")) {
        //     return false;
        // }
        this.setState(({ items }) => ({
            items: items.filter(item => item.id !== id)
        }));
    };

    render() {
        return (
            <AppContext.Provider value={{
                deleteItem: this.deleteItem
            }}>
                <div className="container">
                    <Spinner loading={this.state.loading} />
                    <Form addItem={this.addItem} />
                    {this.state.loading && <h1>Loading ... </h1>}
                    {this.state.error && <h1>{this.state.error}</h1>}
                    <CartList items={this.state.items}/>
                </div>
            </AppContext.Provider>
        );
    }
}
