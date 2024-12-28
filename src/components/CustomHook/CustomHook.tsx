import { useRef, useState } from "react";

export interface FormData {
   name?: string
   email?: string
   password?: string
}

const CustomHook = () => {
   const [isSignup, setIsSignup] = useState<boolean>(true)
   const [showPass, setShowPass] = useState<boolean>(false)
   const [password, setPassword] = useState<string>('')
   const [submitted, setSubmitted] = useState<FormData | null>(null)

   const nameRef = useRef<HTMLInputElement | null>(null)
   const emailRef = useRef<HTMLInputElement | null>(null)
   const passwordRef = useRef<HTMLInputElement | null>(null)

   return {
      showPass,
      setShowPass,
      password,
      setPassword,
      passwordRef,
      nameRef,
      emailRef,
      submitted,
      setSubmitted,
      isSignup,
      setIsSignup
   }
}

export default CustomHook
