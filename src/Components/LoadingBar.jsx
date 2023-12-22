import React from 'react';
function LoadingBar() {
  return (
    <div
        className='transition'
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            backgroundColor : "black"
        }}
    >
        <div>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-white">
            </div>
            <div className="flex absolute justify-center items-center h-full w-full text-white">
                <p> Loading </p>
            </div>
        </div>
            
        </div>
    </div>
  );
}
export default LoadingBar;