import Image from 'next/image';
import { Card } from 'ui';

type CommentItemProps = {
	author: string;
	avatar: string;
	comment: string;
	date: string;
};

export const CommentItem = ({
	author,
	avatar,
	comment,
	date,
}: CommentItemProps) => {
	return (
		<div className="flex-col w-full py-2 mx-auto bg-white sm:px-4 md:px-4 md:w-2/3">
			{/*<Card tag="div">*/}
			{/*	<div className="flex flex-row">*/}
			{/*		<Image*/}
			{/*			className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"*/}
			{/*			alt="Noob master's avatar"*/}
			{/*			src={avatar}*/}
			{/*			width={48}*/}
			{/*			height={48}*/}
			{/*		/>*/}
			{/*		<div className="flex-col mt-1">*/}
			{/*			<div className="flex items-center flex-1 px-4 font-bold leading-tight">*/}
			{/*				{author}*/}
			{/*				<span className="ml-2 text-xs font-normal text-gray-500">*/}
			{/*					{date} 2 weeks ago*/}
			{/*				</span>*/}
			{/*			</div>*/}
			{/*			<div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">*/}
			{/*				{comment}*/}
			{/*			</div>*/}
			{/*			<button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">*/}
			{/*				<svg*/}
			{/*					className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"*/}
			{/*					viewBox="0 0 95 78"*/}
			{/*					xmlns="http://www.w3.org/2000/svg"*/}
			{/*				>*/}
			{/*					<path*/}
			{/*						d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"*/}
			{/*						fill-rule="nonzero"*/}
			{/*					/>*/}
			{/*				</svg>*/}
			{/*			</button>*/}
			{/*			<button className="inline-flex items-center px-1 -ml-1 flex-column">*/}
			{/*				<svg*/}
			{/*					className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"*/}
			{/*					fill="none"*/}
			{/*					stroke="currentColor"*/}
			{/*					viewBox="0 0 24 24"*/}
			{/*					xmlns="http://www.w3.org/2000/svg"*/}
			{/*				>*/}
			{/*					<path*/}
			{/*						stroke-linecap="round"*/}
			{/*						stroke-linejoin="round"*/}
			{/*						stroke-width="2"*/}
			{/*						d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"*/}
			{/*					></path>*/}
			{/*				</svg>*/}
			{/*			</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<hr className="my-2 ml-16 border-gray-200" />*/}
			{/*	<div className="flex flex-row pt-1 md-10 md:ml-16">*/}
			{/*		<Image*/}
			{/*			className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"*/}
			{/*			alt="Noob master's avatar"*/}
			{/*			src={avatar}*/}
			{/*			width={48}*/}
			{/*			height={48}*/}
			{/*		/>*/}
			{/*		<div className="flex-col mt-1">*/}
			{/*			<div className="flex items-center flex-1 px-4 font-bold leading-tight">*/}
			{/*				{author}*/}
			{/*				<span className="ml-2 text-xs font-normal text-gray-500">*/}
			{/*					{date} 5 days ago*/}
			{/*				</span>*/}
			{/*			</div>*/}
			{/*			<div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">*/}
			{/*				{comment}*/}
			{/*			</div>*/}
			{/*			<button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">*/}
			{/*				<svg*/}
			{/*					className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"*/}
			{/*					viewBox="0 0 95 78"*/}
			{/*					xmlns="http://www.w3.org/2000/svg"*/}
			{/*				>*/}
			{/*					<path*/}
			{/*						d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"*/}
			{/*						fill-rule="nonzero"*/}
			{/*					/>*/}
			{/*				</svg>*/}
			{/*			</button>*/}
			{/*			<button className="inline-flex items-center px-1 -ml-1 flex-column">*/}
			{/*				<svg*/}
			{/*					className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"*/}
			{/*					xmlns="http://www.w3.org/2000/svg"*/}
			{/*					viewBox="0 0 20 20"*/}
			{/*					fill="currentColor"*/}
			{/*				>*/}
			{/*					<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />*/}
			{/*				</svg>*/}
			{/*			</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</Card>*/}

			<Card tag="div">
				<div className="flex flex-row md-10">
					<Image
						className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
						alt="Noob master's avatar"
						src={avatar}
						width={48}
						height={48}
					/>
					<div className="flex-col mt-1">
						<div className="flex items-center flex-1 px-4 font-bold leading-tight">
							{author}
							<span className="ml-2 text-xs font-normal text-gray-500">
								{date} 3 days ago
							</span>
						</div>
						<div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
							{comment}
						</div>
						<button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
							<svg
								className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
								viewBox="0 0 95 78"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
									fill-rule="nonzero"
								/>
							</svg>
						</button>
						<button className="inline-flex items-center px-1 -ml-1 flex-column">
							<svg
								className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
};
