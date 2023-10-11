// localhost:3000/profile

import { getAuthSession } from '@/lib/auth';
import { getUserProfile } from '@/src/query/user.query';
import { notFound } from 'next/navigation';
import React from 'react'
import Profile from '../users/[userId]/Profile';
import { Button, buttonVariants } from '@/components/ui/button';
import { Post } from '@/src/features/post/Post';
import { followUser } from '../users/[userId]/follow.action';
import Link from 'next/link';
import { PenSquare } from 'lucide-react';

export default async function ProfilePage() {
  const session = await getAuthSession();

  if(!session?.user?.id) {
    notFound();
  }

  const user = await getUserProfile(session?.user?.id);
  if(!user) {
    notFound();
  }
  return (
    <div>
      
    <Profile user={user}>
      <form className="mt-4">
        <Link href='/profile/edit' className={buttonVariants({
          variant: 'outline',
        })}
        >
          Edit Profile
        </Link>
      </form>
    </Profile>
    <div className="divide-y divide-accent border-t border-accent mt-6">
      {user.posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
    </div>

  );
}
