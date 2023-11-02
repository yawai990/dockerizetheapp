import { authOption } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const loginRequiredInServer = async () => {
  const session = await getServerSession(authOption);

  if (!session) redirect('/');
};
