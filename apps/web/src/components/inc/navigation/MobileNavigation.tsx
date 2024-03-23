'use client';

import Image from 'next/image';
import { Dialog } from '../../ui/Dialog';
import Hamburger from '../../../assets/images/hamburger.svg';
import { useMobileNavigation } from './useMobileNavigation';
import { VisuallyHidden } from '../../ui/VisuallyHidden';
import Link from 'next/link';
import { links } from './links';

export function MobileNavigation() {
	const { isOpen, open, close } = useMobileNavigation();

	return (
		<Dialog
			trigger={
				<button
					type="button"
					className="a11y-button rounded-sm"
					onClick={open}
				>
					<Image src={Hamburger} alt="open navigation" />
				</button>
			}
			title={<VisuallyHidden>Nawigacja</VisuallyHidden>}
			content={
				<ul
					role="list"
					className="flex flex-col items-center gap-y-5 text-xl"
				>
					{[
						...links,
						{ name: 'Login', href: '/login' },
						{ name: 'Sign up', href: '/sign-up' },
					].map(({ name, href }, index) => (
						<li key={index}>
							<Link
								href={href}
								className="a11y-link text-white font-medium p-4 whitespace-nowrap"
								onClick={close}
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
			}
			isOpen={isOpen}
			close={close}
		/>
	);
}
