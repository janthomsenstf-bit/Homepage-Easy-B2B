import { redirect } from 'next/navigation'

export default function PitchAndMeetPage() {
  // Redirect to new /events page
  redirect('/events')
}
