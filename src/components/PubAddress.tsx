type PubAddressProps = {
	address?: string;
};

const PubAddress = ({ address }: PubAddressProps) => <p>{address}</p>;
export default PubAddress;
