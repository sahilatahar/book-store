import { createContext } from "react";
import propTypes from 'prop-types';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {

    const [books, setBooks] = useState([]);

    // axios.defaults.withCredentials = true;

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const url = import.meta.env.VITE_API_URL;
                const res = await axios.get(`${url}/books`);
                setBooks(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchAllBooks();
    }, []);

    return (
        <Context.Provider value={{ books, setBooks }}>
            {children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: propTypes.node.isRequired
}

export default { ContextProvider, Context };