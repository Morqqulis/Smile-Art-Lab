import { merry } from '@/app/layout';
import Btn from '../Btn/Btn';

const Collaborate = () => {
	return (
		<section className="collaborate pb-[130px] ">
			<div className="max-w-[1100px] mx-auto px-[15px] relative z-10">
				<div className="rounded-[60px] shadow-[35px_35px_60px_0px_rgba(0,_0,_0,_0.15)] py-16 relative z-10 bg-white">
					<h3 className={`title ${merry.className} text-center mb-3 middle:text-2xl`}>Interested to collaborate with us?</h3>
					<div className="text text-center max-w-[490px] mx-auto mb-14">
						<p>To get started now, click on the button below and we look forward to working with you</p>
					</div>
					<Btn className="max-w-fit mx-auto" />
				</div>
			</div>
		</section>
	);
};

export default Collaborate;
