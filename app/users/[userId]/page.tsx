import { getAuthSession } from '@/lib/auth'
import React from 'react'

export default async function UserPage({params}: {
  params:{
    userId: string
  }
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);
  return (
    <div>page</div>
  )
}
