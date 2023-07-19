/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function User() {
  const { user } = useAuth();
  console.warn(user);

  return (
    <div
      className="text-light text-center profile"
    >
      <img
        src={user.photoURL}
        alt="userURL"
        className="rounded-circle"
        width="100px"
        height="100px"
      />
      <br />
      <h2>{user.displayName}</h2>
      <br />
      <h3>{user.email}</h3>
      <br />
      <h3>{user.metadata.lastSignInTime}</h3>
      <br />
      <Button type="button" size="lg" className="btn btn-danger" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
