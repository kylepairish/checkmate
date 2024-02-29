import React, { useState } from 'react';
import axios from 'axios';
import ResponseBox from "./ResponseBox";
import { IAPICall } from '../interfaces';
import Collections from './Collections';
import RequestBox from './RequestBox';

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [method, setMethod] = useState('');
    const [responseData, setResponseData] = useState();
    const [responseStatus, setResponseStatus] = useState();
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<IAPICall[]>([]);
    const [childData, setChildData] = useState('');

    const handleChildData = (dataFromChild: React.SetStateAction<string>) => {
      setChildData(dataFromChild);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setMethod(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let response: any;
          switch (method) {
            case 'GET':
              response = await axios.get(query);
              break;
            case 'POST':
              response = await axios.post(query, {childData});
              break;
            case 'PUT':
              response = await axios.put(query);
              break;
            case 'UPDATE':
              response = await axios.patch(query);
              break;
            case 'DELETE':
              response = await axios.delete(query);
              break;
            default:
              throw new Error('Invalid method selected');
          }
            setResponseData(response.data);
            setResponseStatus(response.status);
            setHistory(prevHistory => [...prevHistory, { query, responseData: response.data }]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error.message);
        }

    };

    return (
        <>  
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-md w-1/2 md:w-1/2 flex items-center mt-10">
                <select name="method" value={method} onChange={handleMethodChange} className="bg-purple-500 hover:bg-purple-300 py-2 mr-2 text-center rounded-md">
                    <option value="GET">GET</option>
                    <option value="PUT">PUT</option>
                    <option value="POST">POST</option>
                    <option value="UPDATE">UPDATE</option>
                    <option value="DELETE">DELETE</option>
                </select> 
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
            <RequestBox onChildData={handleChildData} />
            <div className="mt-4">
                <ResponseBox responseData={responseData} responseStatus={responseStatus} error={error} />
            </div>
            <div className="mt-4">
                <Collections collection={history} setQuery={setQuery} />
            </div>
        </>
    );
}

export default SearchBar;
