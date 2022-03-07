import styles from './Footer.module.css'
import routes from './routes';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tlgray-100">
      <div className="copy pl-8 py-5 bg-tlgray-700 text-white text-md">
        &copy; SolCapture 2021 All Rights Reserved. <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  )
}
