import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

type PubSocialMediaProps = {
	facebook?: string;
	twitter?: string;
	instagram?: string;
	youtube?: string;
};

const PubSocialMedia = ({ facebook, twitter, instagram, youtube }: PubSocialMediaProps) => (
	<>
		{facebook && (
			<IconButton aria-label='Facebook' onClick={() => window.open(facebook, '_blank')}>
				<FacebookIcon />
			</IconButton>
		)}
		{twitter && (
			<IconButton aria-label='Twitter' onClick={() => window.open(twitter, '_blank')}>
				<XIcon />
			</IconButton>
		)}
		{instagram && (
			<IconButton aria-label='Instagram' onClick={() => window.open(instagram, '_blank')}>
				<InstagramIcon />
			</IconButton>
		)}
		{youtube && (
			<IconButton aria-label='YouTube' onClick={() => window.open(youtube, '_blank')}>
				<YouTubeIcon />
			</IconButton>
		)}
	</>
);
export default PubSocialMedia;
