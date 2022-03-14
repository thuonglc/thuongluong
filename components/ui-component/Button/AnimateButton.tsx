import { motion, useCycle } from 'framer-motion'
import React, {
	forwardRef,
	ForwardRefRenderFunction,
	PropsWithChildren,
	useImperativeHandle,
	useRef,
} from 'react'

interface Ref {
	value: string
	setValue: (value: string) => void
}

export interface ButtonProps {
	children?: React.ReactNode
	offset: number
	type: 'slide' | 'scale' | 'rotate'
	direction: 'up' | 'down' | 'left' | 'right'
	scale: {
		hover: number
		tap: number
	}
}

const Button: ForwardRefRenderFunction<Ref, PropsWithChildren<ButtonProps>> = (
	{ children, type, direction, offset, scale },
	ref
) => {
	// hooks
	const inputElement = useRef<HTMLInputElement | null>(null)
	useImperativeHandle(ref, () => {
		return {
			value: inputElement.current ? inputElement.current.value : '',
			setValue: (value: string) => {
				inputElement.current && (inputElement.current.value = value)
			},
		}
	})

	let offset1
	let offset2
	switch (direction) {
		case 'up':
		case 'left':
			offset1 = offset
			offset2 = 0
			break
		case 'right':
		case 'down':
		default:
			offset1 = 0
			offset2 = offset
			break
	}

	const [x, cycleX] = useCycle(offset1, offset2)
	const [y, cycleY] = useCycle(offset1, offset2)

	switch (type) {
		case 'rotate':
			return (
				<motion.div
					ref={inputElement}
					animate={{ rotate: 360 }}
					transition={{
						repeat: Infinity,
						repeatType: 'loop',
						duration: 2,
						repeatDelay: 0,
					}}
				>
					{children}
				</motion.div>
			)
		case 'slide':
			if (direction === 'up' || direction === 'down') {
				return (
					<motion.div
						ref={inputElement}
						animate={{ y: y !== undefined ? y : '' }}
						onHoverEnd={() => cycleY()}
						onHoverStart={() => cycleY()}
					>
						{children}
					</motion.div>
				)
			}
			return (
				<motion.div
					ref={inputElement}
					animate={{ x: x !== undefined ? x : '' }}
					onHoverEnd={() => cycleX()}
					onHoverStart={() => cycleX()}
				>
					{children}
				</motion.div>
			)

		case 'scale':
		default:
			if (typeof scale === 'number') {
				scale = {
					hover: scale,
					tap: scale,
				}
			}
			return (
				<motion.div
					ref={inputElement}
					whileHover={{ scale: scale?.hover }}
					whileTap={{ scale: scale?.tap }}
				>
					{children}
				</motion.div>
			)
	}
}

const AnimateButton = forwardRef(Button)

AnimateButton.defaultProps = {
	type: 'scale',
	offset: 10,
	direction: 'right',
	scale: {
		hover: 1,
		tap: 0.9,
	},
}

export default AnimateButton
