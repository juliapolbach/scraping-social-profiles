import styled from 'styled-components';

export const InfluencerBox = styled.div`
  width: 90%;
  margin: 10px 1px 1px 10px;
  padding: 10px 1px 10px 10px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.green};
  border-radius: 4px;
`;

export const EditingInfluencerBox = styled.div`
  width: 90%;
  margin: 10px 1px 1px 10px;
  padding: 10px 1px 10px 10px;
  background-color: ${props => props.theme.paleGreen};
  border: 1px solid ${props => props.theme.green};
  border-radius: 4px;
`;

export const Name = styled.h4`
  color: ${props => props.theme.green};
  float: left;
  font-weight: 700;
`;

export const EditingName = styled.h4`
  color: ${props => props.theme.white};
  float: left;
  font-weight: 700;
`;

export const Img = styled.img`
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;

`;
export const Field = styled.div`
    clear:both;
`;

export const Label = styled.div`
    display: inline-block;
    padding: 1px 0 0 10px;
    font-weight: 900;
    color: ${props => props.theme.green};
`;

export const Result = styled.div`
    display: inline-block;
    padding: 1px 10px 0 10px;
    font-weight: 900;
    color: ${props => props.theme.grey};
`;

export const StyledLink = styled.button`
  background: transparent;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme.green};
  border: 1px solid ${props => props.theme.green};
  border-radius: 30px;
  padding: 2px 10px 2px 10px;
  margin: 2px 0 2px 0;
  &:hover {
  background-color: ${props => props.theme.paleGreen};
  color: ${props => props.theme.white};
  }
  &:focus{
    outline: none;
 }`;

export const Actions = styled.div`
  float: right;
  padding: 0 10px 0px 10px;
`;

export const Icon = styled.button`
  background: transparent;
  border: 0;  
  color: ${props => props.theme.green};
  padding: 10px;
  &:focus{
  outline: none;
}
`;

export const StyledInput = styled.input`
  width: 400px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.green};
  margin: 10px 50px 0 0;
  padding: 10px 10px 10px 10px;
  border-radius: 4px;
  height: 30px;
`;

export const StyledEditingInput = styled.input`
  width: 400px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.green};
  padding: 10px 10px 10px 10px;
  border-radius: 4px;
  height: 30px;
`;

export const StyledButton = styled.button`
  width: 400px;
  font-size: 1.5rem;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.green};
  background-color: ${props => props.theme.white};
  border-radius: 30px;
  margin-top: 30px;
  padding: 5px 30px 5px 30px;
  display: block;
  color: ${props => props.theme.green};
  &:hover {
  background-color: ${props => props.theme.paleGreen};
  color: ${props => props.theme.white};
  }
`;

export const StyledEditingButton = styled.button`
  width: 100px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.green};
  background-color: ${props => props.theme.paleGreen};
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px 30px 5px 30px;
  display: block;
  color: ${props => props.theme.green};
  &:hover {
  border: 1px solid ${props => props.theme.white};
  background-color: ${props => props.theme.paleGreen};
  color: ${props => props.theme.white};
  }
`;

export const StyledForm = styled.form`
   width: 60%;
   margin: 50px auto;
   padding: 10px 10px 10px 10px;
`;

export const StyledEditingForm = styled.form`
   width: 60%;
   margin: 0 auto;
`;

export const Container = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
`;


export const ContainerList = styled.div`
   height: 100%;
   width: 100%;
   overflow: hidden;
`;

export const Title = styled.h3`
  margin: 50px 0 30px 50px;
  color: ${props => props.theme.green};
  font-weight: 700;
`;

export const ListGroup = styled.ul`
  list-style-type: none;
  height: 75vh;
  overflow-y:scroll;
  margin: 0 auto;
  padding-top: 40px;
  border-right: 1px dashed ${props => props.theme.green};
`;
