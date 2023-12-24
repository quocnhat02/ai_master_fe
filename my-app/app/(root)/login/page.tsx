'use client';

import { Formik } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import * as Yup from 'yup';

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <article className='max-lg:hidden ease-out flex flex-col justify-center items-center transition-all duration-300 gap-10 flex-1 w-full h-full'>
        <Image
          className='bg-transparent object-cover w-auto h-auto'
          src={
            'data:image/png;base64,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'
          }
          priority
          alt='login'
          height={200}
          width={200}
          style={{ filter: 'grayscale(100%)' }}
        />
        <div className='flex flex-col text-center gap-5 w-[70%]'>
          <h2 className='text-2xl font-semibold'>
            Discover and Engage with Technology
          </h2>
          <p className='text-gray-600 text-balance'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            delectus tempora? Est corrupti.
          </p>
        </div>
      </article>
      <article className='flex flex-1 justify-center items-center w-full h-full'>
        <div className='absolute right-5 top-5 text-blue-500 font-medium'>
          LightCodeSE
        </div>
        <div className='relative flex flex-col justify-center items-center bg-[#f0f8f5] shadow-md max-lg:w-[70%] max-lg:h-[70%] w-[80%] h-[80%] rounded-lg'>
          <button
            className={`absolute top-5 right-5 px-2 py-2 w-[7rem] ${
              isLoginPage ? 'bg-blue-500' : 'bg-green-500'
            } text-white rounded-md hover:opacity-80`}
            onClick={() => setIsLoginPage(!isLoginPage)}
          >
            {isLoginPage ? 'Sign Up' : 'Sign In'}
          </button>
          <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-bold leading-10'>
              {isLoginPage ? 'Sign In' : 'Sign Up'}
            </h2>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string()
                  .min(7, 'Must be greather 7 characters')
                  .max(15, 'Must be 7 characters or less')
                  .required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  if (isLoginPage) {
                    alert('Sign In\n' + JSON.stringify(values, null, 2));
                  } else {
                    alert('Sign Up\n' + JSON.stringify(values, null, 2));
                  }
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <form
                  onSubmit={formik.handleSubmit}
                  className='text-xl flex flex-col gap-2 text-gray-600'
                >
                  <label className='text-2xl'>Enter your username</label>
                  <input
                    type='text'
                    className='px-2 py-2 rounded-md bg-slate-100 focus:border-green-500 focus:outline-none transition-all duration-300 border-blue-500 border-2'
                    {...formik.getFieldProps('username')}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className='text-xl text-red-500'>
                      {formik.errors.username}
                    </div>
                  ) : null}
                  <label className='text-2xl'>Enter your password</label>
                  <input
                    type='password'
                    className='px-2 py-2 rounded-md bg-slate-100 focus:border-green-500 focus:outline-none transition-all duration-300 border-blue-500 border-2'
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='text-xl text-red-500'>
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <button
                    type='submit'
                    className='px-6 py-2 hover:opacity-80 bg-red-500 rounded-md text-white disabled:opacity-20'
                    disabled={
                      (formik.touched.username && formik.errors.username) ||
                      (formik.touched.password && formik.errors.password)
                        ? true
                        : false
                    }
                  >
                    {isLoginPage ? 'Sign In' : 'Sign Up'}
                  </button>
                </form>
              )}
            </Formik>
            <a href='#' className='inline-block text-gray-500'>
              Forgot password
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Login;
