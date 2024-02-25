import { IResponseBoxProps } from '../interfaces';


const ResponseBox = ({ responseData, responseStatus, error }: IResponseBoxProps) => {
    let responseText = "";

    if (error) {
        responseText = error;
    } else {
        responseText = JSON.stringify(responseData, null, 2);
    }

    return (
        <div className="flex justify-center">
            <div className="w-1/2 md:w-1/2 bg-gray-800 p-4 rounded-md">
                <h1 className="text-white text-2xl mb-4">Response Body</h1>
                <span className="text-white text-1x1 mb-4">Status: {responseStatus}</span>
                <textarea 
                    name="content" 
                    rows={10} 
                    cols={40} 
                    className="bg-gray-700 w-full p-2 rounded-md text-white"
                    readOnly // Make textarea read-only
                    value={responseText}
                    onChange={() => {}}
                />
            </div>
        </div>
    );
}

export default ResponseBox;
