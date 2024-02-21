import ReleaseNotes from "./components/Release_Notes"
import data from "./data/data.json"

function App() {
  const releaseData = data
  return (
    <div>
      <ReleaseNotes releaseData={releaseData} />
    </div>
  )
}

export default App
