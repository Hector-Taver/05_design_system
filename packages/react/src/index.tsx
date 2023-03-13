import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$10',
  width: '$64',
})

export function App() {
  return <Button>Hello World</Button>
}
