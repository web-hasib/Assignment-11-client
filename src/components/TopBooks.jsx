import React from 'react';
import TopBookCard from './TopBookCard';
import { Link } from 'react-router';

const TopBooks = ( {topbooks}) => {
    return (
        <div className='px-1'>
        <h1 className='text-4xl mt-16 mb-10 primary text-center text-primary md:pl-2  py-6'>Top {topbooks.length} books</h1>
        
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
      {topbooks.map((book) => (
        <TopBookCard key={book._id} book={book} />
      ))}
    </div>
        <div className='text-center pb-10'>
            <Link to='/allBooks' className='btn btn-soft border-blue-300 rounded-2xl px-7 hover:text-white btn-info'>See All</Link>    
        </div>
        
        </div>
    );
};

export default TopBooks;