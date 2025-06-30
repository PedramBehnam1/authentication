import styles from './Input.module.scss';
import { FC } from 'react';

interface InputProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    error?: string;
}

const Input: FC<InputProps> = ({ value, onChange, placeholder, error }) => (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
);

export default Input;