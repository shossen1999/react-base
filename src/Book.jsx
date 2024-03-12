import './Book.css';
export default function Book({book}){
    const {bookName,price}=book;
    return (
        <div className='book'>
            <h3>Book Name:{bookName}</h3>
            <p>Price:{price}</p>
        </div>
    )
}