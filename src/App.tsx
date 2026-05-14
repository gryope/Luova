import { useEffect } from 'react'

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgQ56w58aNx1I8iF-VpUfpvBTANake0ZbTP9tvWWeJmrYGf6602Mhhgw2Nz8IxR3WpGMYEX3WAMalf/pub?gid=0&single=true&output=csv'

function App() {
  useEffect(() => {
    async function test() {
      const response = await fetch(SHEET_URL)

      const text = await response.text()

      console.log(text)
    }

    test()
  }, [])

  return (
    <div
      style={{
        background: '#212023',
        color: 'white',
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      TEST
    </div>
  )
}

export default App
