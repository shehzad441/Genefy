import { FileText } from "lucide-react"

export default function NotesList() {
  return (
    <div className="mt-12">
      <h2 className="text-[40px] font-bold">My Notes</h2>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-400 rounded-lg text-white">
          <h3 className="text-lg font-medium mb-12">Information Technology</h3>
          <div className="flex justify-between items-center">
            <div className="text-sm">Saved: 01/01/2025</div>
            <button className="p-1 rounded-md bg-gray-300 text-gray-600">
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-400 rounded-lg text-white">
          <h3 className="text-lg font-medium mb-12">Geography</h3>
          <div className="flex justify-between items-center">
            <div className="text-sm">Saved: 01/01/2025</div>
            <button className="p-1 rounded-md bg-gray-300 text-gray-600">
              <FileText className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}