import styles from './Footer.module.css'

export default function Footer() {
  // return (
  //   <>
  //     <footer className={styles.footer}>
  //       Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
  //     </footer>
  //   </>
  // )
  return (
    <footer className="bg-tlgray-100">
    {/* <script>
        function toggleNav() {
            var hamburger = document.getElementById("hamburgerbtn");
            var overlay = document.getElementById("overlay");
            var body = document.body;

            hamburger.addEventListener("click", function () {
                overlay.classList.toggle("open");
                hamburger.classList.toggle("is-open");
                body.classList.toggle("scroll-lock");
            });
        }
        toggleNav();

        document.querySelector('.scroll-top').addEventListener('click', () => {
            document.documentElement.scrollTop = 0;
        });
    </script> */}
    <div className="flex items-center justify-between flex-wrap bg-gray-800 p-8 text-white">
        <div className="items-center text-xl text-grey-900 mr-6">
            SolCapture
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="mobileMenu">
            <div className="text-lg lg:flex-grow">
            </div>
            <div className="text-lg">
            <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-8">
                  Contact
                </a>
                <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-8">
                  About
                </a>
            </div>
        </div>
    </div>
    <div className="copy pl-8 py-5 bg-tlgray-700 text-white text-md">
        &copy; SolCapture 2021 All Rights Reserved.
    </div>
</footer>

  )
}
