import styled from 'styled-components';

const HEIGHT = 80;

const Rect = styled.div.attrs(props => ({
    style: {
        transition: props.isDragging ? 'none' : 'all 500ms'
    }
}))`
  width: 300px;
  user-select: none;
  height: ${HEIGHT}px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ top }) => 100 + top}px;
  left: calc(50vw - 150px);
  font-size: 20px;
  color: #777;
`;

export default Rect;