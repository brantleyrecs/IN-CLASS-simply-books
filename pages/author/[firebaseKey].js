import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';
// import { getBooks } from '../../api/bookData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  const authorBooks = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    authorBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name} {authorDetails.last_name}
            {authorDetails?.favorite ? ' 🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${authorDetails?.email}`}>{authorDetails?.email}</a>
        </div>
      </div>
      {authorDetails?.books?.map((bookObjs) => <BookCard bookObj={bookObjs} onUpdate={authorBooks} />)}
    </>
  );
}
