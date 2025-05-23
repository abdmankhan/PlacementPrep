import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import InterviewCard from '@/components/InterviewCard'
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'
import { getCurrentUser } from '@/lib/actions/auth.action'

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  //parallel request, to fetch both by id & all interviews in one go

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;
  
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
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>
              You haven&apos;t taken any interviews yet. Take an interview now
              to improve your skills.
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2> Take an interview</h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>
              There are no interviews available right now. Please check back
              later or create your own interview.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Page
