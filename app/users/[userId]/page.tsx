import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/query/user.query';
import React from 'react'
import Profile from './Profile';
import { notFound } from 'next/navigation';

export default async function UserPage({params}: {
  params:{
    userId: string
  }
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);

  if (!user) {
    return notFound();
  }

  return (
    <Profile user={user} />
  )
}
