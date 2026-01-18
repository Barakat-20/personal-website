import React from "react"
import styled from "styled-components"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import NumberStat from "./numberStat"
import { VerticalAlignContainer, VerticalAlignContent } from "./stockAnalysisDashboard"
import { ThemeGreen, ThemeRed, ThemeYellow } from "./stockAnalysisDashboard"


ChartJS.register(ArcElement, Tooltip, Legend)

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
`;


const ChartWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: left;
`;



interface NewsSentimentAnalysisProps {
  newsTextAnalysis: any;
}


const NewsSentimentAnalysis: React.FC<NewsSentimentAnalysisProps> = ({newsTextAnalysis}) => {
  
  const sentiment = newsTextAnalysis.data.sentiment
  const data = {
    labels: ['Positive', 'Negative', 'Nuetral'],
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
      align: "center" as const,
      maxHeight: 70,
      labels: {
        boxWidth: 3,
        boxHeight: 6,
        padding: 5,
        font: {
          size: 10,
        },
        usePointStyle: true,
      },
    },
  },
};


  return (
    <ChartContainer>
      <ChartWrapper>
        <Doughnut data={data} options={options} />
      </ChartWrapper>
      {/* Text section */}
      <VerticalAlignContainer>
        <VerticalAlignContent>
          <div style={{height: '40px', color: 'black'}}>News Text Analysis</div>
          <div style={{height: '40px'}}>
            <NumberStat
              value={newsTextAnalysis.metadata.sentencesAnalyzed}
              label='Sentences Analyzed'
            ></NumberStat>
          </div>
          <div style={{height: '40px'}}>
            <NumberStat
              value={newsTextAnalysis.metadata.wordAnalyzed}
              label='Words Analyzed'
            ></NumberStat>
          </div>
        </VerticalAlignContent>
      </VerticalAlignContainer>
    </ChartContainer>
  );
};

export default NewsSentimentAnalysis