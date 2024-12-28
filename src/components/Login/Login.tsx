import './Login.css'
import userIcon from '../../assets/icons/user.svg'
import passwordIcon from '../../assets/icons/password.svg'
import Button from '../Button/Button'
import CustomHook, { FormData } from '../CustomHook/CustomHook'
import { useEffect } from 'react'
import eyeIcon from '../../assets/icons/eye.svg'
import eyeSlashIcon from '../../assets/icons/eye-slash.svg'

const Login = ({ signup }: any) => {
   const {
      showPass,
      setShowPass,
      setPassword,
      passwordRef,
      nameRef,
      submitted,
      setSubmitted
   } = CustomHook()

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()

      const formData: FormData = {
         name: nameRef.current?.value.trim() || '',
         password: passwordRef.current?.value.trim() || '',
      }

      setSubmitted(formData)

      if (nameRef.current) nameRef.current.value = ''
      if (passwordRef.current) passwordRef.current.value = ''
   }

   const showPassword = () => {
      setShowPass(prev => !prev)
   }

   const handleChange = () => {
      setPassword(passwordRef.current?.value || '')
   }

   useEffect(() => {
      submitted ? alert(`Name: ${submitted.name}\nPassword: ${submitted.password}`) : ''
   }, [submitted])

   return (
      <form onSubmit={handleSubmit}>
         <div className='w-[400px] flex flex-col gap-12 py-20'>
            <div className='flex justify-center'>
               <h3 className='underline underline-offset-[12px] text-3xl text-blue-800 font-bold'>Login</h3>
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
                     alt="eye"
                     className='cursor-pointer'
                     onClick={showPassword}
                     width={20}
                     height={20}
                  />
               </div>
               <div className='flex justify-end'>
                  <div className='cursor-pointer font-bold'>Forgot password</div>
               </div>
            </div>
            <div className='flex justify-between'>
               <Button type='submit' label={'Login'} variant='primary' />
            </div>
            <div className='flex justify-center'>
               <div className='cursor-pointer font-bold' onClick={signup}>Create new account</div>
            </div>
         </div>
      </form>
   )
}

export default Login
