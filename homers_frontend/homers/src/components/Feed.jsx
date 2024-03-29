import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      }); 
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <div className='h-screen  flex items-center justify-center'>
        <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
      </div>
    );
  }
  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
      {pins && pins.length === 0 && (
        <div className="flex flex-grow justify-center items-center h-auto">
          <h1 className=" text-2xl  text-gray-500  text-black ">
            No posts yet!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Feed;