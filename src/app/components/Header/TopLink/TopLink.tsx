import Link from 'next/link';

interface ITopLink {
	text?: string;
	href?: string;
}

const TopLink = ({ text, href }: ITopLink) => {
	//----------------------------------------------

	return (
		<Link
			className="TopLink flex gap-1.5 items-center whitespace-nowrap transition-transform hover:scale-[1.1] relative before:absolute before:bottom-[-7px] before:left-[50%] before:translate-x-[-50%] before:w-0 before:h-[2px] hover:before:w-full before:bg-gg before:transition-all small:gap-1"
			href={href || '/'}>
			<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<rect x="0.0576172" y="0.331055" width="23" height="27" fill="url(#pattern0)" />
				<defs>
					<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
						<use xlinkHref="#image0_0_1416" transform="scale(0.0434783 0.037037)" />
					</pattern>
					<image
						id="image0_0_1416"
						width="23"
						height="27"
						xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAbCAYAAACX6BTbAAABv0lEQVRIia3WP2sVQRSH4WevSQxKRFHQJiiItiI2EbRJpxArYwL+abQR/QxWIoitjZWQQmyESAxBG0ELLSz8ArHSENJIRJQbxMiEs7AMN7l7d/3BLLs7M++cPXPO2Snez03JdArXcCjvqKlfeIk3Q9n4s1jEgYbgUrdTq8ILPAxwWuBDQ/Ax3MSjKnwPTuAPbmG1heXncLSTWb6Jv9jVApy0kS6dbTqLlvBiJ3ip0TYr5G7Zh5FwT3p+i6dN3VTd0C4exMauY3faFEzgIK7H+0bwjYBX1Y37qfiKaSwPAp/EmR59yT37K8+nY4Er+FgX/gyHaxozntIaNzDfb3CnQdiN4QXu9Iu2TiTNoErzHuPS/7a81H283mlA8vnwgNBUe+7iSb+BQ+G7iR59wxHbY5V361HrX9WxIsGfR+ulixX4F8zgUx2wLImSpVejnsxFCRiJvhTXl/GtLjiHj0YE7MUCVrCGz2Hxz0HAOTxZ+iO+oKztk+HnJuEq/4fm+t4EWmq7DNtsAy3n5/AiWrf3nNraqv9Vt6TzxlcciVPAu4YWH8fJlGz5oehCVLsyBNvoXr6hSziP2RYHo99bHBb+AY/mTFNPSsy8AAAAAElFTkSuQmCC"
					/>
				</defs>
			</svg>
			<span className="text-base leading-normal font-medium small:text-xs">{text}</span>
		</Link>
	);
};

export default TopLink;
