import { memo, FC } from 'react'

export const Container:FC = memo(({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>
})
