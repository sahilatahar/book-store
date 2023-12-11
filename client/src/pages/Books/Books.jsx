import { useContext, useEffect } from "react";
import Book from './Book/Book';
import './Books.scss';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context";

const Books = () => {

  const { books } = useContext(Context);

  useEffect(() => {
    document.title = 'Book Collection';
  }, []);

  return (
    <>
      <div className="Books">
        <header>
          <h1 className="heading">Book Collection</h1>
          <button className="Add__Button"><Link to='/add'>Add new book</Link></button>
        </header>
        {books?.length > 0
          ? <ul className="Books__list">
            {
              books?.map(book => {
                return <Book key={book._id} book={book} />
              })
            }
          </ul>
          : <div className="center">
            <h2>No Available Books</h2>
          </div>}
      </div>
    </>
  )
}

export default Books