import './Editor.scss';
import { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/Context';
import bookImage from '../../assets/images/book.png';

const Editor = () => {

  const [book, setBook] = useState({
    id: 0,
    title: '',
    desc: '',
    image: bookImage,
    price: 3,
    author: ''
  });
  const [errMsg, setErrMsg] = useState('');
  const { books, setBooks } = useContext(Context);
  const [isAddPage, setIsAddPage] = useState(true);
  const inputImageRef = useRef(null);

  const navigate = useNavigate();
  const { page, id } = useParams();

  const handleChange = (e) => {

    setErrMsg('');

    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  }

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (!image) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setBook({
        ...book,
        image: e.target.result
      });
    }

    reader.readAsDataURL(image);
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!book.title || !book.desc || !book.image || !book.price || !book.author) {
      setErrMsg('All fields are required');
      return;
    }

    try {
      const url = import.meta.env.VITE_API_URL;
      if (isAddPage) {
        const res = await axios.post(`${url}/books`, book);
        setBooks(prevBooks => [...prevBooks, { ...book, _id: res.data._id }]);
      } else {
        await axios.put(`${url}/books/${id}`, book);
        setBooks(prevBooks => {
          return [...prevBooks.filter(preBook => preBook._id !== book._id), { ...book, _id: id }]
        })
      }
      navigate('/');
    } catch (err) {
      if (err?.response?.data?.error) {
        setErrMsg(err?.response?.data?.error);
      } else {
        setErrMsg("Something went wrong")
      }
    }
  }

  useEffect(() => {
    if (page === 'update') {
      document.title = 'Update Book';
      setIsAddPage(false);
      const book = books.filter(book => book._id == id);
      setBook({ ...book[0] });
    } else {
      document.title = 'Add Book';
      setIsAddPage(true);
    }
    window.scrollTo(0, 0);
  }, [navigate, books, page, id]);

  return (
    <div className="Editor">
      <h1 className='heading' >{isAddPage ? "Add Book" : "Update Book"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="img-container">
          <img src={book.image} alt="Book Cover" onClick={() => inputImageRef.current.click()} />
          <input
            type="file"
            name="image"
            id="image"
            ref={inputImageRef}
            onChange={handleImageChange}
            accept='image/*'
          />
        </div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={handleChange} value={book.title} required />
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" id="desc" onChange={handleChange} value={book.desc} required />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" onChange={handleChange} value={book.price} min={3} required />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={handleChange} value={book.author} required />
        <button type="submit">{isAddPage ? "Add Book" : "Update Book"}</button>
        <p className="error-msg">{errMsg}</p>
      </form>
    </div>
  )
}

export default Editor