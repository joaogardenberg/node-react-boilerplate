import config from 'config'

export default function App() {
  return <p>{JSON.stringify(config)}</p>
}
