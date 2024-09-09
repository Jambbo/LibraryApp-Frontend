export class BookModel{
    id: number;
    title: string;
    author?: string;
    description: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    imgDataId?: string;

    constructor(id: number,
                title:string,
                author: string,
                description: string,
                copies: number,
                copiesAvailable: number,
                category: string,
                imgDataId?: string
    ){
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.copiesAvailable = copiesAvailable;
        this.category = category;
        this.imgDataId = imgDataId;
    }   

}