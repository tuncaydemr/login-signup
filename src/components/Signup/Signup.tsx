import './Signup.css'
import userIcon from '../../assets/icons/user.svg'
import emailIcon from '../../assets/icons/email.svg'
import passwordIcon from '../../assets/icons/password.svg'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import Login from '../Login/Login'
import CustomHook, { FormData } from '../CustomHook/CustomHook'
import eyeIcon from '../../assets/icons/eye.svg'
import eyeSlashIcon from '../../assets/icons/eye-slash.svg'

const Signup = () => {
   const [isSignup, setIsSignup] = useState<boolean>(true)

   const {
      showPass,
      setShowPass,
      setPassword,
      passwordRef,
      nameRef,
      emailRef,
      submitted,
      setSubmitted
   } = CustomHook()

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()

      const formData: FormData = {
         name: nameRef.current?.value.trim() || '',
         email: emailRef.current?.value.trim() || '',
         password: passwordRef.current?.value.trim() || '',
      }

      setSubmitted(formData)

      if (nameRef.current) nameRef.current.value = ''
      if (emailRef.current) emailRef.current.value = ''
      if (passwordRef.current) passwordRef.current.value = ''
   }

   const showPassword = () => {
      setShowPass(prev => !prev)
   }

   const handleChange = () => {
      setPassword(passwordRef.current?.value || '')
   }

   useEffect(() => {
      submitted ? alert(`Name: ${submitted.name}\nEmail: ${submitted.email}\nPassword: ${submitted.password}`) : ''
   }, [submitted])

   return (
      <main className='bg-blue-900 h-screen flex items-center justify-center'>
         <div className='bg-white flex rounded-md w-[700px] justify-center'>
            {isSignup ? (
               <form onSubmit={handleSubmit}>
                  <div className='w-[400px] flex flex-col gap-12 py-16'>
                     <div className='flex justify-center'>
                        <h3 className='underline underline-offset-[12px] text-3xl text-blue-800 font-bold'>Sign Up</h3>
                     </div>
                     <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 bg-[#eaeaea] px-4 py-2'>
                           <img
                              src={userIcon}
                              alt="User Icon"
                              width={20}
                              height={20}
                           />
                           <input
                              type="text"
                              placeholder='Name'
                              className='input'
                              ref={nameRef}
                           />
                        </div>
                        <div className='flex gap-3 bg-[#eaeaea] px-4 py-2'>
                           <img
                              src={emailIcon}
                              alt="Email Icon"
                              width={20}
                              height={20}
                           />
                           <input
                              type="email"
                              placeholder='Email'
                              className='input'
                              ref={emailRef}
                           />
                        </div>
                        <div className='flex gap-3 bg-[#eaeaea] px-4 py-2'>
                           <img
                              src={passwordIcon}
                              alt="Password Icon"
                              width={20}
                              height={20}
                           />
                           <input
                              type={showPass ? 'text' : 'password'}
                              placeholder='Password'
                              className='input'
                              ref={passwordRef}
                              onChange={handleChange}
                           />
                           <img
                              src={showPass ? eyeIcon : eyeSlashIcon}
                              alt="Eye Icon"
                              className='cursor-pointer'
                              onClick={showPassword}
                              width={20}
                              height={20}
                           />
                        </div>
                     </div>
                     <div className='flex justify-between'>
                        <Button type='submit' label={'Sign Up'} variant='primary' />
                     </div>
                     <div className='flex justify-center'>
                        <div className='cursor-pointer font-bold' onClick={() => setIsSignup(false)}>Already have an account</div>
                     </div>
                  </div>
               </form>
            ) : (<Login signup={() => setIsSignup(true)} />)}
         </div>
      </main>
   )
}

export default Signup
