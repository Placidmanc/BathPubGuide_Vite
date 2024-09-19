import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { useQuery } from '@apollo/client';
import { GET_PUBS } from '../gql.ts';
import PubImage from './PubImage';
import PubTimes from './PubTimes';
import PubAmenities from './PubAmenities';
import PubSocialMedia from './PubSocialMedia';
import PubContact from './PubContact';
import PubDescription from './PubDescription';
import PubAddress from './PubAddress';
import { GetPubsData } from '../types.ts';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));

const App = () => {
	const { loading, error, data } = useQuery<GetPubsData>(GET_PUBS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{data &&
					data.pubs.edges.map(({ node }) => (
						<Grid key={node.id} size={{ xs: 6, md: 8 }}>
							<Item>
								<h2>{node.title}</h2>
								<PubAddress address={node.pubsingle.address} />
								<PubDescription
									shortDesc={node.pubsingle.shortDesc}
									fullDesc={node.pubsingle.fullDesc}
								/>
								<PubContact website={node.pubsingle.website} telephone={node.pubsingle.telephone} />
								<PubSocialMedia
									facebook={node.pubsingle.facebook}
									twitter={node.pubsingle.twitter}
									instagram={node.pubsingle.instagram}
									youtube={node.pubsingle.youtube}
								/>
								<PubTimes openDays={node.pubsingle.openDays} foodDays={node.pubsingle.foodDays} />
								<PubAmenities
									accomodation={node.pubsingle.accomodation}
									entertainment={node.pubsingle.entertainment}
									food={node.pubsingle.food}
									onTapRegulars={node.pubsingle.onTapRegulars}
									dogFriendly={node.pubsingle.dogFriendly}
									beerGarden={node.pubsingle.beerGarden}
									liveMusic={node.pubsingle.liveMusic}
									games={node.pubsingle.games}
									familyFriendly={node.pubsingle.familyFriendly}
									snookerpool={node.pubsingle.snookerpool}
									outsideSeating={node.pubsingle.outsideSeating}
									functionRoom={node.pubsingle.functionRoom}
									tapRoombrewery={node.pubsingle.tapRoombrewery}
									parking={node.pubsingle.parking}
									sportsOnTv={node.pubsingle.sportsOnTv}
									lgbtqFriendly={node.pubsingle.lgbtqFriendly}
								/>
								{node.pubsingle?.image?.node?.sourceUrl && (
									<PubImage
										altText={node.pubsingle.image.node.altText}
										sourceUrl={node.pubsingle.image.node.sourceUrl}
									/>
								)}
							</Item>
						</Grid>
					))}
			</Grid>
		</Box>
	);
};

export default App;
