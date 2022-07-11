import Loading from "./Loading";
import styled from "styled-components";

export function WaitLoading() {
    return (
        <WaitLoadingStyled>
            <Loading size={100} />
        </WaitLoadingStyled>
    );
}

const WaitLoadingStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
