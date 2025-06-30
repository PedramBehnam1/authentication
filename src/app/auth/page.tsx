'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './AuthForm.module.scss';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';
import { useUser } from '@/app/context/UserContext';

const isValidIranianPhone = (phone: string) => /^\+98\d{10}$/.test(phone);

export default function AuthPage() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { setUser } = useUser();

    const handleLogin = async () => {
        if (!isValidIranianPhone(phone)) {
          setError('شماره تلفن معتبر نیست. با +98 شروع شود.');
          return;
        }
        setError('');


        const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
        const data = await res.json();
        const user = data.results[0];
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        router.push('/dashboard');
    }
    return (
        <div className={styles.container}>
          <h1>ورود</h1>
          <Input
            value={phone}
            onChange={setPhone}
            placeholder="شماره تلفن +98..."
            error={error}
          />
          <Button onClick={handleLogin}>ورود</Button>
        </div>
    );
};