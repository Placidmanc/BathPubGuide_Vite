type PubContactProps = {
	website?: string;
	telephone?: string;
};

const PubContact = ({ website, telephone }: PubContactProps) => (
	<>
		{website && <p>{website}</p>}
		{telephone && <p>{telephone}</p>}
	</>
);
export default PubContact;
