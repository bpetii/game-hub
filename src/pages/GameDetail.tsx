import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableTest from "../components/ExpandableTest";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

const GameDetail = () => {
    const {slug} = useParams();

    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner />

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableTest>
                {game.description_raw}
            </ExpandableTest>
            <GameAttributes game={game}/>
            <GameTrailer gameId={game.id}/>
        </>
    )
};

export default GameDetail;