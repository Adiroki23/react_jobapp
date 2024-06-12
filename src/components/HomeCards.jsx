import React from 'react'
import Cards from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        
       <card>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Start your career today, search your dream job.
          </p>
          <a
            href="/jobs.html"
            className="inline-block bg-cyan-700 text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Search Jobs
          </a>
        </card>
        <card bg='bg-green-100'>
          <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your company find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-cyan-700 text-white rounded-lg px-4 py-2 hover:bg-cyan-600"
            >
              Add Job
            </a>
        </card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards