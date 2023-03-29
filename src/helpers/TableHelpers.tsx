export const formatDate = (rawDate: string): JSX.Element => {
	const d = new Date(rawDate);

	const dts = <div>{`${d.getDay()}.${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}.${d.getFullYear()}`}</div>;
	const dts2 = <div>{`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</div>;

	return (
		<div>
			{dts}
			{dts2}
		</div>
	);
};
