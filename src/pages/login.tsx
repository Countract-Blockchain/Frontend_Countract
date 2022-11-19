import * as React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import NextImage from '@/components/NextImage';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen'>
      <div className='relative hidden w-0 flex-1 lg:block'>
        <NextImage
          imgClassName='absolute inset-0 h-full w-full object-cover'
          src='/images/cover.png'
          alt=''
          width={900}
          height={720}
        />
      </div>
      <div className='flex w-1/2 flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <h2 className='mt-6 text-5xl font-medium text-gray-900'>Masuk</h2>
            <p className='mt-2 text-sm text-gray-600'>
              Pengguna baru?{' '}
              <a
                href='#'
                className='font-medium text-blue-400 hover:text-blue-300'
              >
                Buat akun baru
              </a>
            </p>
          </div>

          <div className='mt-8 space-y-6'>
            <div className='mt-6'>
              <form action='#' method='POST' className='space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Alamat Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-50 focus:outline-none focus:ring-primary-50 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <div className='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-50 focus:outline-none focus:ring-primary-50 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex flex-1 items-center justify-between'>
                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-medium text-gray-400 hover:text-primary-50'
                      >
                        Lupa Password
                      </a>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='flex w-full flex-1 justify-center rounded-md border border-transparent bg-primary-50 py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-50 focus:ring-offset-2'
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </div>

            <div>
              <div className='relative mt-6'>
                <div
                  className='absolute inset-0 flex items-center'
                  aria-hidden='true'
                >
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='bg-white px-4 text-gray-500'>atau</span>
                </div>
              </div>
            </div>

            <div className='space-y-6'>
              <button
                type='button'
                className='flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:ring-offset-2'
              >
                <FcGoogle className='h-5 w-5' />
                <span className='ml-3'>Masuk dengan Google</span>
              </button>
              <button
                type='button'
                className='flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:ring-offset-2'
              >
                <BsFacebook className='h-5 w-5 text-blue-500' />
                <span className='ml-3'>Masuk dengan Facebook</span>
              </button>
            </div>

            <p className='text-xs text-gray-500'>
              Dilindungi dengan reCAPTCHA dan bagian dari{' '}
              <span className='text-blue-400'>Privacy Policy</span> dan{' '}
              <span className='text-blue-400'>Terms of Service</span> Google.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}