import styled from "styled-components";

interface PercentageBar {
  readonly percentage: number;
}

export const GaugeBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #fff;
    font-size: 1.5rem;
    line-height: 21.6px;
  }
`;

export const PositivePercentage = styled.div<PercentageBar>`
  flex: ${(props) => props.percentage};
  height: 36px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props) => (props.percentage > 0 ? `7px` : 0)};
  background-color: hsla(177, 51%, 48%, 0.6);

  span {
    padding-left: 6px;
  }
`;
export const NegativePercentage = styled.div<PercentageBar>`
  flex: ${(props) => props.percentage};
  height: 36px;
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: ${(props) => (props.percentage > 0 ? `7px` : 0)};
  background-color: hsla(39, 95%, 55%, 0.6);
  span {
    padding-right: 6px;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
`;
