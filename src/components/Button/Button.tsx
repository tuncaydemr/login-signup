interface ButtonProps {
   label: string
   variant: 'primary' | 'secondary'
   onClick?: () => void
   type: 'submit' | 'button'
}

const Button = ({ label, onClick, variant = 'primary', type }: ButtonProps) => {
   const variantClasses =
      variant === 'primary'
         ? "bg-blue-600 text-white hover:bg-blue-800"
         : 'bg-gray-500 text-white hover:bg-gray-600'

   return (
      <button
         onClick={onClick}
         className={`rounded-md w-full font-medium border px-14 py-4 ${variantClasses}`}
         type={type}
      >{label}</button>
   )
}

export default Button
