import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();


    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error)? 'This page doesnt exits' : 'An unexpted error occured'}</Text>
            </Box>
        </>
    )
};

export default ErrorPage;