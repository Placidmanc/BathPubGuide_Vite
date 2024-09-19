import Box from '@mui/material/Box';

type PubImageProps = {
	altText: string;
	sourceUrl: string;
};

const PubImage = ({ altText, sourceUrl }: PubImageProps) => (
	<Box
		component='img'
		sx={{
			height: 300,
			width: 750,
			maxHeight: { xs: 233, md: 167 },
			maxWidth: { xs: 350, md: 250 },
		}}
		alt={altText || 'No description'}
		src={sourceUrl}
	/>
);
export default PubImage;
