import React from 'react';
import TopBookCard from './TopBookCard';
import { Link } from 'react-router';

const TopBooks = ( {topbooks}) => {
    return (
        <>
        <h1 className='text-2xl primary text-center text-accent-content md:text-start md:pl-2  py-4'>Top {topbooks.length} books</h1>
        
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
      {topbooks.map((book) => (
        <TopBookCard key={book._id} book={book} />
      ))}
    </div>
        <div className='text-center pb-10'>
            <Link to='/allBooks' className='btn btn-primary'>See All</Link>    
        </div>
        
        </>
    );
};

export default TopBooks;