import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assets/images/logo.svg';
import { Button } from '../../ui/Button';
import { MobileNavigation } from './MobileNavigation';
import { links } from './links';

export const Navigation = () => {
	return (
		<nav className="w-full flex justify-between items-center p-4 pt-8 md:p-8 lg:p-10 xl:p-12 text-white">
			<header className="flex-1">
				<Link
					href="/"
					className="a11y-link flex items-center gap-2.5 md:gap-5 w-fit p-3"
				>
					<Image src={Logo} alt="" />

					<h1 className="text-xl lg:text-2xl font-semibold">Start Coding</h1>
				</Link>
			</header>

			<ul role="list" className="hidden lg:flex flex-1 justify-center xl:gap-5">
				{links.map(({ name, href }, index) => (
					<li key={index}>
						<Link
							href={href}
							className="a11y-link font-medium text-lg p-3 whitespace-nowrap"
						>
							{name}
						</Link>
					</li>
				))}
			</ul>

			<div className="hidden lg:flex flex-1 justify-end gap-5">
				<Button type="button" variant="outline-white">
					Login
				</Button>

				<Button
					type="button"
					variant="contained-magenta"
				>
					Sign up
				</Button>
			</div>

			<div className="lg:hidden flex items-center">
				<MobileNavigation />
			</div>
		</nav>
	);
};
