export interface ResponseBoxProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseData: any;
    error: string | null;
}

export interface APICall {
    query: string;
    responseData: any;
}

export interface CollectionsProps {
    collection: APICall[];
    setSearchQuery: (value: string) => void;
}

export interface KeyValue {
    [key: string]: string;
}