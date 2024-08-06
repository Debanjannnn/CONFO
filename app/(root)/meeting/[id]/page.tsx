import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { call } from 'assert'
import React, { useState } from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  return (
    <main className="h-screen w-full">
    <StreamCall call={call}>
      <StreamTheme>

      {!isSetupComplete ? (
        <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
      ) : (
        <MeetingRoom />
      )}
      </StreamTheme>
    </StreamCall>
  </main>
  )
}
export default Meeting
function useGetCallById(id: any): { call: any; isCallLoading: any; } {
  throw new Error('Function not implemented.');
}

