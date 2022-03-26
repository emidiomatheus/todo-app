import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { theme } from "../../styles/theme";
import { Card } from "../Card";
import { Container } from "./styles";

interface TaskType {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

interface SummaryProps {
  tasks: TaskType[];
}

const options: ApexOptions = {
  legend: {
    markers: {
      offsetX: -10,
      offsetY: 1
    },
    labels: {
      colors: '#fff',
    }
  },
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false,
    }
  },
  grid: {
    show: false
  },
  labels: ['Importante', 'Circunstancial', 'Urgente'],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%',
      }
    }
  },
  colors: [theme.colors.green, theme.colors.yellow, theme.colors.red],
  stroke: {
    show: false
  },
}

export function Summary({ tasks }: SummaryProps) {
  const totalCountTasks = tasks.length
  const finishedTasks = tasks.filter(task => task.isFinished === true ).length
  const notFinishedTasks = tasks.filter(task => task.isFinished === false ).length

  const importantTasks = tasks.filter(task => task.type === 'important').length
  const circumstantialTasks = tasks.filter(task => task.type === 'circumstantial').length
  const urgentTasks = tasks.filter(task => task.type === 'urgent').length

  const series = [importantTasks, circumstantialTasks, urgentTasks]
  
  return (
    <Container>
      <div className="cards" >
        <Card title="Tarefas concluídas" metrics={finishedTasks} />
        <Card title="Tarefas não concluídas" metrics={notFinishedTasks} />
        <Card title="Visão geral">
          <Chart options={options} series={series} type="donut" />
        </Card>
      </div>
    </Container>
  )
}