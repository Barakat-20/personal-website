import React from "react"
import styled from "styled-components"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import NumberStat from "./numberStat"
import { VerticalAlignContainer, VerticalAlignContent } from "./stockAnalysisDashboard"
import { ThemeGreen, ThemeRed, ThemeYellow } from "./stockAnalysisDashboard"


ChartJS.register(ArcElement, Tooltip, Legend)

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const ChartWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid red;
`;

interface NewsSentimentAnalysisProps {
  newsTextAnalysis: any;
}

const NewsSentimentAnalysis: React.FC<NewsSentimentAnalysisProps> = ({
  newsTextAnalysis,
}) => {

  const sentiment = newsTextAnalysis.data.sentiment

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: 'Sentiment',
        data: [sentiment.pos, sentiment.neg, sentiment.neu],
        backgroundColor: [ThemeGreen, ThemeRed, ThemeYellow],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 10,
          padding: 10,           
          font: {
            size: 10,
          },
        },
      },
    },
  };



  return (
    <FlexContainer>
      {/* Doughnut Chart */}
      <ChartWrapper>
        <Doughnut data={data} options={options} />
      </ChartWrapper>

      {/* Text Section */}
      <VerticalAlignContainer>
        <VerticalAlignContent>
          <div style={{ color: "black" }}>
            {newsTextAnalysis}
          </div>

          <div style={{ height: "40px" }}>
            <NumberStat value={newsTextAnalysis.metadata.sentencesAnalyzed} 
            label="Sentences Analyzed" />
          </div>

          <div style={{ height: "40px" }}>
            <NumberStat value={newsTextAnalysis.metadata.wordAnalyzed} label="Words Analyzed" />
          </div>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    </FlexContainer>
  );
};

export default NewsSentimentAnalysis;
