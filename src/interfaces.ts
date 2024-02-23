export interface IResponseBoxProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseData: any;
    error: string | null;
}

export interface IAPICall {
    query: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseData: any;
}

export interface ICollectionsProps {
    collection: IAPICall[];
    setQuery: (value: string) => void;
}

export interface IKeyValue {
    [key: string]: string;
}