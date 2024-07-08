import React from 'react';

const Sidenav = ({ data, onFetchProducts }) => {

    // Handle categories
    const handleCategoriesClick = (id) => {
        alert(`Id: ${id}`);
        onFetchProducts();
    }

  return (
    <div className='side-nav bg-cyan-400'>
      <ul>
        {
         data && data.map((item) => (
                <li key={item.id} onClick={() => handleCategoriesClick(item.id)}>
                    <a href="#">
                        {item.name}
                    </a>
                </li>
            ))
        }
      </ul>
    </div>
  );
}

export default Sidenav;
