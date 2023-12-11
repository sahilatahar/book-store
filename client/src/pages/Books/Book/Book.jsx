import PropTypes from 'prop-types';
import './Book.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

const Book = ({ book }) => {

  const { _id: id, title, desc, image } = book;
  const { setBooks } = useContext(Context);

  const handleDelete = async (id) => {
    try {
      const url = import.meta.env.VITE_API_URL;
      await axios.delete(`${url}/books/${id}`);
      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <li className="Book">
      <img src={image} alt="" className='Book__image' />
      <h1 className='Book__title'>{title}</h1>
      <p className='Book__desc'>{desc}</p>
      <div className="Book__buttons">
        <button className='update__button'><Link to={`/update/${id}`}>Update</Link></button>
        <button className='delete__button' onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default Book;