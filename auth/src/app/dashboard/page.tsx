'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.scss';
import { useUser } from '@/app/context/UserContext';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) router.push('/auth');
  }, [user]);

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}