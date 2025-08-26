import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Welcome to Bamboo
          </h1>
          <p className="text-lg text-green-600">
            Your sustainable solution for the future
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Bamboo
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bamboo is one of the most sustainable and versatile materials on Earth. 
              It grows rapidly, requires minimal resources, and can be used for countless applications 
              from construction to textiles to everyday products.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App 