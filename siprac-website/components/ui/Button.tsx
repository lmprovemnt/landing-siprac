import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    href?: string
    variant?: 'primary' | 'secondary' | 'cta'
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({
    children,
    href,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    className = '',
    onClick,
    type = 'button'
}: ButtonProps) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-300'

    const variantClasses = {
        primary: 'bg-primary-orange text-white hover:bg-transparent hover:text-primary-orange hover:border-2 hover:border-primary-orange',
        secondary: 'bg-transparent text-primary-orange border-2 border-primary-orange hover:bg-primary-orange hover:text-white',
        cta: 'bg-gradient-to-r from-primary-orange to-secondary-yellow text-white hover:shadow-lg hover:scale-105'
    }

    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg'
    }

    const widthClass = fullWidth ? 'w-full' : ''
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button