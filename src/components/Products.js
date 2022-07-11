import Styled from "styled-components";

const Products = props => {
    return (
        <Styles>
            { props.children }
        </Styles>
    );
}
export default Products;

const Styles = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    max-width: 100%;
    overflow: auto;
`;