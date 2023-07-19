/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
// import { deleteSingleAuthor } from '../api/authorData';
import { deleteAuthorBooks } from '../api/mergedData';
// import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({ authorObj, onUpdate }) {
  console.warn(authorObj);

  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name} ${authorObj.last_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={authorObj.image} alt={authorObj.last_name} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name} {authorObj?.favorite ? ' 🤍' : ''}</Card.Title>
        <br />
        <h6>{authorObj.email}</h6>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

// eslint-disable-next-line react/no-typos
AuthorCard.propTypes = {
  author: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.string.isRequired,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

AuthorCard.defaultProps = {
  author: {
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
  },
};

export default AuthorCard;
