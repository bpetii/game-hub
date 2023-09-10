
import React from "react";
import { Button, SimpleGrid, Text, Box, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
	const {
		data:games, 
		error, 
		isLoading, 
		fetchNextPage, 
		hasNextPage
	} = useGames(gameQuery);
	const skeletons = [1,2,3,4,5,6];

	if (error) return <Text>{error.message}</Text>

	const fetchedGamesCount = games?.pages.reduce((total, page) => {
		return total + page.results.length
	}, 0) || 0

	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			hasMore = {!!hasNextPage}
			next={()=> fetchNextPage()}
			loader={<Spinner/>}
			>
			<SimpleGrid 
				columns={{sm:1, md: 2, lg:3, xl: 4 }} 
				padding='10px' 
				spacing={6}
			>
				{isLoading && skeletons.map(skeleton => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>))}
				{games?.pages.map((page, index) => 
					<React.Fragment key={index}>
						{
							page.results.map(game => 
							<GameCardContainer key={game.id}>
								<GameCard game={game}/>
							</GameCardContainer>)
						}
					</React.Fragment>)}
			</SimpleGrid>
		</InfiniteScroll>
	);
}

export default GameGrid;