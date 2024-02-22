import React, { useState } from 'react';
import axios from 'axios';
import ResponseBox from "./ResponseBox";
import { APICall } from '../interfaces';
import Collections from './Collections';

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [responseData, setResponseData] = useState();
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<APICall[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.get(query);
            setResponseData(response.data);
            setHistory(prevHistory => [...prevHistory, { query, responseData: response.data }]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error.message);
        }

    };

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10">
                <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-md w-2/3 md:w-1/3 flex items-center">
                    <input 
                        name="query" 
                        value={query} 
                        onChange={handleChange} 
                        placeholder="Enter API URL" 
                        className="w-full bg-gray-700 p-2 rounded-md mr-2" 
                    />
                    <button type="submit" className="bg-purple-500 hover:bg-purple-300 px-4 py-2 rounded-md">Search</button>
                </form>
            </div>
            <div className="mt-4">
                <ResponseBox responseData={responseData} error={error} />
            </div>
            <div className="mt-4">
                <Collections collection={history} setSearchQuery={setQuery} />
            </div>
        </>
    );
}

export default SearchBar;
