import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanityClient'

const Home = () => {
  const [personData, setPersonData] = useState(null);

  useEffect(() => {
    // Define the query to fetch the data you need
    const query = `*[_type == 'person']{
      name,
      age,
      gender,
      birthday,
      address,
      bio,
      images,
      'avatarPic': avatarPic.asset->url,
      description,
      children
    }`;

    // Fetch data from Sanity using the defined query
    client.fetch(query)
      .then((data) => {
        // Update the state with the fetched data
        setPersonData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data from Sanity:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {/* Display the fetched data */}
      {personData && (
        <div>
            <h2>Person Information</h2>
            <p>Name: {personData[0].name}</p>
            <p>Age: {personData[0].age}</p>
            <p>Gender: {personData[0].gender}</p>
            <p>Birthday: {personData[0].birthday}</p>
            <img src={personData[0].avatarPic} alt="Avatar" />
          
          {/* Add additional fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Home;
