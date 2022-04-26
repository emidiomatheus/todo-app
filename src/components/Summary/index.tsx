import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useTheme } from "styled-components";
import { Card } from "../Card";
import { Container } from "./styles";

interface TaskType {
  _id: string;
  title: string;
  date: string;
  type: 'important' | 'urgent' | 'circumstantial';
  isFinished: boolean;
}

interface SummaryProps {
  tasks: TaskType[];
  finishedTasks: TaskType[];
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
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
  colors: ['#0CCE6B', '#F0A202', '#E83151'],
  stroke: {
    show: false
  },
}

export function Summary({ tasks, finishedTasks }: SummaryProps) {
  const totalFinishedTasks = finishedTasks.length
  const notFinishedTasks = tasks.filter(task => task.isFinished === false ).length

  const importantTasks = tasks.filter(task => task.type === 'important').length
  const circumstantialTasks = tasks.filter(task => task.type === 'circumstantial').length
  const urgentTasks = tasks.filter(task => task.type === 'urgent').length

  const { colors } = useTheme()

  const series = [importantTasks, circumstantialTasks, urgentTasks]
  
  return (
    <Container>
      <div className="cards" >
        <Card title="Tarefas concluídas" metrics={totalFinishedTasks} />
        <Card title="Tarefas não concluídas" metrics={notFinishedTasks} />
        <Card title="Visão geral">
          <Chart
            options={
              {...options,
                legend: {
                  markers: {
                    offsetX: -10,
                    offsetY: 1
                  },
                  labels: {
                    colors: colors.text,
                  }
                }
              }
            }
            series={series}
            type="donut"
          />
        </Card>
      </div>
    </Container>
  )
}