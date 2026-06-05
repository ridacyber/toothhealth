'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PLACEHOLDERS = [
  'My gums bleed when I brush...',
  'My tooth hurts with cold water...',
  'I think I chipped a tooth...',
  'Why is my jaw sore in the morning?',
  'There is a white spot on my gum...',
  'My breath smells bad even after brushing...',
];

export default function HeroSearch() {
  const [value, setValue] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentPlaceholder = PLACEHOLDERS[placeholderIndex];
    
    const interval = setInterval(() => {
      if (isDeleting) {
        setPlaceholderText(prev => prev.slice(0, -1));
        if (placeholderText === '') {
          setIsDeleting(false);
          setPlaceholderIndex(i => (i + 1) % PLACEHOLDERS.length);
        }
      } else {
        setPlaceholderText(prev => {
          const nextChar = currentPlaceholder[prev.length];
          return prev + (nextChar || '');
        });
        if (placeholderText === currentPlaceholder) {
          setTimeout(() => setIsDeleting(true), 2000);
          clearInterval(interval);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearInterval(interval);
  }, [placeholderIndex, placeholderText, isDeleting]);

  const handleSubmit = () => {
    if (!value.trim()) return;
    router.push(`/ask?q=${encodeURIComponent(value.trim())}`);
  };

  return (
    <div className="hero-search">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
        placeholder={placeholderText}
        className="hero-search__input"
      />
      <button onClick={handleSubmit} className="hero-search__btn">
        Ask ToothHealth
      </button>
    </div>
  );
}
