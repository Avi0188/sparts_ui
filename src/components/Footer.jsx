import React from 'react';

const Footer = () => {
  return (
    <div className="bg-yellow-600 mt-[15px] text-center pb-5 pt-5 ">
      <h2 className="m-1">Stay Updated</h2>
      <p className="m-1">Get the latest updates on academies near you!</p>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="m-1 p-1 rounded"
        />
        <button className="m-1 p-1 bg-blue-500 text-white rounded">Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
