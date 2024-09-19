import { gql } from '@apollo/client';

export const GET_PUBS = gql`
	query GetPubs {
		pubs {
			edges {
				node {
					id
					title
					pubsingle {
						shortDesc
						fullDesc
						address
						website
						telephone
						lat
						lon
						openDays
						foodDays
						facebook
						twitter
						instagram
						youtube
						image {
							node {
								sourceUrl
								altText
							}
						}
						thumb {
							node {
								sourceUrl
								altText
							}
						}
						accomodation
						entertainment
						food
						onTapRegulars
						dogFriendly
						beerGarden
						liveMusic
						games
						familyFriendly
						snookerpool
						outsideSeating
						functionRoom
						tapRoombrewery
						parking
						sportsOnTv
						lgbtqFriendly
						openingHours
					}
				}
			}
		}
	}
`;
