import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { tabs } from 'molecules/tabs/tabsContent';

export const Tabs = () => {
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
					{tabs.map((tab) => {
						const Content = tab.content;
						return (
							<Tab.Panel key={tab.label}>
								<Content />
							</Tab.Panel>
						);
					})}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
};
