import DOMPurify from 'dompurify';

type PubDescriptionProps = {
	shortDesc?: string;
	fullDesc?: string;
};

function sanitise(dirty: string): string {
	return DOMPurify.sanitize(dirty);
}

const PubDescription = ({ shortDesc, fullDesc }: PubDescriptionProps) => (
	<>
		{shortDesc && <p>{shortDesc}</p>}
		{fullDesc && <div dangerouslySetInnerHTML={{ __html: sanitise(fullDesc) }} />}
	</>
);
export default PubDescription;
