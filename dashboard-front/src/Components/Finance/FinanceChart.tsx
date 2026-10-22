import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer,ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart";
import { ChartLegend, ChartLegendContent } from "../ui/chart";

const chartData = [
  { month: "Jan", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Feb", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Mar", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Apr", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "May", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Jun", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Jul", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Aug", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Sep", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Oct", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Nov", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  { month: "Dec", receita: 12750, despesas: 3450, saldo: 14000, receber: 430 },
  
];

const chartConfig = {
  receita: {
    label: "receita",
    color: "green",
  },
  despesas: {
    label: "despesas",
    color: "red",
  },
  saldo: {
    label: "saldo",
    color: "orange",
  },
  receber: {
    label: "receber",
    color: "blue",
  },
} satisfies ChartConfig;

export const FinanceChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-125 w-full border-2 border-gray-300 rounded-2xl">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false}/> 
        <XAxis 
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent/>} />
        <ChartLegend content={<ChartLegendContent /> } /> 
        <Bar dataKey="receita" fill="var(--color-receita)" radius={4} />
        <Bar dataKey="despesas" fill="var(--color-despesas)" radius={4} />
        <Bar dataKey="saldo" fill="var(--color-saldo)" radius={4} />
        <Bar dataKey="receber" fill="var(--color-receber)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
