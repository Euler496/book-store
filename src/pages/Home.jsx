import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import axios from "axios";
import Spinner from "../components/Spinner";
import BooksTable from "../home/BooksTable.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((respone) => {
        setBooks(respone.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </h1>
      </div>

      {loading ? <Spinner /> : <BooksTable books={books} />}
    </div>
  );
};

export default Home;
