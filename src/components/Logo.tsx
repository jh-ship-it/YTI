export default function Logo({ className = '', mark = false }: { className?: string; mark?: boolean }) {
  return <img src={mark ? '/brand/yti-mark.png' : '/brand/yti-horizontal.png'} alt={mark ? '' : 'Youth Trauma Initiative'} className={`yti-logo ${className}`} style={{ objectFit: 'contain', height: 'auto' }} />;
}
