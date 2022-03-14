import { useEffect, useRef } from 'react'

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

export function useScriptRef() {
	const scripted = useRef(true)

	useEffect(
		() => () => {
			scripted.current = false
		},
		[]
	)

	return scripted
}
