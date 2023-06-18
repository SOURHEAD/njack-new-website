import styles from './footer.module.css'
import Link from 'next/link'
const Footer = ({}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.row}>
				<div className={styles.briefInfo}>
					<img src='\home\NJACK logo.svg' alt='NJACK-Logo' />
					<p>
						NJACK is the Computer Science Club at IIT Patna, dedicated to fostering a community of passionate computer science enthusiasts. NJACK serves as a nurturing platform for students passionate about computer science at IIT
						Patna.
					</p>
				</div>
				<div className={styles.linkSection}>
					<div className={styles.links}>
						<h2>DEPARTMENTS</h2>
						<ul>
							<li>
								<Link href='/departments/cp'>Competitive Programming</Link>
							</li>
							<li>
								<Link href='/departments/devos'>Dev & OS</Link>
							</li>
							<li>
								<Link href='/departments/ml'>Machine Learning</Link>
							</li>
							<li>
								<Link href='/departments/cybersec'>Cyber Securities</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.linkSection}>
					<div className={styles.links}>
						<h2>RESOURCES</h2>
						<ul>
							<li>
								<Link href='/resources/cp_resources'>Competitive Programming</Link>
							</li>
							<li>
								<Link href='/resources/dev_resources'>Dev & OS</Link>
							</li>
							<li>
								<Link href='/resources/ml_resources'>Machine Learning</Link>
							</li>
							<li>
								<Link href='/resources/cybersec_resources'>Cyber Securities</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.map}>
					<h2>VISIT OUR CAMPUS</h2>
					<iframe
						loading='lazy'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721'
						// width='250px'
						// height='250px'
						frameborder='0'
						style={{ borderRadius: '5px' }}
						allowfullscreen></iframe>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.socialIcons}>
					<h3>Follow Us</h3>
					<ul>
						<li>
							<Link href='https://www.facebook.com/njack.iitp/'>
								<img src='\home\Facebook.png' />
							</Link>
						</li>
						<li>
							<Link href='https://www.instagram.com/njackiitp/'>
								<img src='\home\Instagram.png' />
							</Link>
						</li>
						<li>
							<Link href='https://twitter.com/njackiitp'>
								<img src='\home\Twitter.png' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={`${styles.copyrightText} ${styles.row}`}>
				<span style={{ fontWeight: 100 }}>
					&copy; Copyright <span style={{ fontWeight: 600 }}>NJACK, IIT Patna.</span>
				</span>
				<span></span>
				<span>Developed by NJACK</span>
			</div>
			
		</footer>
	)
}

export default Footer
