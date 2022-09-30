import { useHelloWorldQuery, HelloWorldDocument } from 'generated';

const Page = () => {
	const { data, loading } = useHelloWorldQuery();

	return loading || !data ? (
		<div>LOADING...</div>
	) : (
		<div>{data.helloWorld}</div>
	);
};

export default Page;

export const getStaticProps = async () => {

}