import React from 'react';
import { Menu } from '../../components/Menu';

function Area() {
  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu/>
        <section className='w-100 h-100 height-overflow'>
        <div className="p-4">
            <div className="container">
            <h4 className='mb-4'>Área</h4>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}

export default Area;