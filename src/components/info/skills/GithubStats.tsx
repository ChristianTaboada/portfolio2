import React from 'react'

const GithubStats: React.FC = (): JSX.Element => {
  return (
        <div className='flex flex-col mx-10'>
                <div className='flex items-center mt-5'>
                    <span className='text-gray-400 mr-2'>H2</span>
                    <h2 className='text-2xl'>GitHub Stats</h2>
                </div>
                <div className='mt-5'>
                    <p><img src="https://github-readme-stats.vercel.app/api/top-langs?username=christiantaboada&show_icons=true&locale=en&layout=compact" alt="christiantaboada" /></p>
                    <p><img src="https://github-readme-stats.vercel.app/api?username=christiantaboada&show_icons=true&locale=en" alt="christiantaboada" /></p>
                </div>

        </div>
  )
}
export default GithubStats
