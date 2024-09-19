export interface Pub {
	id: string;
	title: string;
	pubsingle: {
		shortDesc?: string;
		fullDesc?: string;
		address?: string;
		website?: string;
		telephone?: string;
		openDays?: string[];
		foodDays?: string[];
		facebook?: string;
		twitter?: string;
		instagram?: string;
		youtube?: string;
		lat?: number;
		lon?: number;
		image?: {
			node: {
				sourceUrl: string;
				altText: string;
			};
		};
		accomodation: boolean;
		entertainment: boolean;
		food: boolean;
		onTapRegulars?: string[];
		dogFriendly: boolean;
		beerGarden: boolean;
		liveMusic: boolean;
		games: boolean;
		familyFriendly: boolean;
		snookerpool: boolean;
		outsideSeating: boolean;
		functionRoom: boolean;
		tapRoombrewery: boolean;
		parking: boolean;
		sportsOnTv: boolean;
		lgbtqFriendly: boolean;
		openingHours?: string;
	};
}

export interface GetPubsData {
	pubs: {
		edges: {
			node: Pub;
		}[];
	};
}
