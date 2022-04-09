export interface IFetchData {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface IPhotosList {
    listOfPhotos: IFetchData[];
}
