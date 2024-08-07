'use client';

import React, { useState } from 'react';
import ImagePreview from '../../components/ui/ImagePreview';
import Button from '../../components/common/Button';
import { saveAs } from 'file-saver';
import DropzoneComponent from '@/components/ui/DropzoneComponent';
import { FileRejection } from 'react-dropzone';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { removeBackground } from './actions';

const RemoveBackgroundPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const maxFileSize = 1 * 1024 * 1024;

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      setError('Please upload a PNG or JPEG image less than 1MB.');
      return;
    }
    setError('');
    setFile(acceptedFiles[0]);

    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = () => {
      const binaryStr = reader.result as string;
      setBase64Image(binaryStr);
    };
  };

  const handleDelete = () => {
    setFile(null);
    setError('');
    setOutputImage(null);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const result = await removeBackground(base64Image);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    setOutputImage(result.output);
    setLoading(false);
  };

  const handleDownload = () => {
    const timestamp = new Date().toISOString().replace(/[-:.T]/g, '');
    const fileName = `image_${timestamp}.png`;
    saveAs(outputImage as string, fileName);
  };

  return (
    <div className='max-w-3xl mx-auto my-10 px-4'>
      <div className='text-center mb-4'>
        <h1 className='font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text leading-tight'>
          Remove Background
        </h1>
      </div>
      <DropzoneComponent onDrop={onDrop} maxFileSize={maxFileSize} />
      {error && (
        <div className='flex justify-center'>
          <p className='text-md text-yellow-500'>{error}</p>
        </div>
      )}
      {file && (
        <div className='w-full flex justify-center my-4'>
          <Button
            onClick={handleSubmit}
            disabled={loading}
            loading={loading}
            label='Remove Background'
          />
        </div>
      )}
      {loading && <LoadingSpinner />}
      <ImagePreview
        file={file}
        outputImage={outputImage}
        onDelete={handleDelete}
        onDownload={handleDownload}
        loading={loading}
      />
    </div>
  );
};

export default RemoveBackgroundPage;
