import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import Txt from '../components/Txt/Txt';
import Title from '../components/Title/Title';
import Card from '../components/Cards/Card/Card';
import Link from 'next/link';
import Btn from '../components/Btn/Btn';

export const metadata: Metadata = {
	title: 'Send a Case - Smile Art Lab',
	description: 'Smile Art Lab Send a Case Page',
	keywords: 'Smile Art Lab Send a Case Page',
};

const Case: NextPage = () => {
	return (
		<>
			<Hero
				bgUrl="bg-[url('/hero/bg-4.jpg')] bg-cover"
				title="Headline - Lorem Ipsum Dolor ..."
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure."
			/>
			<section className="pt-[40px] pb-[100px]">
				<div className="max-w-[1285] mx-auto px-[15px]">
					<div className="text-center grid gap-16 mobile:gap-10 mb-20 mobile:mb-10">
						<h2 className="title">Send a Case</h2>
						<Txt text={['In order to make it as easy as possible for you to send your case to us, we provide two options:']} />
					</div>
					<div className="grid gap-2 grid-flow-col justify-center justify-items-center items-center mobile:grid-cols-1 mobile:grid-flow-row">
						<div className="bg-[#F5F4F2] rounded-[60px] px-8 py-10 middle:py-7 middle:px-5 grid justify-items-center justify-center items-center gap-6 h-full">
							<div className="w-[153px] h-[153px] mobile:w-[103px] mobile:h-[103px] rounded-[36px] flex justify-center items-center bg-gg mx-auto">
								<Image className="mobile:w-full mobile:h-full mobile:max-w-[70%]" src={'/Case/block-two/1.svg'} alt="Case Icon" width={112} height={96} />
							</div>
							<Title className="text-center" title="Traditional Impression" />
							<Txt
								className="max-w-[517px]"
								text={[
									'We will send a courier to your door to pick up the case. All you need to do is give us a call on 0405 995 310 to provide us with pick up details and remember to download our RX form to send along with the case.',
								]}
							/>
						</div>
						<div className="bg-[#F5F4F2] rounded-[60px] px-8 py-10 middle:py-7 middle:px-5 grid justify-items-center justify-center items-center gap-6 h-full">
							<div className="w-[153px] h-[153px] mobile:w-[103px] mobile:h-[103px] rounded-[36px] flex justify-center items-center bg-gg mx-auto">
								<Image className="mobile:w-full mobile:h-full mobile:max-w-[70%]" src={'/Case/block-two/2.svg'} alt="Case Icon" width={126} height={83} />
							</div>
							<Title className="text-center" title="Digital Impression" />
							<Txt
								className="max-w-[517px]"
								text={['You can easily send us files from your intraoral scanner. If you don’t see your scanner on the list below, call us on 0405 995 310 and we will guide you through the setup process.']}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-[rgba(233,_232,_228,_0.50)] rounded-[95px]">
				<div className="max-w-[1250px] px-[15px] mx-auto">
					<div className="cards mb-20 grid grid-rows-2 grid-cols-3 justify-items-center justify-center gap-2.5 tablets:grid-rows-none tablets:grid-cols-2 mobile:grid-cols-1">
						<div className="grid grid-cols-2 col-span-full gap-2.5 tablets:justify-between  tablets:w-full justify-items-center mobile:grid-cols-1">
							<Card className="mobile:max-w-full" imageUrl="/Case/card/check.svg" width={90} height={90} heading="3 Shape TRIOS">
								<p>
									<span className="font-bold">1. </span>Visit
									<Link className="inline-block mx-1 underline" href={'https://portal.3shapecommunicate.com/login'}>
										portal.3shapecommunicate.com/login
									</Link>
									and enter your Username and Password. Click on “Connections” then “Add Connection”.
								</p>
								<p>
									<span className="font-bold">2. </span>Enter:
									<Link className="inline-block mx-1 underline" href={'https://digital@smileartlab.com'}>
										digital@smileartlab.com
									</Link>
									and click on connect.
								</p>
								<p>
									<span className="font-bold">3. </span>We will approve your connection and begin to process your case.
								</p>
							</Card>
							<Card className="mobile:max-w-full" imageUrl="/Case/card/check.svg" width={90} height={90} heading="iTero">
								<p>
									<span className="font-bold">1. </span>Call iTero at 1800 468 472 and request to Smile Art Lab to your “Favourite Lab” list.
								</p>
								<p>
									<span className="font-bold">2. </span>On the Cadent Lab List, search for Smile Art Lab. Select our laboratory as a “favourite Lab”.
								</p>
								<p>
									<span className="font-bold">3. </span>Send Your Scan: Submit your scans. We will receive the scan and begin processing your case.
								</p>
							</Card>
						</div>

						<Card className="mobile:max-w-full tablets:w-full row-start-2 tablets:row-auto" imageUrl="/Case/card/check.svg" width={90} height={90} heading="Medit">
							<p>
								<span className="font-bold">1. </span> Log in to your Medit Link account.
								<Link className="inline-block mx-1 underline" href={'https://www.meditlink.com/'}>
									https://www.meditlink.com/
								</Link>
							</p>
							<p>
								<span className="font-bold">2. </span>Select Partners and click on “Search For Partner
							</p>
							<p>
								<span className="font-bold">3. </span>Enter
								<Link className="inline-block mx-1 underline" href={'https://digital@smileartlab.com/'}>
									digital@smileartlab.com
								</Link>
								and click ‘Request Contract’
							</p>
						</Card>
						<Card className="mobile:max-w-full row-start-2 tablets:row-auto" imageUrl="/Case/card/check.svg" width={90} height={90} heading="Cerec">
							<p>
								<span className="font-bold">1. </span>Sign in to your account at
								<Link className="inline-block mx-1 underline" href={'https://cerec-connect.com'}>
									cerec-connect.com
								</Link>
								and navigate to the “My Account” menu.
							</p>
							<p>
								<span className="font-bold">2. </span>Click on “My Favorite Labs” & search for Smile Art Lab. Our zip code is 2066. Check the box next to our name and click Add.
							</p>
							<p>
								<span className="font-bold">3. </span>You are now ready to submit your scans to us through the Cerec Connect Portal.
							</p>
						</Card>
						<Card className="mobile:max-w-full tablets:w-full row-start-2 tablets:row-auto tablets:col-span-2 max-w-full mobile:col-auto " imageUrl="/Case/card/check.svg" width={90} height={90} heading="iTero">
							<p>
								<span className="font-bold">1. </span> Log in to your CS Connect account
							</p>
							<p>
								<span className="font-bold">2. </span> Select the case you would like to send and locate case details
							</p>
							<p>
								<span className="font-bold">3. </span>Under ‘choose a laboratory’, enter our email address:
								<Link className="inline-block mx-1 underline" href={'https://info@smileartlab.com'}>
									info@smileartlab.com
								</Link>
							</p>
						</Card>
					</div>
					<Title className="mb-5 text-center" title="Other Scanner" />
					<div className="scanner-list grid gap-5">
						<p>As long as your scanner can produce STL files, scans for other scanners can be sent to us via DropBox*.</p>
						<ol className="grid gap-5">
							<li>
								<span className="font-bold">1. </span> Register for a Dropbox account using your surgery’s details and login to your Dropbox account.
							</li>
							<li>
								<span className="font-bold">2. </span> Create a folder in your Dropbox account for the case you would like to send to us. Name the folder under your patient’s name.
							</li>
							<li>
								<span className="font-bold">3. </span>
								Fill in an{' '}
								<Link className="underline" href={'#'}>
									RX form
								</Link>{' '}
								and upload it as well as the STL digital scans to the relevant Dropbox folder (created in Step 3).
							</li>
							<li>
								<span>4</span>
								Once uploaded, share the entire folder with{' '}
								<Link className="underline" href={'#'}>
									info@smileartlab.com
								</Link>
							</li>
							<li>
								<span className="font-bold">5. </span>
								Give us a call on 0405 995 310 or send an email to
								<Link className="underline" href={'mailto:info@smileartlab.com'}>
									info@smileartlab.com
								</Link>
								to let us know that you’ve shared a case with us.
							</li>
						</ol>
						<p>
							*If you find a different file transfer method easier or more suitable, feel free to send your case that way, eg. Google Drive, Wetransfer, etc. Please note that the steps for sharing will vary slightly from the
							Dropbox steps above if you use another method. Please call 0405 995 310 or email
							<Link className="underline" href={'mailto:info@smileartlab.com'}>
								info@smileartlab.com
							</Link>
							if you have any questions or need any assistance sending a case.
						</p>
					</div>
					<Btn className="mx-auto max-w-fit px-10 mt-20 mobile:mt-12" text="Download RX Form">
						<Image className="ml-2.5" src={'/Case/download.svg'} alt="Download icon" width={18} height={23} />
					</Btn>
				</div>
			</section>

			<section className="SimpleBlock py-24 mobile:py-20 middle:py-14">
				<div className="mx-auto px-5 max-w-[1200px] text-center">
					<div className="bg-white rounded-[60px] shadow-[35px_35px_60px_0px_rgba(0,_0,_0,_0.15)] relative z-[2] py-20 mobile:py-14 px-5">
						<Title className="text-[#080A11] text-4xl mobile:text-3xl middle:text-2xl" title="You don’t have an account with Smile Art Lab yet?" />
						<Title className="text-[#080A11] text-4xl mobile:text-3xl middle:text-2xl" title="Click on the button below to get started" />
						<Btn className="mx-auto mt-16 px-20 mobile:px-12" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Case;
