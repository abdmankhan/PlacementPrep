import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import React from 'react'
import InterviewCard from '@/components/InterviewCard'

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview-ready with AI powered system</h2>
          <p className="text-lg">
            Practice job interviews with AI powered system. Get personalized
            feedback and improve your interview skills.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <a href="/interview">Start an Interview</a>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2> Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2> Take an interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>
            There are no interviews available right now. Please check back later
            or create your own interview.
          </p> */}
        </div>
      </section>
    </>
  );
}

export default Page
