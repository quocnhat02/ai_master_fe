'use client';

import React, { useState } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';

const RemoveBackgroundPage = () => {
  const [file, setFile] = useState<File | null>();
  const [error, setError] = useState('');

  const acceptedFilesTypes = {
    'image/jpeg': ['.jpeg', '.png'],
  };

  console.log('re-render');

  const maxFileSize = 1 * 1024 * 1024;

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      console.log(rejectedFiles);
      setError('Please upload a PNG or JPEG image less than 5MB.');
      return;
    }

    console.log(acceptedFiles);
    setError('');
    setFile(acceptedFiles[0]);
  };

  return (
    <div className='max-w-3xl mx-auto my-10 px-4'>
      {/* Header Section */}
      <div className='text-center'>
        <h1 className='font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text leading-tight'>
          Remove background
        </h1>
      </div>
      {/* Dropzone Section */}
      <section className='w-full max-w-lg mx-auto mb-12'></section>
      {/* Dropzone */}
      <div className='w-full flex justify-center items-center h-32 text-center border-4 border-gray-500 border-dashed rounded-md cursor-pointer mb-2 text-gray-500'>
        <Dropzone
          accept={acceptedFilesTypes}
          multiple={false}
          maxSize={maxFileSize}
          onDrop={onDrop}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      {error && (
        <div className='flex justify-center'>
          <p className='text-md text-yellow-500'>{error}</p>
        </div>
      )}
      {/* Submit button */}
      {file && (
        <div className='flex items-center justify-center mt-6'>
          <button className='text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l rounded-lg px-4 py-2 text-center mb-2'>
            Remove background
          </button>
        </div>
      )}
    </div>
  );
};

export default RemoveBackgroundPage;
