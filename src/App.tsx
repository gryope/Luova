import { useEffect, useState } from 'react'

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTgQ56w58aNx1I8iF-VpUfpvBTANake0ZbTP9tvWWeJmrYGf6602Mhhgw2Nz8IxR3WpGMYEX3WAMalf/pub?gid=0&single=true&output=csv'

function App() {
  const [jobs, setJobs] = useState<any[]>([])

  useEffect(() => {
    async function loadJobs() {
      const response = await fetch(SHEET_URL)

      const text = await response.text()

      const rows = text
        .split('\\n')
        .slice(1)
        .filter((row) => row.trim() !== '')

      const formattedJobs = rows.map((row, index) => {
        const columns = row.split(',')

        return {
          id: index,
          title: columns[0],
          company: columns[1],
          location: columns[2],
          type: columns[3],
          category: columns[4],
          url: columns[5],
        }
      })

      setJobs(formattedJobs)
    }

    loadJobs()
  }, [])

  return (
    <main
      style={{
        background: '#212023',
        minHeight: '100vh',
        color: '#f4dce2',
        padding: '40px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h1
        style={{
          fontWeight: 200,
          fontSize: '64px',
          marginBottom: '40px',
        }}
      >
        LUOVA
      </h1>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            padding: '24px',
            marginBottom: '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
          }}
        >
          <h2
            style={{
              fontWeight: 300,
              fontSize: '36px',
              marginBottom: '8px',
            }}
          >
            {job.title}
          </h2>

          <p style={{ opacity: 0.7 }}>
            {job.company} • {job.location}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '16px',
            }}
          >
            <span>{job.type}</span>
            <span>{job.category}</span>
          </div>

          <a
            href={job.url}
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              color: '#f4dce2',
            }}
          >
            Apply →
          </a>
        </div>
      ))}
    </main>
  )
}

export default App
