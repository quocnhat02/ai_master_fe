import React from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';

interface DropzoneProps {
  onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
  maxFileSize: number;
}

const DropzoneComponent: React.FC<DropzoneProps> = ({
  onDrop,
  maxFileSize,
}) => (
  <div className='w-full flex justify-center items-center h-32 text-center border-4 border-gray-500 border-dashed rounded-md cursor-pointer mb-2 text-gray-500'>
    <Dropzone
      accept={{ 'image/jpeg': ['.jpeg', '.png'] }}
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
);

export default DropzoneComponent;
