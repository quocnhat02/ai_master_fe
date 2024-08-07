'use client';

import { useRef, useState } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { FaUndo, FaTrash } from 'react-icons/fa';
import { scribbleDesign } from './actions';

const RestoreImagePage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);

  const handleUndo = () => {
    canvasRef.current!.undo();
  };

  const handleClear = () => {
    canvasRef.current!.clearCanvas();
  };

  const handleGenerate = async () => {
    if (prompt === '') {
      alert('Please enter your prompt first!');
      return;
    }

    const base64 = await canvasRef.current!.exportImage('png');

    const result = await scribbleDesign({
      base64Image: base64,
      prompt,
    });

    if (result?.error) {
      setError(result.error);
      return;
    }

    setOutputImage(result.output);
  };

  return (
    <div className='max-w-3xl mx-auto my-10 px-4'>
      {/* Header Section */}
      <section className='flex items-center justify-center mb-10'>
        <h1 className='font-semibold text-transparent text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text'>
          Scribble Design
        </h1>
      </section>
      {/* Sketch Canvas Section */}
      <section className='w-[400px] h-[400px] mx-auto mb-16 mt-6'>
        <div className='w-full aspect-square border-none'>
          <ReactSketchCanvas
            ref={canvasRef}
            width='100%'
            height='100%'
            strokeWidth={4}
            strokeColor='#000000'
          />
        </div>
        <div className='flex items-center justify-between mt-2'>
          <button
            onClick={handleUndo}
            className=' text-gray-300 text-md flex items-center hover:scale-110 duration-300 hover:text-yellow-500'
          >
            <FaUndo className='mr-2' /> Undo
          </button>

          <button
            onClick={handleClear}
            className=' text-gray-300 text-md flex items-center hover:scale-110 duration-300 hover:text-red-500'
          >
            <FaTrash className='mr-2' /> Clear
          </button>
        </div>
      </section>
      {/* Prompt Section */}
      <section className='w-[400px] flex items-center mx-auto'>
        <input
          type='text'
          name='prompt'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className='rounded-l-lg py-3 px-4 w-full focus:outline-none text-black'
          placeholder='Enter your prompt here'
        />

        <button
          onClick={handleGenerate}
          className='rounded-r-lg py-3.5 px-4 ml-1 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-sm text-center'
        >
          Generate
        </button>
      </section>
      {/* Output Image Section */}
      <section className='w-[400px] h-[400px] flex items-center justify-center mx-auto mt-12'>
        {error && (
          <div className='flex justify-center'>
            <p className='text-lg text-red-500'>{error}</p>
          </div>
        )}
        {outputImage && (
          <img
            src={outputImage}
            className='object-cover w-full aspect-square rounded-lg mb-12'
          />
        )}
      </section>
    </div>
  );
};

export default RestoreImagePage;
