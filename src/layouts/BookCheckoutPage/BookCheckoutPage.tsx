import { useEffect, useState } from "react";
import { BookModel } from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const BookCheckoutPage = ()=> {

    const[book, setBook] = useState<BookModel>();
    const[isLoading, setIsLoading] = useState(true);
    const[httpError, setHttpError] = useState(null);
    
    const bookId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;


            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error(`Something went wrong!`);
            }

            const responseData = await response.json();

            const loadedBook: BookModel = {
                id: responseData.id,
                title: responseData.title,
                author: responseData.author,
                description: responseData.description,
                copies: responseData.copies,
                copiesAvailable: responseData.copiesAvailable,
                category: responseData.category,
                imgDataId: responseData.imgDataId,
            };

            setBook(loadedBook);
            setIsLoading(false);

        };
        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
        return (
            <SpinnerLoading/>
        )
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }


    return(
        <div>
            <h3>Hi, World</h3>
        </div>
    );
}