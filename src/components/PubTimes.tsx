type PubTimesProps = {
	openDays?: string[];
	foodDays?: string[];
};

const PubTimes = ({ openDays, foodDays }: PubTimesProps) => (
	<>
		{openDays && openDays.length > 0 && <p>Open Days: {openDays.join(', ')}</p>}
		{foodDays && foodDays.length > 0 && <p>Food Days: {foodDays.join(', ')}</p>}
	</>
);

export default PubTimes;
