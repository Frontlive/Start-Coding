import { Disclosure } from '@headlessui/react';
import { Text } from 'ui/components/atoms/text/text';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Checkbox } from 'ui/components/molecules/checkbox/checkbox';
import { Heading } from 'ui/components/atoms/heading/heading';
import type { Filter } from '../../../types/types';

type FiltersProps = {
	filters: Filter[];
};
export const Filters = ({ filters }: FiltersProps) => {
	return (
		<>
			{filters.map((section) => (
				<Disclosure
					as="div"
					key={section.id}
					className="border-t border-gray-200 px-4 py-6"
				>
					{({ open }) => (
						<>
							<Heading tag="h3" size="medium" className="-mx-2 -my-3 flow-root">
								<Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
									<Text size="medium" variant="default" tag="span">
										{section.name}
									</Text>
									<span className="ml-6 flex items-center">
										{open ? (
											<MinusIcon className="h-5 w-5" aria-hidden="true" />
										) : (
											<PlusIcon className="h-5 w-5" aria-hidden="true" />
										)}
									</span>
								</Disclosure.Button>
							</Heading>
							<Disclosure.Panel className="pt-6">
								<div className="space-y-6">
									{section.options.map((option) => (
										<div key={option.value} className="flex items-center">
											<Checkbox label={option.label} />
										</div>
									))}
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			))}
		</>
	);
};
