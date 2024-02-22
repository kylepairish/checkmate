import { ResponseBoxProps } from '../interfaces';


const ResponseBox = ({ responseData, error }: ResponseBoxProps) => {
    let responseText = "";

    if (error) {
        responseText = error;
    } else {
        responseText = JSON.stringify(responseData, null, 2);
    }


    return (
        <div className="flex justify-center">
            <div className="w-1/2 md:w-1/2 bg-gray-800 p-4 rounded-md">
                <textarea 
                    name="content" 
                    rows={10} 
                    cols={40} 
                    className="bg-gray-700 w-full p-2 rounded-md text-white"
                    readOnly // Make textarea read-only
                    defaultValue={responseText} // Set defaultValue to display responseData or error
                />
            </div>
        </div>
    );
}

export default ResponseBox;
