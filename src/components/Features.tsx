import React from 'react'
import Feature from './Feature'

const features = [
  {
    title: "Integration Ecosystem",
    description: "Enhance your productivity by connectig your favorite tools and apps to One Task. We support a wide range of integrations to make your workflow seamless."
  },
  {
    title: "Goal Setting and Tracking",
    description: "Define and track your goals with ease. Set milestones, track progress, and celebrate your achievements with One Task."
  },
  {
    title: 'Secure Data Encryption',
    description: 'Your data is safe with us. We use the latest encryption technologies to ensure your data is secure and protected.'
  }
]

const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
        <div className="max-w-xl mx-auto">
          <p className='text-center mt-5 text-xl text-white/70'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4 '>
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features