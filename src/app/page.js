import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Este sitio Web se encuentra en Desarrollo...&nbsp;          
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/korb-logo.svg"
              alt="Korb Logo"
              className={styles.vercelLogo}
              width={194}
              height={86}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/h-deq_logo.png"
          alt="H-DEQ Logo"
          width={379}
          height={105}
          priority
        />
      </div>

      <div className={styles.grid}></div>
    </main>
  )
}
