import { Tab } from '@headlessui/react';
import { Opinions } from 'molecules/opinions/opinions';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Comments } from 'molecules/comments/comments';

type TabObject = {
	label: string;
	content: ReactNode;
};

export const Tabs = () => {
	const tabs: TabObject[] = [
		{
			label: 'Opinie',
			content: <Opinions />,
		},
		{
			label: 'Rozwiązania',
			content: 'Tab 2',
		},
		{
			label: 'Komentarze',
			content: <Comments />,
		},
	];

	return (
		<div className="w-full px-2 py-16 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex flex-col md:flex-row border-b-2 mb-3">
					{tabs.map((tab) => (
						<Tab
							key={tab.label}
							className={({ selected }) =>
								clsx(
									'w-full rounded-tl-lg rounded-tr-lg py-2.5 text-sm font-medium text-blue-700',
									'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 hover:bg-blue-50 transition ease-in-out duration-150',
									selected ? 'border-2 border-blue-500 shadow' : 'text-black',
								)
							}
						>
							{tab.label}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="w-full">
					{tabs.map((tab) => (
						<Tab.Panel key={tab.label}>{tab.content}</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};
