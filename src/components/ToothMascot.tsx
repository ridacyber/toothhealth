export function ToothMascot({ size = 24, pulse = false }: { size?: number; pulse?: boolean }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={pulse ? { animation: 'tooth-pulse 0.9s ease-in-out infinite' } : {}}
    >
      <path
        d="M4 2C2.5 2 1 3.5 1 6C1 9 2 12 3 14C4 16 4 19 5 22C5.4 23.5 5.8 24 6.5 24C7.2 24 7.6 23.5 8 21.5C8.4 19.5 9 18 10 18C11 18 11.6 19.5 12 21.5C12.4 23.5 12.8 24 13.5 24C14.2 24 14.6 23.5 15 22C16 19 16 16 17 14C18 12 19 9 19 6C19 3.5 17.5 2 16 2C14.5 2 13.5 3 12 3C11.3 3 10.7 2.5 10 2.5C9.3 2.5 8.7 3 8 3C6.5 3 5.5 2 4 2Z"
        fill="currentColor"
      />
      <style>{`@keyframes tooth-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(0.88)} }`}</style>
    </svg>
  )
}
