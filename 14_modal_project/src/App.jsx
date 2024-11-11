import { useState } from "react"
import { CustomModal } from "./CustomModal.jsx"

function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)

  return (
    <>
      <button data-custom-open onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <br />
      <button data-dialog-open>Show Dialog Modal</button>
      <CustomModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </>
  )
}

export default App
