import './App.css';
import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";

const getCustomers = async () => {
    const allCustomersUrl = '/customers/all';
    let customers;
    try {
        customers = await fetch(allCustomersUrl, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(r => r.json()).then(result => console.log(result));
    } catch {
        console.warn('error loading customers')
    }
}

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    All Customer List:
                </p>
            </header>
            <div>

                <Button type="button" className=""
                        color='primary'
                        variant='contained'
                        onClick={getCustomers}>
                    get customers
                </Button>
            </div>
        </div>
    );
}

export default App;
