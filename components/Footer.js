import styles from './Footer.module.css'
import routes from './routes';

export default function Footer() {
  return (
    <footer className="bg-tlgray-100">
      <div className="copy pl-8 py-5 bg-tlgray-700 text-white text-md">
        &copy; SolCapture 2021 All Rights Reserved. <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  )
}
