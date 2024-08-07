import React from 'react';
import Image from 'next/image';
import { FaTrashAlt, FaDownload } from 'react-icons/fa';

interface ImagePreviewProps {
  file: File | null;
  outputImage: string | null;
  onDelete: () => void;
  onDownload: () => void;
  loading: boolean;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  file,
  outputImage,
  onDelete,
  onDownload,
  loading,
}) => (
  <section className='grid grid-cols-2 gap-4 mt-4'>
    {file && (
      <>
        <div className='relative'>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className='object-cover w-full h-full'
          />
          <button
            className='absolute top-0 right-0 p-2 text-black bg-yellow-500'
            onClick={onDelete}
          >
            <FaTrashAlt className='w-4 h-4 hover:scale-125 duration-300' />
          </button>
          <div className='absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white text-md p-2'>
            {file.name} ({(file.size / 1024).toFixed(2)} KB)
          </div>
        </div>
        <div className='flex items-center justify-center'>
          {loading && <div className='spinner' />}{' '}
          {/* Custom spinner component */}
          {outputImage && (
            <div className='relative w-full h-full'>
              <Image
                src={outputImage}
                width={100}
                height={100}
                alt='output'
                className='object-cover w-full h-full'
              />
              <button
                className='absolute top-0 right-0 p-3 text-black bg-yellow-500'
                onClick={onDownload}
              >
                <FaDownload className='w-6 h-6 hover:scale-125 duration-300' />
              </button>
            </div>
          )}
        </div>
      </>
    )}
  </section>
);

export default ImagePreview;
