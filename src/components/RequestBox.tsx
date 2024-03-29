import { useState } from 'react';
import { KeyValue } from '../interfaces';

const RequestBox = () => {
  const [activeTab, setActiveTab] = useState<string>('Headers');
  const [headers, setHeaders] = useState<KeyValue[]>([{ key: '', value: '' }]);
  const [queryParams, setQueryParams] = useState<KeyValue[]>([{ key: '', value: '' }]);
  const [body, setBody] = useState<string>('');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleAddHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const handleHeaderChange = (index: number, field: string, value: string) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const handleAddQueryParam = () => {
    setQueryParams([...queryParams, { key: '', value: '' }]);
  };

  const handleQueryParamChange = (index: number, field: string, value: string) => {
    const newQueryParams = [...queryParams];
    newQueryParams[index][field] = value;
    setQueryParams(newQueryParams);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };


  return (
    <div className="flex justify-center mt-2">
      <div className="w-1/2 md:w-1/2 bg-gray-800 p-4 rounded-md">
        {/* Tabs */}
        <div className="flex mb-4">
          <button
            className={`flex-grow px-4 py-2 ${
              activeTab === 'Headers' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => handleTabClick('Headers')}
          >
            Headers
          </button>
          <button
            className={`flex-grow px-4 py-2 ${
              activeTab === 'Query Params' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => handleTabClick('Query Params')}
          >
            Query Params
          </button>
          <button
            className={`flex-grow px-4 py-2 ${
              activeTab === 'Request Body' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => handleTabClick('Request Body')}
          >
            Request Body
          </button>
          {/* Add more tabs as needed */}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'Headers' && (
          <div>
            {headers.map((header, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  className="bg-gray-700 w-1/2 p-2 rounded-md text-white mr-2"
                  placeholder="Key"
                  value={header.key}
                  onChange={(e) => handleHeaderChange(index, 'key', e.target.value)}
                />
                <input
                  type="text"
                  className="bg-gray-700 w-1/2 p-2 rounded-md text-white"
                  placeholder="Value"
                  value={header.value}
                  onChange={(e) => handleHeaderChange(index, 'value', e.target.value)}
                />
              </div>
            ))}
            <button className="bg-purple-500 hover:bg-purple-300 px-4 py-2 rounded-md" onClick={handleAddHeader}>
              Add Header
            </button>
          </div>
        )}

        {activeTab === 'Query Params' && (
          <div>
            {queryParams.map((param, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  className="bg-gray-700 w-1/2 p-2 rounded-md text-white mr-2"
                  placeholder="Key"
                  value={param.key}
                  onChange={(e) => handleQueryParamChange(index, 'key', e.target.value)}
                />
                <input
                  type="text"
                  className="bg-gray-700 w-1/2 p-2 rounded-md text-white"
                  placeholder="Value"
                  value={param.value}
                  onChange={(e) => handleQueryParamChange(index, 'value', e.target.value)}
                />
              </div>
            ))}
            <button className="bg-purple-500 hover:bg-purple-300 px-4 py-2 rounded-md" onClick={handleAddQueryParam}>
              Add Query Param
            </button>
          </div>
        )}

        {activeTab === 'Request Body' && (
          <div>
            <textarea
              className="bg-gray-700 w-full p-2 rounded-md text-white"
              rows={10}
              value={body}
              onChange={handleBodyChange}
              placeholder="Enter JSON Body"
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestBox;
