type PubAmenitiesProps = {
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
};

const PubAmenities = ({
	accomodation,
	entertainment,
	food,
	onTapRegulars,
	dogFriendly,
	beerGarden,
	liveMusic,
	games,
	familyFriendly,
	snookerpool,
	outsideSeating,
	functionRoom,
	tapRoombrewery,
	parking,
	sportsOnTv,
	lgbtqFriendly,
}: PubAmenitiesProps) => (
	<>
		{accomodation && accomodation === true && <p>Accomodation</p>}
		{entertainment && entertainment === true && <p>Entertainment</p>}
		{food && food === true && <p>Serves Food</p>}
		{onTapRegulars && onTapRegulars.length > 0 && (
			<p>Regulars On Tap: {onTapRegulars.join(', ')}</p>
		)}
		{dogFriendly && dogFriendly === true && <p>Dog Friendly</p>}
		{beerGarden && beerGarden === true && <p>Beer Garden</p>}
		{liveMusic && liveMusic === true && <p>Live Music</p>}
		{games && games === true && <p>Pub Games</p>}
		{familyFriendly && familyFriendly === true && <p>Family Friendly</p>}
		{snookerpool && snookerpool === true && <p>Snooker/Pool</p>}
		{outsideSeating && outsideSeating === true && <p>Outside Seating</p>}
		{functionRoom && functionRoom === true && <p>Function Room</p>}
		{tapRoombrewery && tapRoombrewery === true && <p>Tap Room/Brewery</p>}
		{parking && parking === true && <p>Parking</p>}
		{sportsOnTv && sportsOnTv === true && <p>Sports on TV</p>}
		{lgbtqFriendly && lgbtqFriendly === true && <p>LGBTQ+ Friendly</p>}
	</>
);
export default PubAmenities;
