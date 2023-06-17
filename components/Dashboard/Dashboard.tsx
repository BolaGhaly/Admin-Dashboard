import Head from "next/head";
import styles from "./dashboard.module.scss";
import TotalData from "./TotalData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import RevenueGrowthTooltip from "./RevenueGrowthTooltip";
import RevenueGrowthLegend from "./RevenueGrowthLegend";
import { RevenueGrowthData } from "../../utils/dashboardUtils";

const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={styles.dashboardMain}>
        <h1>Dashboard</h1>
        <TotalData />
        <div className={styles.revenueCharts}>
          <div className={styles.revenueGrowthChart}>
            <h2>Revenue Growth</h2>
            <RevenueGrowthLegend />
            <ResponsiveContainer>
              <LineChart
                data={RevenueGrowthData}
                margin={{ right: 20, top: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="5 25"
                  stroke="var(--notifications-line)"
                />
                <XAxis
                  dataKey="day"
                  fontSize="0.875rem"
                  interval={windowWidth >= 375 ? 0 : 1}
                  tick={{ fill: "var(--text)" }}
                  stroke="var(--text)"
                  tickMargin={5}
                />
                <YAxis
                  fontSize="0.875rem"
                  tick={{ fill: "var(--text)" }}
                  stroke="var(--text)"
                  tickMargin={5}
                />
                <Tooltip
                  content={<RevenueGrowthTooltip />}
                  isAnimationActive={false}
                  cursor={{ stroke: "var(--text)", strokeDasharray: "6 4" }}
                />
                <Line
                  type="monotone"
                  dataKey="This Week"
                  stroke="var(--revenueGrowthLine1)"
                  dot={{ r: 0 }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 2,
                    stroke: "var(--dashboard-bg)",
                  }}
                  strokeWidth={2}
                  animationEasing="ease-out"
                />
                <Line
                  type="monotone"
                  dataKey="Last Week"
                  stroke="var(--revenueGrowthLine2)"
                  dot={{ r: 0 }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 2,
                    stroke: "var(--dashboard-bg)",
                  }}
                  strokeWidth={2}
                  animationEasing="ease-out"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          vero nulla at autem veniam, quos blanditiis accusamus neque ut optio
          debitis nostrum minus deserunt aliquid, quasi laboriosam magni
          voluptatem, dolores est ipsam animi itaque similique totam odio.
          Neque, distinctio? Cupiditate nostrum adipisci, illo sit omnis minus
          dolor ipsam quibusdam maiores recusandae quos, explicabo
          necessitatibus iure quam, soluta quae reiciendis eaque quod ea facere
          quasi! Molestias reiciendis maxime ratione rerum ipsam error maiores
          quas adipisci, fugit veniam magni, nostrum saepe necessitatibus sequi
          ex. Quasi non ad adipisci iste, magnam quam, cum veritatis ipsa dicta
          et nulla, recusandae modi. Incidunt voluptate tempore nisi sint
          commodi aperiam temporibus blanditiis deleniti! Magni, rem labore
          deleniti tempora delectus, voluptatem ea deserunt ipsam minus ullam
          quam quibusdam. Quam assumenda a quas quo corporis reiciendis quasi
          aperiam esse officia, ipsum aut vero, libero deserunt tempora
          repellendus aliquam temporibus dicta numquam impedit mollitia, natus
          veritatis? Cum numquam aut ratione corporis quidem eos debitis. Maxime
          hic sint, illum tempora laborum harum eligendi sequi impedit et
          adipisci tenetur accusantium ratione aperiam iure quod natus veniam
          repellat! Qui, ut saepe neque error distinctio quam quasi nobis sint
          enim provident accusamus reiciendis tenetur eligendi, mollitia
          inventore eaque, nam voluptates illo exercitationem? Doloremque illum
          tenetur saepe minima impedit assumenda magnam accusamus voluptatem
          sunt iste excepturi, pariatur quasi, recusandae explicabo? Sint
          dignissimos accusantium quasi quidem alias exercitationem eius, ad
          dolorum, possimus odit nihil blanditiis iste odio aliquam vero hic!
          Soluta voluptatibus et tempore optio atque placeat nesciunt, enim
          doloremque corrupti veritatis repudiandae nam laudantium sunt natus
          porro voluptate facilis, deserunt rem vero. Quaerat esse odit vel.
          Corrupti, sint quisquam aut voluptatibus exercitationem libero
          aspernatur itaque illum ut voluptates et cupiditate eligendi maiores
          aliquam blanditiis ea nemo est voluptate! Eius, fugit sunt earum quae
          reprehenderit laudantium quas, velit unde labore cupiditate possimus
          dolor, architecto distinctio. Expedita suscipit quidem reiciendis
          aliquam perferendis soluta debitis, reprehenderit rem iure corrupti
          facere animi beatae, voluptas culpa pariatur molestias sit blanditiis
          voluptatem mollitia architecto provident est? Ut minima repudiandae
          accusantium eveniet perferendis a ipsa cupiditate eaque est fugit
          exercitationem sed expedita harum quaerat illo vero, quo quibusdam
          tenetur placeat explicabo omnis? Natus qui voluptas aspernatur quidem
          sunt nostrum laboriosam modi ea, perferendis autem similique libero
          ducimus, saepe earum sapiente consectetur fuga voluptates. Est nihil
          saepe soluta, suscipit expedita quisquam eum perspiciatis iure,
          doloremque similique omnis, sed libero totam nemo? Cupiditate,
          provident perferendis non inventore quibusdam molestias dolorem
          possimus accusamus eligendi?
        </p>
      </main>
    </>
  );
};

export default Dashboard;
