import React, { useState } from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Home() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://i.postimg.cc/wj4DPM2k/foto123.jpg')", height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Consultorio Oftalmológico </h1>
              <h4 className='mb-3'>Dra. Nhora Montañez</h4>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
                href='https://www.youtube.com/watch?v=c9B4TPnak1A'
              >
                Consultorios
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href='https://mdbootstrap.com/docs/standard/'
              >
                Servicios
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}