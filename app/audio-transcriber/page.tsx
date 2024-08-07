import React from 'react';

function AudioTranscriberPage() {
  return (
    <main className='min-h-screen1'>
      <div className='py-10'>
        {/* Transcriber Container */}
        <div className='max-w-3xl mx-auto p-6 rounded shadow'>
          <div className='text-center mb-4'>
            <h1 className='font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text leading-tight'>
              Transcribe Audio
            </h1>
          </div>
        </div>
        {/* Buttons */}
        <div className='mt-6 flex items-center justify-center'>
          <div className='flex justify-center items-center gap-2'>
            <button className='flex items-center justify-center w-32 py-2 rounded bg-green-500 hover:scale-105 hover:duration-300 text-white font-bold'>
              Transcribe
            </button>

            <button className='ml-4 bg-orange-500 w-32 py-2 rounded hover:scale-105 hover:duration-300 hover:cursor-pointer font-bold'>
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AudioTranscriberPage;
