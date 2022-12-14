import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const RightNavData = ({signleData,idx}) => {
    const{title,id} = signleData
   
    
    return (
      <NavLink to={`/course/${id}`} >
          <aside className="w-full p-5   :bg-gray-900 dark:dark:text-gray-100">
        <nav className="space-y-8 text-sm">
            <div className="space-y-2">
                <h2 className="text-base hover:text-orange-500 font-semibold tracking-widest uppercase dark:text-orange-400 text-blue-600">{idx}.{title}</h2>

            </div>
            
            
            
        </nav>
    </aside>
      </NavLink>
    );
};

export default RightNavData;